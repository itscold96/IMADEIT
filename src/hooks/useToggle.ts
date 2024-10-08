import { useReducer } from 'react';

export const useToggle = () => {
  const [toggleValue, switchingToggle] = useReducer((prevState) => !prevState, false);

  return { toggleValue, switchingToggle };
};
