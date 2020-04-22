export abstract class BlocState {
  public IsLoading: boolean = false;
  public Error?: string;
}

export interface IBlocEvent {}
