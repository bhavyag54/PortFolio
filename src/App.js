import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SideEmail from "./components/SideEmail";
import SideLinks from "./components/SideLinks";
import AOS from 'aos'
import {LoadingScreen} from "./components/loading";
import { DNA, Triangle } from "react-loader-spinner";

function App() {

  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    window.addEventListener("load", () => {
      AOS.init({});
      fetch("/resumeData.json")
      .then(res => res.json())
      .then(data => {
        setResumeData(data);
        
        setLoading(false);
        // Refresh AOS after the loading screen is hidden
        setTimeout(() => {
          AOS.refresh();
        }, 5000); // Wait for the fade-out animation to complete
      })
    });

    return () => {
      window.removeEventListener("load", AOS.refresh)
    }

  }, [])

  
  return (
    <div className="App">
        <LoadingScreen hidden={!loading}>
        <Triangle
          visible={true}
          height="20vh"
          width="20vw"
          color="var(--text-color)"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          />
        </LoadingScreen>
        <Header/>
        <SideEmail/>
        <Home resumeData={resumeData}/>
        <SideLinks resumeData={resumeData?.main}/>
    </div>
  );
}

export default App;
