export default function reducer(state, action) {
  switch (action.type) {
    case 'setQuestion': {
      return {
        ...state,
        question: action.value,
      };
    }
    default: {
      return state;
    }
  }
}
