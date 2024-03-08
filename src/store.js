// store.js
import { createStore } from 'redux';

const initialState = {
  user: null, // Current logged-in user
  leaves: [], // Array to store leave requests
  // Add other necessary state properties
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'SUBMIT_LEAVE_REQUEST':
      return { ...state, leaves: [...state.leaves, action.payload] };
    // Add other action cases as needed
    default:
      return state;
  }
};

export const login = (username) => ({ type: 'LOGIN', payload: username });
export const logout = () => ({ type: 'LOGOUT' });
export const submitLeaveRequest = (leaveRequest) => ({
  type: 'SUBMIT_LEAVE_REQUEST',
  payload: leaveRequest,
});

const store = createStore(reducer);

export default store;
