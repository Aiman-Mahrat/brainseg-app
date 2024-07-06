import React from "react";

export default function Home() {

    return(
        <div className="container">
            <div className="first-container">
                <div className="header">
                    <h1>Brainseg</h1>
                    <p>Please upload an MRI image</p>
                </div>
                <div className="input-container">
                    <label for="mriFile" className="custom-file-upload">
                        Upload File
                    </label>
                    <input type="file" id="mriFile" name="filename" className="file-upload" />
                    <input type="submit" className="submit-btn" />
                </div>
            </div>
        </div>
    )
};