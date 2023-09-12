import React, { useState } from 'react';
import axios from 'axios';
import './transcribe.css';
import { v4 as uuidv4 } from 'uuid';
import config from "../../config/config.js"


function FileUpload({setText, setFinishedTrans, setLoading}) {
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const name_ext = file.name.split('.');
        const newFileName = name_ext[0]+'-'+uuidv4() +'.'+ name_ext[1]; // Replace with your desired new file name
        const renamedFile = new File([file], newFileName, { type: file.type });
        if (file && file.type === 'audio/mpeg') {
            setFile(renamedFile);
            setErrorMessage(null);
        } else {
            setErrorMessage('Please upload .mp3 file');
            setFile(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle file upload logic here
        // Handle text submission logic here
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            console.log(file);
            const url = `${config.BACKEND_ENDPOINT}/api/v1/transcribe/audioFile`;
            setLoading(true);
            axios
                .post(url, formData, {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    }
                  },
                )
                .then((response) => {
                    setLoading(false);
                    console.log(response.data)
                    setText(response.data.results.transcripts[0].transcript);
                    
                    setFinishedTrans(true);
                })
                .catch((error) => {
                    console.error(`Error fetching health status: ${error}`);
                });
        }

    }

    const handleDrop = (event) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        const file = files[0];
        const name_ext = file.name.split('.');
        const newFileName = name_ext[0]+'-'+uuidv4() +'.'+ name_ext[1]; // Replace with your desired new file name
        const renamedFile = new File([file], newFileName, { type: file.type });
        if (file && file.type === 'audio/mpeg') {
            setFile(renamedFile);
            setErrorMessage(null);
        } else {
            setErrorMessage('Please upload .mp3 file');
            setFile(null);
        }
    };

    return (
        <div className="container">
            <div className="upload-area" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                <div className="upload-box">
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {file === null &&
                    <div>
                        <h3>Drop your file here</h3>
                        <h3>OR</h3>
                        <input type="file" onChange={handleFileChange}/>
                    </div>
                    }

                    {file !== null && (
                    <div className="file-list">
                        <h3>Successfully Upload</h3>
                        <h4>{file.name}</h4>
                    </div>
                )}
                </div>
            </div>

            <button onClick={handleSubmit}>Trancribe</button>
        </div>
    );
}

export default FileUpload;