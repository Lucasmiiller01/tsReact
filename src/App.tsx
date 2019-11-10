import React from 'react';
import { Provider } from "react-redux";
import store from "./store";

import Repository from "./components/RepositoryList";

const App = () => <Provider store={store}>
  <Repository />
</Provider >



export default App;
