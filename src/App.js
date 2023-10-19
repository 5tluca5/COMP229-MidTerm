import ShopForm from "./components/Form/ShopForm";
import ReactShopForm from "./components/Form/ReactShopForm";
import ReactProductForm from "./components/Form/ReactProductForm";
import "./App.css"
function App() {
  return (
    <div className="App">
      {/* {<ShopForm/>} */}
      {<ReactShopForm/>}
      {<ReactProductForm/>}
    </div>
  );
}

export default App;
