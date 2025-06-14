import experience from './assets/light-mode/experience.png'
import experienceDark from './assets/dark-mode/experience.png'
import useDarkMode from './useDarkMode'

function Experience() {
    const [isDark] = useDarkMode();

    return (
        <div className="experienceContainer">
            
            <div className="techStackHeader">
                <img className="logo" src={isDark ? experienceDark : experience} alt="experience" />
                <p className="experienceTitle">Experience</p>
            </div>

            <p className="jobTitle">
                <strong>Backend Web Developer</strong> | Inchcape Digital | 2024 - 2025 <br/>
                Java Developer (SAP Commerce Cloud (hybris)), <br/>
                Automation Tester (Selenium & Cucumber) <br/> <br/>

                <strong>SAP SD Associate</strong> | Inchcape Digital | 2024 <br/>
                SAP S/4HANA, SD Module <br/> <br/>

                <strong>Web Maintenance</strong> | BCN Montjuic | 2022 <br/>
                Wix, UI/UX
            </p>
        </div>
    )
}

export default Experience