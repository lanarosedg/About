import { useState } from 'react';
import whatsapp from './assets/light-mode/whatsapp.png';
import whatsappColored from './assets/coloredIcons/whatsapp.png';
import linkedin from './assets/light-mode/linkedin.png';
import linkedinColored from './assets/coloredIcons/linkedin.png';
import github from './assets/light-mode/github.png';
import githubColored from './assets/coloredIcons/github.png';

function Contacts() {
    const [whatsappIcon, setWhatsappIcon] = useState(whatsapp); 
    const [linkedinIcon, setLinkedinIcon] = useState(linkedin);
    const [githubIcon, setGithubIcon] = useState(github);

    return (
        <div className="contactsContainer">
            <a
                href="https://wa.me/+639324640186"
                className="whatsAppLink"
                onMouseEnter={() => setWhatsappIcon(whatsappColored)}
                onMouseLeave={() => setWhatsappIcon(whatsapp)}
            >
                <img className="logo" src={whatsappIcon} alt="whatsapp" />
            </a>

            <a 
                href="https://www.linkedin.com/in/lanarosedg/" 
                className="linkedInLink"
                onMouseEnter={() => setLinkedinIcon(linkedinColored)}
                onMouseLeave={() => setLinkedinIcon(linkedin)}
                >
                <img className="logo" id="linkedinIcon" src={linkedinIcon} alt="linkedin" />
            </a>

            <a 
                href="https://github.com/lanarosedg" 
                className="githubLink"
                onMouseEnter={() => setGithubIcon(githubColored)}
                onMouseLeave={() => setGithubIcon(github)}
                >
                <img className="logo" id="githubIcon" src={githubIcon} alt="github" />
            </a>
        </div>
    );
}

export default Contacts;
