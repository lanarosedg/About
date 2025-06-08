import { useState } from 'react';
import moon from './assets/light-mode/moon.png'
import moonBlack from './assets/light-mode/moonBlack.png'
import location from './assets/light-mode/location.png'
import useDarkMode from './useDarkMode';

function Name() {
    const [moonIcon, setMoonIcon] = useState(moon);

    return(
        <div class="nameContainer">
            <div className="nameTitleContainer">
                <p class="nameTitle">Lana Rose</p>
                <a 
                        href="" 
                        className="moonLink"
                        onMouseEnter={() => setMoonIcon(moonBlack)}
                        onMouseLeave={() => setMoonIcon(moon)}
                        >
                        <img 
                            src={moonIcon} 
                            alt="moon" 
                            className="moonIcon"
                            onClick={useDarkMode}
                        />
                </a>
            </div>
            <p class="location">
                <img src={location} alt="location" class="logo"/>  
            Manila, Philippines
            </p>
            <p class="role">Full Stack Web Developer</p>
        </div>
    )
}

export default Name