import './transcribe.css';
function FileResponse({text}){
    return (
        <div className="method-fieldset wrap">
            <span className="title">Transcript</span>
            <div className="content">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default FileResponse;