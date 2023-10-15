const initialState = { counter: 0 }

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + 1 }
    case 'decrease':
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
