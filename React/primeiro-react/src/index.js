import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"


function PrimeiraFuncao(){

    return(
        <div className="teste">
          Primeiro código em ReactJS
        </div>
    )
}


const App = () => {

    return (
        <div className = "App">
       {PrimeiraFuncao()}
        </div>
    )
}


const rootElement = document.getElementById("root")
ReactDOM.render(<App/>,rootElement)