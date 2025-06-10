import { useState } from 'react';
import whatsapp from './assets/light-mode/whatsapp.png';
import whatsappColored from './assets/coloredIcons/whatsapp.png';
import linkedin from './assets/light-mode/linkedin.png';
import linkedinColored from './assets/coloredIcons/linkedin.png';
import github from './assets/light-mode/github.png';
import githubColored from './assets/coloredIcons/github.png';
import youtube from './assets/light-mode/youtube.png';
import youtubeColored from './assets/coloredIcons/youtube.png';
import useDarkMode from './useDarkMode';



function Contacts() {
    const [isDark] = useDarkMode();

    const [whatsappIcon, setWhatsappIcon] = useState(whatsapp); 
    const [linkedinIcon, setLinkedinIcon] = useState(linkedin);
    const [githubIcon, setGithubIcon] = useState(github);
    const [youtubeIcon, setYoutubeIcon] = useState(youtube);

    return (
        <div className="contactsContainer">
            <a
                href="https://wa.me/+639324640186"
                className="whatsAppLink"
                onMouseEnter={() => setWhatsappIcon(whatsappColored)}
                onMouseLeave={() => setWhatsappIcon(whatsapp)}
            >
                <img className="logo" src={isDark ? whatsappColored : whatsapp} alt="whatsapp" />
            </a>

            <a 
                href="https://www.linkedin.com/in/lanarosedg/" 
                className="linkedInLink"
                onMouseEnter={() => setLinkedinIcon(linkedinColored)}
                onMouseLeave={() => setLinkedinIcon(linkedin)}
                >
                <img className="logo" id="linkedinIcon" src={isDark ? linkedinColored : linkedin} alt="linkedin" />
            </a>

            <a 
                href="https://github.com/lanarosedg" 
                className="githubLink"
                onMouseEnter={() => setGithubIcon(githubColored)}
                onMouseLeave={() => setGithubIcon(github)}
                >
                <img className="logo" id="githubIcon" src={isDark ? githubColored : github} alt="github" />
            </a>
            <a 
                href="https://www.youtube.com/@shroomsCode"
                className="youtubeLink"
                onMouseEnter={() => setYoutubeIcon(youtubeColored)}
                onMouseLeave={() => setYoutubeIcon(youtube)}
                >
                <img className="logo" id="youtubeIcon" src={isDark ? youtubeColored : youtube} alt="youtube" />
            </a>
        </div>
    );
}

export default Contacts;
