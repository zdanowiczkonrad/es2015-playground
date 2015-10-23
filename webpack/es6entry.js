import React from "react"
import ReactDOM from "react-dom"
import Greeter from "./modules/reactGreeter"
import './style.scss'
ReactDOM.render(
    <Greeter name="Konrad"/>,
    document.getElementById("react-entry")
    )
