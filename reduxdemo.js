const redux = require('redux');

// Reducer function handling both increment and decrement actions
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

// Create Redux store
const store = redux.createStore(counterReducer);
console.log(store.getState()); // Initial state

// Subscriber function
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);

// Dispatch increment action 5 times
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });

// Dispatch decrement action once
store.dispatch({ type: 'decrement' });
