// import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./home.styles.scss";

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      // Call your backend API endpoint to upload files
    },
  });

  return (
    <div class="home">
      <section className="analyzer-container">
        <div className="about-project">
          <div className="about-container">
            <h2>Deepfake Content Detection</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga
              vel quae necessitatibus eius illum nostrum deleniti odit veniam
              harum modi, velit consequatur iusto. Eveniet ab expedita velit
              error optio! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Deleniti dicta dolorem repellat, possimus nesciunt sunt
              autem harum quam culpa tenetur. Consequatur facere, minus aut
              natus odio obcaecati quidem laboriosam sequi.
            </p>
          </div>
        </div>
        <div className="analyzer">
          <div className="view">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop files here or click to browse.</p>
              <ul>
                {uploadedFiles.map((file) => (
                  <li key={file.name}>{file.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="result-container">
            <div className="result">
              <p>Accuracy Score:</p>
            </div>
            <button type="file" className="standard_button">
              Upload
            </button>
          </div>
        </div>
      </section>
      <section className="about-us"></section>
      <section className="methadology"></section>
    </div>
  );
};

export default Home;
