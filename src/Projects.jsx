import link from './assets/light-mode/link.png'
import links from './assets/light-mode/links.png'

function Projects() {
    return (
        <div className="projectsContainer">
            <div className="techStackHeader">
                <img src={link} alt="link" class="logo"/>
                <p className="projectsTitle">Projects</p>
            </div>

                <div className="techLinkContainer">
                    <a href="" className="subaruAU"><img src={links} alt="links" class="logo"/></a>
                    <p className="linkTitle">PartsLane Subaru AU</p>
                </div>
                <p className="linkText">E-commerce site for Subaru Car Parts</p>

                <div className="techLinkContainer">
                    <a href="" className="toyotaSG"><img src={links} alt="links" class="logo"/></a>
                    <p className="linkTitle">PartsLane Toyota SG</p>
                </div>
                <p className="linkText">E-commerce site for Toyota Car Parts</p>

                <div className="techLinkContainer">
                    <a href="" className="lexusHK"><img src={links} alt="links" class="logo"/></a>
                    <p className="linkTitle">PartsLane Toyota and Lexus HK</p>
                </div>
                <p className="linkText">E-commerce site for Toyota and Lexus Car Parts</p>

                <div className="techLinkContainer">
                    <a href="" className="bcnLink"><img src={links} alt="links" class="logo"/></a>
                    <p className="linkTitle">BCN Montjuic Tourist Point</p>
                </div>
                <p className="linkText">E-commerce site for a tourist agency in <br/> Barcelona, Spain</p>
        </div>
    )
}

export default Projects