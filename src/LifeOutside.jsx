import view from './assets/light-mode/view.png'
import viewdark from './assets/dark-mode/view.png'

import useDarkMode from './useDarkMode'

function LifeOutside() {
    const [isDark] = useDarkMode();

    return (
        <div className="lifeOutsideContainer">
            <div className="techStackHeader">
                <img class="logo" src={isDark ? viewdark : view} alt="view" />
                <p className="lifeOutsideTitle">Life Outside Development</p>
            </div>
            <p className="lifeOutsideText">
                When I’m not coding, I work with startups as a
                recruiter, helping hire skilled developers for various
                projects. <br/> <br/>
                I also teach C# at a college on Saturdays—not just
                to share my knowledge, but also to learn from my
                students and grow as a developer.
            </p>
        </div>
    )
}

export default LifeOutside