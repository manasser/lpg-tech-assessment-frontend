import './App.css'
import './App.scss';

import Products from "./components/Products/Products"
import Header from "./components/Header/Header"
import InputForm from "./components/InputForm/InputForm"

function App() {
    return (
        <div>
            <Header />
            <InputForm />
            <Products />
        </div>
    )
}

export default App;
