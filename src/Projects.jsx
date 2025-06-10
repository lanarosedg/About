import link from './assets/light-mode/link.png'
import links from './assets/light-mode/links.png'

import linkDark from './assets/dark-mode/link.png'
import linksDark from './assets/dark-mode/links.png'

import useDarkMode from './useDarkMode'

function Projects() {
    const [isDark] = useDarkMode();

    return (
        <div className="projectsContainer">
            <div className="techStackHeader">
                <img src={isDark ? linkDark : link} alt="link" class="logo"/>
                <p className="projectsTitle">Projects</p>
            </div>

                <div className="techLinkContainer">
                    <a 
                        href="https://www.partslane.com.au/" 
                        className="subaruAU">
                            <img src={isDark ? linksDark : links} alt="links" class="logoLink"/>
                        </a>
                    <p className="linkTitle">PartsLane Subaru AU</p>
                </div>
                <p className="linkText">E-commerce site for Subaru Car Parts</p>

                <div className="techLinkContainer">
                    <a 
                        href="https://www.partslane.com.sg/" 
                        className="toyotaSG">
                            <img src={isDark ? linksDark : links} alt="links" class="logoLink"/>
                        </a>
                    <p className="linkTitle">PartsLane Toyota SG</p>
                </div>
                <p className="linkText">E-commerce site for Toyota Car Parts</p>

                <div className="techLinkContainer">
                    <a 
                        href="https://www.partslane.com.hk/" 
                        className="lexusHK">
                            <img src={isDark ? linksDark : links} alt="links" class="logoLink"/>
                        </a>
                    <p className="linkTitle">PartsLane Toyota and Lexus HK</p>
                </div>
                <p className="linkText">E-commerce site for Toyota and Lexus Car Parts</p>

                <div className="techLinkContainer">
                    <a 
                        href="https://www.bcnmtpoint.com/" 
                        className="bcnLink">
                            <img src={isDark ? linksDark : links} alt="links" class="logoLink"/>
                        </a>
                    <p className="linkTitle">BCN Montjuic Tourist Point</p>
                </div>
                <p className="linkText">E-commerce site for a tourist agency in <br/> Barcelona, Spain</p>
        </div>
    )
}

export default Projects