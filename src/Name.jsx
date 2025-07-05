import { useState } from 'react';
import moon from './assets/light-mode/moon.png';
import moonBlack from './assets/light-mode/moonBlack.png';
import moonYellowFilled from './assets/dark-mode/moonFilled.png';
import location from './assets/light-mode/location.png';
import locationdark from './assets/dark-mode/location.png';
import useDarkMode from './useDarkMode';

function Name() {
    const [moonIcon, setMoonIcon] = useState(moon);
    const [isDark, setIsDark] = useDarkMode(); 

    const toggleDarkMode = () => setIsDark(!isDark);

    return (
        <div className="nameContainer">
            <div className="nameTitleContainer">
                <p className="nameTitle">Lana Rose</p>
                <a 
                    href="#"
                    className="moonLink"
                    onMouseEnter={() => setMoonIcon(moonBlack)}
                    onMouseLeave={() => setMoonIcon(moon)}
                    onClick={toggleDarkMode}
                >
                    <img 
                        src={isDark ? moonYellowFilled : moonIcon} 
                        alt="moon" 
                        className="moonIcon"
                    />
                </a>
            </div>
            <p className="location">
                <img src={isDark ? locationdark : location} alt="location" className="logo"/>  
                Manila, Philippines
            </p>
            <p className="role">Web Developer | Designer</p>
        </div>
    );
}

export default Name;
