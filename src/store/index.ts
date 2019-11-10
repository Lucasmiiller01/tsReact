import { createStore, Store, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { RepositoriesState } from "./ducks/repositories/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
    repositories: RepositoriesState
}
const sagaMiddleware = createSagaMiddleWare();
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;