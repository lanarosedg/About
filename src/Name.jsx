import moon from './assets/light-mode/moon.png'
import location from './assets/light-mode/location.png'

function Name() {
    return(
        <div class="nameContainer">
            <p class="nameTitle">Lana Rose &nbsp;
                <a href="" className="moonLink">
                    <img src={moon} alt="moon" class='moonIcon'/>
                </a>
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