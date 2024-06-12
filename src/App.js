import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import store from "./Utils/store";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
