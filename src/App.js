import "./App.css";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import { Input, LoadingIndicator, UserList } from "./components";

function WrapperComponent() {
  const { isLoading, users, error } = useSelector((state) => state);
  return (
    <div className="App">
      <Input />
      {isLoading && <LoadingIndicator />}
      <UserList users={users} error={error} />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <WrapperComponent />
    </Provider>
  );
}

export default App;
