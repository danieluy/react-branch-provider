export type UpdateState<T> = React.Dispatch<React.SetStateAction<T>>;

export type BranchProvider<T> = {
  get context(): React.Context<T>;
  get state(): T;
  set state(state: T);
  set updater(setFn: React.Dispatch<React.SetStateAction<T>>);
  setState: (cb: (state: T) => void) => void;
};
