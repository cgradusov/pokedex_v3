import { useState } from 'react';

/**
 * toggleState adds value if it not in state and removes if value in state
 * @param initialValue array of T
 * @returns [state, toggleState]
 */
function useToggleState<T>(initialValue: T[]) {
  const [state, setState] = useState<T[]>(initialValue);

  const toggleState = (element: T) => {
    if (state.includes(element)) {
      setState(state.filter((el) => el !== element));
    } else {
      setState([...state, element]);
    }
  };

  return [state, toggleState] as const;
}

export default useToggleState;
