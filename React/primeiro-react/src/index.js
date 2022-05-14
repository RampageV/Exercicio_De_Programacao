import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const element = "Fala pessoal"

function App() {

    return (
         <h2>{element} </h2>
    )

}


const rootElement = document.getElementById("root")
ReactDOM.render(App(),rootElement)