import React from "react";
import { useState } from "react";
import FileUpload from "../../components/transcribe/fileUpload";
import FileResponse from "../../components/transcribe/fileResponse";
import Loading from "../../components/transcribe/loading";
import LanguageChoose from "../../components/transcribe/LanguageChoose";
import "./transcribe_page.css";


import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "../TextExtractPage/TextExtractPage.module.css";
import { Link } from "react-router-dom";

const TranscribePage = () => {
    const [text,setText] = useState("");
    const [finishedTrans,setFinishedTrans] = useState(false);
    const [loading,setLoading] = useState(false);
    const selects = [
        {label: 'English'},
        {label: 'Chinese'},
        {label: 'German'},
    ];

    let show = <FileUpload setText = {setText} setFinishedTrans = {setFinishedTrans} setLoading = {setLoading}/>;

    if(loading){
        show = <Loading />;
    }
    if(finishedTrans){
        show = <FileResponse text ={text} />
    }
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
                    <Link to="/transcribe" className={styles.textracterLink}>
                        Transcribe
                    </Link>
                </div>
                <div className="textExtractContainer">
                    <h1 className='defaultH1'>Trancribe ( .mp3 )</h1>
                    <h2 className="defaultH2">Accurately recognize your audio as text with our online Trancribe</h2>
                    <LanguageChoose selects = {selects}/>
                    {show}
                </div>
            </div>
            </div>
        </div>
        ) 
};

export default TranscribePage;