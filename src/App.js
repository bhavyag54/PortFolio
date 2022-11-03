import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SideEmail from "./components/SideEmail";
import SideLinks from "./components/SideLinks";
import AOS from 'aos'

function App() {

  const [resumeData, setResumeData] = useState(null)

  useEffect(() => {

    
    AOS.init({
    });
    window.addEventListener("load", AOS.refresh);

    fetch("/resumeData.json")
    .then(res => res.json())
    .then((data) => {
      setResumeData(data);
    })

  }, [])

  
  return (
    <div className="App">

        

        <Header/>
        <SideEmail/>
        <Home resumeData={resumeData}/>
        <SideLinks resumeData={resumeData?.main}/>
    </div>
  );
}

export default App;
