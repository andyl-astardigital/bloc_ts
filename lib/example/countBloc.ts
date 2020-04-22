import { Bloc } from "../index";
import { CountState } from "./countStates";
import {
  CountEvent,
  IncrementEvent,
  DecrementEvent,
  AddEvent,
  FibonacciEvent,
} from "./countEvents";

export class CountBloc extends Bloc<CountEvent, CountState> {
  async *HandleEvent(event: CountState): AsyncGenerator<CountState> {
    if (event instanceof IncrementEvent) {
      yield this.currentState.CopyWith({
        Amount: this.currentState.Amount + 1,
      });
    }
    if (event instanceof DecrementEvent) {
      yield this.currentState.CopyWith({
        Amount: this.currentState.Amount + 1,
      });
    }
    if (event instanceof AddEvent) {
      yield this.currentState.CopyWith({
        Amount: this.currentState.Amount + event.Amount,
      });
    }

    if (event instanceof FibonacciEvent) {
      var current = 1;
      var prev = 0;

      for (let index = 1; index < 10; index++) {
        var amount = current + prev;

        //we can keep yielding new states as many times as we like
        yield this.currentState.CopyWith({
          Amount: amount,
        });
        current = amount;
        prev = current;
      }
    }
  }
}
