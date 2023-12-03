// import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import uploadLogo from "../../assets/upload.png";
import imageLogo from "../../assets/image.png";
import audioLogo from "../../assets/audio.png";
import textLogo from "../../assets/text.png";
import errorLogo from "../../assets/error.png";
import "./home.styles.scss";

const Home = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFile) => {
      setUploadedFile(acceptedFile);
      // Call your backend API endpoint to upload files
    },
  });

  return (
    <div className="home">
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
              <div>
                {!uploadedFile ? (
                  <img src={uploadLogo} alt="Upload logo" />
                ) : (
                  (() => {
                    console.log(uploadedFile[0].name);
                    const extension = uploadedFile[0].name.substring(
                      uploadedFile[0].name.lastIndexOf(".") + 1
                    );
                    if (
                      extension === "pdf" ||
                      extension === "txt" ||
                      extension === "docx"
                    ) {
                      return <img src={textLogo} alt="Text File Logo" />;
                    } else if (
                      extension === "png" ||
                      extension === "jpg" ||
                      extension === "jpeg"
                    ) {
                      return (
                        <img src={imageLogo} id="imglogo" alt="Img File Logo" />
                      );
                    } else if (extension === "mp3" || extension === "ogg") {
                      return <img src={audioLogo} alt="Audio File Logo" />;
                    } else {
                      return (
                        <img src={errorLogo} id="error" alt="Error Logo" />
                      );
                    }
                  })()
                )}
              </div>
              <ul>
                {!uploadedFile ? (
                  <li></li>
                ) : (
                  <li key={uploadedFile[0].name}>{uploadedFile[0].name}</li>
                )}
              </ul>
              <input id="file_upload" {...getInputProps()} />
              <p>Drag and drop files here or click to browse.</p>
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
      <section className="about-us" id="about-us"></section>
      <section className="methadology" id="methadology"></section>
    </div>
  );
};

export default Home;
