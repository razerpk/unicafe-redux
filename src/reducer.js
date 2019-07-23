const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return state + 1
    case 'OK':
      return state + 0
    case 'BAD':
      return state - 1
    case 'ZERO':
      return 0
    default: return state
  }
  
}

export default counterReducer