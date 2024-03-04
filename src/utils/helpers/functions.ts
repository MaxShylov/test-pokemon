export interface DebounceFunc {
  (...args: unknown[]): void;
  cancel: VoidFunction;
  pending: () => boolean;
}

export function debounce(func: (...args: unknown[]) => void, delay: number): DebounceFunc {
  let timerId: NodeJS.Timeout | undefined;

  function debounceFunc(...args: unknown[]): void {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      timerId = undefined;
      func(...args);
    }, delay);
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
      timerId = undefined;
    }
  }

  function pending() {
    return timerId !== undefined;
  }

  debounceFunc.cancel = cancel;
  debounceFunc.pending = pending;

  return debounceFunc;
}
