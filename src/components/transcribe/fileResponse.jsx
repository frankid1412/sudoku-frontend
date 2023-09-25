import './transcribe.css';
function FileResponse({text}){
    return (
        <div className="textDisplayEditorContainer">
            <div className="content">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default FileResponse;