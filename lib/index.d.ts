import { Observable } from "rxjs";
import { IBlocEvent, BlocState } from "./blocUtils";
export declare abstract class Bloc<EventType extends IBlocEvent, StateType extends BlocState> {
    private _events;
    private _states;
    protected currentState: StateType;
    State: Observable<StateType>;
    InitialState: StateType;
    constructor(initialState: StateType);
    private DispatchEvent;
    AddEvent(event: EventType): Promise<void>;
    abstract HandleEvent(event: EventType): AsyncGenerator<StateType>;
    Dispose(): void;
}
