import { INCREMENT, DECREMENT, RESET } from "./Constatnt";

const initialState = 0;

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: return state + 1
        case DECREMENT: return  state > 0 ? state - 1 : state;
        case RESET: return 0
        default:return state
    }
}

export default Reducer