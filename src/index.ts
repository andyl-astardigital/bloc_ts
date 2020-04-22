import { BehaviorSubject, Observable } from "rxjs";
import { IBlocEvent, BlocState } from "./blocUtils";

export abstract class Bloc<
  EventType extends IBlocEvent,
  StateType extends BlocState
> {
  //keep track of the events coming in
  private _events: BehaviorSubject<any> = new BehaviorSubject<any>("");
  //keep track of the states going out
  private _states: BehaviorSubject<StateType>;
  protected currentState: StateType;

  //the observable other stuff will bind to to get our current state
  public State: Observable<StateType>;
  public InitialState: StateType;

  constructor(initialState: StateType) {
    //we need an initial state for our behaviour subjects
    this.currentState = this.InitialState = initialState;

    //init our subject
    this._states = new BehaviorSubject<StateType>(initialState);
    //init our external observable that stuff listens to
    this.State = this._states;

    //every time we get a new event run the child method
    this._events.subscribe((event) => {
      this.DispatchEvent(event);
    });
  }

  //async read all the yields coming from the child method
  private async DispatchEvent(event: EventType) {
    var stateIterator = this.HandleEvent(event);
    //fancy shizzle to keep reading the asyncgenerator
    for await (let state of stateIterator) {
      //console.log("Event: ", event, " State: ", state);
      this.currentState = state;
      this._states.next(state);
    }
  }

  //receive new events
  public async AddEvent(event: EventType) {
    //add the event
    this._events.next(event);
  }

  //call inherited classes method
  abstract HandleEvent(event: EventType): AsyncGenerator<StateType>;

  public Dispose() {
    this._events.complete();
    this._states.complete();
  }
}
