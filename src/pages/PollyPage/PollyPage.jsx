import React from "react";
import { useState } from "react";
// import FileUpload from "../../components/polly/fileUpload";
// import FileResponse from "../../components/polly/fileResponse";
// import Loading from "../../components/polly/loading";
import LanguageChoose from "../../components/polly/LanguageChoose";
import "./PollyPage.css";
import config from "../../config/config.js"

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "../TextExtractPage/TextExtractPage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const backendUrl = `${config.BACKEND_ENDPOINT}/api/v1/polly/output`;

const TranscribePage = () => {
  const [text, setText] = useState('');
  // const [audioUrl, setAudioUrl] = useState(null);
  const [setAudioUrl] = useState(null);


  const [buttonColor, setButtonColor] = useState('#007bff'); 
  const [buttonTextColor, setButtonTextColor] = useState('#fff'); 

  
  const selects = [
    {label: 'English'},
    // {label: 'Chinese'},
    // {label: 'German'},
];



  const handleButtonClick = () => {
      setButtonColor('#0056b3');
      setButtonTextColor('#ccc');

    if(!text) {
      return;
    }

   //Send text to the backend to obtain audio data
    axios.post(backendUrl, text, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'text/plain', 
      },
    })
      .then((response) => {
        const audioBlob = new Blob([response.data], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);

        // play audio
        const audioElement = new Audio(audioUrl);
        audioElement.play();
      })
      .catch((error) => {
        console.error('error:', error);
      });
  };


  

  return (<div className={styles.container}>
    <Header />
    <div className={styles.mainArea}>
    <div className={styles.sidebar}>
        <Sidebar />
    </div>
    <div className={styles.textExtractPageArea}>
        {/*  Navigation links topleft */}
        <div className={styles.dashboardText}>
            <Link to="/console" className={styles.dashboardLink}>
                Dashboard
            </Link>
            <span>/</span>
            <Link to="/polly" className={styles.textracterLink}>
                Text-to-Audio
            </Link>
        </div>
        <div className="textExtractContainer">
            <h1 className='defaultH1'>Please Input Your Text</h1>
            <h2 className="defaultH2">Accurately Reading your Text</h2>
            <LanguageChoose selects = {selects}/>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Please Enter Here"
              className="largerTextarea" 
            />
            <button onClick={handleButtonClick}  
                    style={{ backgroundColor: buttonColor, 
                             color: buttonTextColor 
                    }}

                    className="customButton">Reading</button>
        </div>
    </div>
    </div>
</div>
) 
};

export default TranscribePage;



      