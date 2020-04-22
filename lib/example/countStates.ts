import { BlocState } from "../blocUtils";

export class CountState extends BlocState {
  public Amount: number = 0;
  public constructor(init?: Partial<CountState>) {
    super();
    Object.assign(this, init);
  }
  public CopyWith(init: Partial<CountState>): CountState {
    return new CountState({
      IsLoading: "IsLoading" in init ? init.IsLoading : this.IsLoading,
      Error: "Error" in init ? init.Error : this.Error,
      Amount: "Amount" in init ? init.Amount : this.Amount,
    });
  }
}
