import { CountBloc } from "./countBloc";
import {
  IncrementEvent,
  DecrementEvent,
  AddEvent,
  FibonacciEvent,
} from "./countEvents";
import { CountState } from "./countStates";

//typically this would be some component (React/Angular?etc)
export class Counter {
  //this would be shared across the component tree via Reacts Context for example
  private countBloc: CountBloc = new CountBloc(new CountState());

  constructor() {
    //we listen for state (and rerender our component)
    this.countBloc.State.subscribe((state) => {
      console.log(state);
    });

    //based on user interaction we fire events with relevant info for the business logic to deal with
    this.countBloc.AddEvent(new IncrementEvent());
    this.countBloc.AddEvent(new DecrementEvent());
    this.countBloc.AddEvent(new AddEvent({ amount: 500 }));

    //AddEvents can trigger multiple 'yields' of state
    //in this case we are going to yield 50 state changes as we compute new
    //entries in the Fib sequence
    this.countBloc.AddEvent(new FibonacciEvent());
  }
}

new Counter();
