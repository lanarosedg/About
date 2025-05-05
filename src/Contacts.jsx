import whatsapp from './assets/light-mode/whatsapp.png';
import whatsappColored  from './assets/coloredIcons/whatsapp.png';
import linkedin from './assets/light-mode/linkedin.png';
import github from './assets/light-mode/github.png';

function Contacts() {
    return (
        <div className="contactsContainer">
            <a href="https://wa.me/+639324640186" className="whatsAppLink"><img class="logo" id=" " src={whatsapp} onmouseover={whatsappColored} onMouseDown={whatsapp} alt="whatsapp" /></a>
            <a href="https://www.linkedin.com/in/lanarosedg/" className="linkedInLink"><img class="logo" id="linkedinIcon" src={linkedin} alt="linkedin" /></a>
            <a href="https://github.com/lanarosedg" className="githubLink"><img class="logo" id="githubIcon" src={github} alt="github" /></a>
           
        </div>
    )
}

export default Contacts