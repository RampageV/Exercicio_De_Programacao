import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button.jsx"
import ComponentA from "./ComponentA.jsx"
import ComponentB from "./ComponentB.jsx"
import "./styles.css"

function soma(a,b){
          alert(a+b)
}

function App() {

    return (
        <div>
            Hello World
          <Button onClick={() => soma(50,50)} name = "Erick Pessoa"/>
          <ComponentA>
              <ComponentB>
                  <Button onClick={() => soma(80,50)} name = "Rick Pessoa"/>
              </ComponentB>
          </ComponentA>
        </div>
     
    )

}


const rootElement = document.getElementById("root")
ReactDOM.render(App(),rootElement)