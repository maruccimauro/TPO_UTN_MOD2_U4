import { Fragment } from "react";
import { useReducer } from "react";


export default function General(){
    const eAction = {
        increment : 0,
        decrement : 1
    }
    const eState ={
        state1 : "state1",
        state2 : "state2"
    }

    function reducer(state,action){
       
            switch (action.action) {
              case eAction.increment:
                return { ...state, [action.state]: state[action.state] + 1 };
              case eAction.decrement:
                return  { ...state, [action.state]: state[action.state] - 1 };
              default:
            }
        return state;
    }

    
    const initialState = {state1:0,state2:0}
    const [contador,dispatch] = useReducer(reducer,initialState)

    return (
      <Fragment>
        <p>estado 1 : {contador.state1}</p>
        <p>estado 2 : {contador.state2}</p>
        <button
          onClick={() => {
            dispatch({ action: eAction.increment, state: eState.state1 });
          }}
        >
          incrementar estado1
        </button>
        <button
          onClick={() => {
            dispatch({ action: eAction.decrement, state: eState.state1 });
          }}
        >
          decrementar estado1
        </button>
        <button
          onClick={() => {
            dispatch({ action: eAction.increment, state: eState.state2 });
          }}
        >
          incrementar estado2
        </button>
        <button
          onClick={() => {
            dispatch({ action: eAction.decrement, state: eState.state2 });
          }}
        >
          decrementar estado2
        </button>
      </Fragment>
    );
}


