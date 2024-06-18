import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import store from "./Utils/store";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="fixed-header">
          <Head />
        </div>
        <div className="py-24">
          <AppRoutes />
        </div>
      </div>
    </Provider>
  );
}

export default App;
