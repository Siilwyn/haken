type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

type UseState = <S>(initialState: S | (() => S)) => [S, Dispatch<SetStateAction<S>>];

type JsonStringifyable = Parameters<typeof JSON.stringify>[0];

type LocalStorageUpdater<S> = (value: JsonStringifyable | ((prevState: S | string) => JsonStringifyable)) => void;
type UseLocalStorage = <S>(key: string, initialState: S) => [string, LocalStorageUpdater<S>];

declare function createUseLocalStorage({ useState }: { useState: UseState }): UseLocalStorage;
export { createUseLocalStorage }
