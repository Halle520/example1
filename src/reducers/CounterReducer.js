import {INCREASE, DECREASE, RESET} from '../action'

const initialState = {
  times : 0
}

export const counterReducer = (state = initialState, action) =>{
  switch(action.type){
    case INCREASE:
      return {...state, times: state.times+1}
    case DECREASE:
      return {...state, times: state.times-1}
    case RESET:
        return {...state, times: 0}
    default:
      return state

  }
}
