import React from "react"
import meme from "../images/Logo.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header--img" src={meme} alt="picha ya meme generator"/>
            <h2 className="header--title">Hillarious</h2>
            <h4 className="header--project">React Project By @BrianKithusi</h4>
        </header>
    )
}