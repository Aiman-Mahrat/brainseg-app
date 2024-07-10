import React, { useState } from "react";
import { Form } from "react-router-dom";

export default function Home() {
    //holds the uploded mri image file
    const [MRIimage, setMRIimage] = useState(null);
    //holds preview image
    const [preview, setPreview] = useState(null);

    //handles file upload
    const handleUpload = (e) => {
        const file = e.target.files[0];
        setMRIimage(file);
        setPreview(URL.createObjectURL(file)); //this create a viewable image in the browswer of uploaded image
        console.log('successfully uploaded file:', file);
    };

    //handles submission to upload file to a server
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if (!MRIimage) {
            alert("Please upload an MRI image before submitting.");
            return;
        }

        const formData = new FormData(); 
        formData.append("image", MRIimage);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/upload/", {
                method: "POST", 
                body: formData,
            });

            if(response.ok) {
                const data = await response.json();
                alert("File uploaded Successfully!"); 
                console.log("Response data:", data);
            } else {
                const errorData = await response.json();
                console.error("Failed to upload file:", errorData);
                alert("Failed to upload file.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("An error occured while uploading the file.");
        }
    };

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
                    <input type="file" id="mriFile" name="filename" className="file-upload" onChange={handleUpload}/>
                    {preview && (
                        <div className="preview-image-container">
                            <img src={preview} alt="Preview img" className="image-preview" />
                        </div>
                    )}
                    <input type="submit" className="submit-btn" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
};