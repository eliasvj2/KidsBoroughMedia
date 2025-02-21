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
      {/* <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? 'active' : ''}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here</p>
        ) : (
          <p>Drag and drop file here or click to browse</p>
        )}
      </div>

      <div className="file-list">
        <h3>Uploaded File:</h3>
        {uploadedFiles.length > 0 ? (
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>
                <span>{file.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No file uploaded</p>
        )}
      </div> */}

        <div class="mb-3">
        <label for="formFile" className='orange' class="form-label">Cover</label>
        <input class="form-control" type="file" id="formFile"/>
        </div>

        <div class="mb-3">
        <label for="formFileMultiple" className='orange' class="form-label">Book pages</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple/>
        </div>

        <div class="mb-3">
        <label for="formFileMultiple" className='orange' class="form-label">Art Work</label>
        <input class="form-control" type="file" id="formFileMultiple" multiple/>
        </div>

        <div class="mb-3">
        <label for="formFile" className='orange' class="form-label">Back</label>
        <input class="form-control" type="file" id="formFile"/>
        </div>
        

    </div>
  );
};

export default Upload;