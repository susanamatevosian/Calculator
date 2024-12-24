import { ACTIONS } from "./Calculate"

export default function OperationButton({dispatch, operation }){
    return(
        <button onClick={() => dispatch({type: ACTIONS.COOSE_OPERATION, payload: {operation}})}>{operation}</button>
    )
};