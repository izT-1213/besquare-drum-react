import React from "react";
import "./header.css";

const Header = () => {
    return (<nav>
        <span className="branding">Drum App</span>
        <div className="menu-buttons">
            <button>Start Game</button>
            <button>Record</button>
            <button>Playback</button>
        </div>
    </nav>);
};

export default Header;