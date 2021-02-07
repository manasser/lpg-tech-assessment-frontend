import React from "react"

import Logo from "../../images/go_city_logo.png"

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <h1>Leisure Pass Group - Product Management Application</h1>
        </header>
    )
}

export default Header