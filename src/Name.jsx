import { useState } from 'react';
import moon from './assets/light-mode/moon.png'
import moonBlack from './assets/light-mode/moonBlack.png'
import location from './assets/light-mode/location.png'

function Name() {
    const [moonIcon, setMoonIcon] = useState(moon);

    return(
        <div class="nameContainer">
            <p class="nameTitle">Lana Rose &nbsp;
                {/* <a 
                    href="" 
                    className="moonLink"
                    onMouseEnter={() => setMoonIcon(moonBlack)}
                    onMouseLeave={() => setMoonIcon(moon)}
                    >
                    <img src={moonIcon} alt="moon" class='moonIcon'/>
                </a> */}
            </p>
            <p class="location">
                <img src={location} alt="location" class="logo"/>  
            Manila, Philippines
            </p>
            <p class="role">Full Stack Web Developer</p>
        </div>
    )
}

export default Name