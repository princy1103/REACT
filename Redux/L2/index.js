const reduxLogger = require('redux-logger')
const { applyMiddleware } = require('redux')
const redux = require('redux')
const createStore = redux.createStore
const logger = reduxLogger.createLogger()
const combineReducers = redux.combineReducers

const BUY_ICE_CREAM = 'BUY_ICE_CREAM'
const BUY_CHOCO = 'BUY_CHOCO'

const buy_ice_cream = () => {
    return {
        type: BUY_ICE_CREAM
    }
}

const buy_choco = () => {
    return {
        type: BUY_CHOCO
    }
}

const iceinitialState = {
    numOfIceCream: 10

}
const chocoinitialState = {
    numOfChoco: 20
}


const icereducer = (state = iceinitialState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}

const chocoreducer = (state = chocoinitialState, action) => {
    switch (action.type) {
        case BUY_CHOCO: return {
            ...state,
            numOfChoco: state.numOfChoco - 1
        }
        default: return state
    }
}


const rootReducers = combineReducers({
    icereducer,
    chocoreducer
})


const store = createStore(rootReducers, applyMiddleware(logger))

console.log('initial state', store.getState());

// store.subscribe(() => console.log('Updated state:', store.getState()));

store.dispatch(buy_ice_cream())
store.dispatch(buy_ice_cream())
store.dispatch(buy_choco())
store.dispatch(buy_choco())