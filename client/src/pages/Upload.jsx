import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import "../css/upload.css";
import Nav from "../components/Nav";



const Upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    // Logic for handling the dropped files
    setUploadedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*, .pdf, .doc, .docx',
    multiple: true,
  });

  return (
    <div className="upload-container">
        <Nav/>
        
        <span id='spanUpload' className='orange'>Upload your </span><span id='spanUpload2' className='purple'>documents</span>
      
        <div className='d-flex flex-column align-items-center mt-5'>
        <div class="mb-3 col-sm-2">
        <label for="formFile" className='' class="form-label">Cover</label>
        <input class="form-control " type="file" id="formFile"/>
        </div>

        <div class="mb-3 col-sm-2">
        <label for="formFileMultiple" className='' class="form-label">Book pages</label>
        <input class="form-control " type="file" id="formFileMultiple" multiple/>
        </div>

        <div class="mb-3 col-sm-2">
        <label for="formFileMultiple" className='' class="form-label">Art Work</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple/>
        </div>

        <div class="mb-3 col-sm-2">
        <label for="formFile" className='' class="form-label">Back</label>
        <input class="form-control" type="file" id="formFile"/>
        </div>
        <button className='btn btn-primary'>Submit</button>
        </div>
        

    </div>
  );
};

export default Upload;