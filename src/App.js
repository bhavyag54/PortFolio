import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import SideEmail from "./components/SideEmail";
import SideLinks from "./components/SideLinks";
import AOS from 'aos'
import {LoadingScreen} from "./components/loading";
import { Triangle } from "react-loader-spinner";

function App() {

  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const handleLoad = async () => {
      setLoading(true)
      AOS.init({})
      try {
        const data = await fetch("/resumeData.json")
        const res = await data.json()
        setResumeData(res)
      } catch (error) {
        console.error("Failed to load resume data:", error);
      } finally {
        setLoading(false)
        setTimeout(() => {
          AOS.refresh()
        }, 2000)
      }
    }

    window.addEventListener("load", handleLoad)
    return () => {
      window.removeEventListener("load", handleLoad)
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
