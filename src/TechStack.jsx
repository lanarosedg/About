import code from './assets/light-mode/code.png'


function TechStack() {
    return (
        <div className="techStackContainer">

            <div className="techStackHeader">
                <img src={code} alt="code" id="code" class="techLogo"/>
                <p className="techStackTitle">Tech Stack & Tools</p>
            </div>
            
            <p className="techEndTitle">Frontend</p>
            <div className="techEndContainer">

                <button className='techEndButton'>React.js</button>
                <button className='techEndButton'>HTML</button>
                <button className='techEndButton'>CSS</button>
                <button className='techEndButton'>JavaScript</button>
                <button className='techEndButton'>Figma</button>
                
            </div>

            <p className="techEndTitle">Backend</p>
            <div className="techEndContainer">

                <button className="techEndButton">Java</button>
                <button className="techEndButton">C#</button>
                <button className="techEndButton">Python</button>
                <button className="techEndButton">Spring Boot</button>
            
            </div>

            <p className="techEndTitle">QA Automation</p>
            <div className="techEndContainer">
                
                <button className="techEndButton">Selenium</button>
                <button className="techEndButton">Cucumber</button>
                
            </div>

            <p className="techEndTitle">Content Management System</p>
            <div className="techEndContainer">

                <button className="techEndButton">Wordpress</button>
                <button className="techEndButton">Wix</button>
                <button className="techEndButton">SEO</button>
                
            </div>
        </div>
    )
}

export default TechStack