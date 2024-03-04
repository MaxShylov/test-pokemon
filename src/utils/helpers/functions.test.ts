import { debounce, type DebounceFunc } from './functions';

describe('debounce function', () => {
  let func: jest.Mock;
  let debouncedFunc: DebounceFunc;

  beforeEach(() => {
    func = jest.fn();
    jest.useFakeTimers();
    debouncedFunc = debounce(func, 500);
  });

  it('should execute the function only once', () => {
    for (let i = 0; i < 10; i++) {
      debouncedFunc(i);
    }

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenLastCalledWith(9);
  });

  it('should not execute the function immediately', () => {
    debouncedFunc(0);

    expect(func).not.toBeCalled();
  });

  it('should execute the function after specified time', () => {
    debouncedFunc(0);

    jest.advanceTimersByTime(500);

    expect(func).toBeCalledWith(0);
  });

  it('should execute the function with the latest arguments', () => {
    debouncedFunc(0);
    debouncedFunc(1);

    jest.runAllTimers();

    expect(func).toBeCalledWith(1);
  });

  it('should cancel the execution on explicit cancelation', () => {
    debouncedFunc(0);
    debouncedFunc.cancel();

    jest.runAllTimers();

    expect(func).not.toBeCalled();
  });

  it('should show pending status', () => {
    debouncedFunc(0);
    expect(debouncedFunc.pending()).toBeTruthy();

    jest.advanceTimersByTime(500);

    expect(debouncedFunc.pending()).toBeFalsy();
  });
});
