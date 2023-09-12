import React from "react";
import { useState } from "react";
import FileUpload from "../../components/transcribe/fileUpload";
import FileResponse from "../../components/transcribe/fileResponse";
import LanguageChoose from "../../components/transcribe/LanguageChoose";
import Loading from "../../components/transcribe/loading";
import "./transcribe_page.css";

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
    return <div className='center-container'>
        <div className = 'centered-elements'>
            <h1>Trancribe ( .mp3 )</h1>
            <p>Accurately recognize your audio as text with our online Trancribe</p>
            <LanguageChoose selects = {selects}/>
            {show}
        </div>
    </div>;
}

export default TranscribePage;