export interface DebounceFunc {
  (...args: unknown[]): void;
  cancel: () => void;
}

export function debounce(func: (...args: unknown[]) => void, delay: number): DebounceFunc {
  let timeoutId: NodeJS.Timeout;

  function debounceFunc(...args: unknown[]): void {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  }

  function cancel() {
    return clearTimeout(timeoutId);
  }

  debounceFunc.cancel = cancel;

  return debounceFunc;
}
