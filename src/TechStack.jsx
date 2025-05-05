import code from './assets/light-mode/code.png'

import react from './assets/common/react.png'
import html from './assets/common/html.png'
import css from './assets/common/css.png'
import javascript from './assets/common/js.png'
import figma from './assets/common/figma.png'

import java from './assets/common/java.png'
import csharp from './assets/common/c-sharp.png'
import python from './assets/common/python.png'
import springBoot from './assets/common/springBoot.png'

import selenium from './assets/common/selenium.png'
import cucumber from './assets/common/cucumber.png'

import wordpress from './assets/common/wordpress.png'
import wix from './assets/common/wix.png'

function TechStack() {
    return (
        <div className="techStackContainer">

            <div className="techStackHeader">
                <img src={code} alt="code" id="code" class="techLogo"/>
                <p className="techStackTitle">Tech Stack</p>
            </div>
            
            <p className="techEndTitle">Frontend</p>
            <div className="techEndContainer">

                <div className="techLogoContainer">
                    <img src={react} alt="react" class="techLogo"/>
                    <p className="stackTitle">React.js</p>
                </div>

                <div className="techLogoContainer">
                    <img src={html} alt="html" class="techLogo"/>
                    <p className="stackTitle">HTML</p>
                </div>

                <div className="techLogoContainer">
                    <img src={css} alt="css" class="techLogo"/>
                    <p className="stackTitle">CSS</p>
                </div>

                <div className="techLogoContainer">
                    <img src={javascript} alt="javascript" class="techLogo"/>
                    <p className="stackTitle">JavaScript</p>
                </div>

                <div className="techLogoContainer">
                    <img src={figma} alt="figma" class="techLogo"/>
                    <p className="stackTitle">Figma</p>
                </div>
            </div>

            <p className="techEndTitle">Backend</p>
            <div className="techEndContainer">

                <div className="techLogoContainer">
                    <img src={java} alt="java" class="techLogo"/>
                    <p className="stackTitle">Java</p>
                </div>

                <div className="techLogoContainer">
                    <img src={csharp} alt="csharp" class="techLogo"/>
                    <p className="stackTitle">C#</p>
                </div>

                <div className="techLogoContainer">
                    <img src={python} alt="python" class="techLogo"/>
                    <p className="stackTitle">Python</p>
                </div>

                <div className="techLogoContainer">
                    <img src={springBoot} alt="springBoot" class="techLogo"/>
                    <p className="stackTitle">Spring Boot</p>
                </div>
            </div>

            <p className="techEndTitle">QA Automation</p>
            <div className="techEndContainer">

                <div className="techLogoContainer">
                    <img src={selenium} alt="selenium" class="techLogo"/>
                    <p className="stackTitle">Selenium</p>
                </div>

                <div className="techLogoContainer">
                    <img src={cucumber} alt="cucumber" class="techLogo"/>
                    <p className="stackTitle">Cucumber</p>
                </div>
            </div>

            <p className="techEndTitle">Content Management System</p>
            <div className="techEndContainer">

                <div className="techLogoContainer">
                    <img src={wordpress} alt="wordpress" class="techLogo"/>
                    <p className="stackTitle">Wordpress</p>
                </div>

                <div className="techLogoContainer">
                    <img src={wix} alt="wix" class="techLogo"/>
                    <p className="stackTitle">Wix</p>
                </div>
            </div>
        </div>
    )
}

export default TechStack