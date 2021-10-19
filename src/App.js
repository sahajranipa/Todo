import { Switch, Route } from "react-router-dom";
import FavouriteTodo from "./Component/FavouriteTodo";
import Todos from "./Component/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={Todos}></Route>
        <Route exact path="/favourite" component={FavouriteTodo}></Route>
      </Switch>
    </>
  );
};

export default App;
