import { ADD_CAKE, ADD_ICECREAM } from "./Constatnt";

const initialState = [
    {
        cake1: 10,
        ice_cream1: 20,
    },
    {
        cake2: 30,
        ice_cream2: 40,
    },
];

const Reducer = (state = { case1: initialState[0], case2: initialState[1] }, action) => {
    switch(action.type){
    case ADD_CAKE:
      return {
        ...state.case1,
        cake1: state.case1.cake1 - 1,
      };
    case ADD_ICECREAM:
      return {
        ...state.case1,
        ice_cream1: state.case1.ice_cream1 - 1,
      };
       case ADD_CAKE:
      return {
        ...state.case2,
        cake2: state.case2.cake2 - 1,
      };
    case ADD_ICECREAM:
      return {
        ...state.case2,
        ice_cream2: state.case2.ice_cream2 - 1,
      };
    default:
      return state;
    }
}

export default Reducer;