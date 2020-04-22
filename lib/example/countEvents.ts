import { IBlocEvent } from "../blocUtils";

export class CountEvent implements IBlocEvent {}

export class IncrementEvent extends CountEvent {}

export class DecrementEvent extends CountEvent {}

export class AddEvent extends CountEvent {
  public amount: number = 0;
  public constructor(init?: Partial<AddEvent>) {
    super();
    Object.assign(this, init);
  }
}

export class FibonacciEvent extends CountEvent {}
