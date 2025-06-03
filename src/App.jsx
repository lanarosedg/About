import Photo from './Photo.jsx';
import Name from './Name.jsx';
import Introduction from './Introduction.jsx';
import Email from './Email.jsx';
import Contacts from './Contacts.jsx';
import Experience from './Experience.jsx';
import TechStack from './TechStack.jsx';
import LifeOutside from './LifeOutside.jsx';
import Projects from './Projects.jsx';
import Footer from './Footer.jsx';


function App() {
  return(
    <>
      <div class="App">
        <Photo/>
        <Name/>
        <Email/>
        <Introduction/>
        <Contacts/>
        <Experience/>
        {/* <TechStack/>
        <LifeOutside/>
        <Projects/>
        <Footer/> */}
      </div>
    </>
  );
}

export default App
