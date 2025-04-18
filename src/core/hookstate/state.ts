import { hookstate, useHookstate } from '@hookstate/core';

// Define the global state
export const globalState = hookstate({
    user: null, // Example: user information
    isAuthenticated: false, // Example: authentication status
});

// Example: Function to update user information
export const updateUser = (user: any) => {
    globalState.user.set(user);
}

export const useGlobalState = () => {
   return useHookstate(globalState);
}