import view from './assets/light-mode/view.png'

function LifeOutside() {
    return (
        <div className="lifeOutsideContainer">
            <div className="techStackHeader">
                <img class="logo" src={view} alt="view" />
                <p className="lifeOutsideTitle">LIfe Outside Development</p>
            </div>
            <p className="lifeOutsideText">
                When I’m not coding, I work with startups as a <br/>
                recruiter, helping hire skilled developers for various <br/>
                projects. <br/> <br/>
                I also teach C# at a college on Saturdays—not just <br/>
                to share my knowledge, but also to learn from my <br/>
                students and grow as a developer.
            </p>
        </div>
    )
}

export default LifeOutside