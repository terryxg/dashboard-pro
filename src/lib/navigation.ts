type NavigateFunction = (path: string, options?: { state?: Record<string, any> }) => void;

export let navigate: NavigateFunction = (_path, _options) => {};

// Function to set a new navigate function
export const setNavigate = (fn: NavigateFunction) => {
  navigate = fn;
};
