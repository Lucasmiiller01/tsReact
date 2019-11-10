import { Reducer } from "redux";
import { RepositoriesState, RepositoriesTypes } from "./types";

const INITIAL_STATE: RepositoriesState = {
    data: [{ id: 1, name: "teste" }],
    error: false,
    loading: false
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            return { ...state, loading: true }
        case RepositoriesTypes.LOAD_SUCCESS:
            return { ...state, loading: false, data: action.payload, error: false }
        case RepositoriesTypes.LOAD_REQUEST:
            return { ...state, loading: false, error: true }
        default:
            return { ...state }
            break;
    }
}

export default reducer;