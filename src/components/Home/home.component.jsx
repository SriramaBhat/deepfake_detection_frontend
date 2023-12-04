// import { useInView } from "react-intersection-observer";
import React, { useState, useContext, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { UserContext } from "../../context/user.context";
import uploadLogo from "../../assets/upload.png";
import imageLogo from "../../assets/image.png";
import audioLogo from "../../assets/audio.png";
import textLogo from "../../assets/text.png";
import errorLogo from "../../assets/error.png";
import "./home.styles.scss";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  const [uploadedFile, setUploadedFile] = useState(null);
  const [probabilityOfDeepfake, setProbabilityOfDeepfake] = useState("");
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const domRef1 = useRef();
  const domRef2 = useRef();
  const domRef3 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible1(entry.isIntersecting));
    });
    // const current = domRef.current;
    observer.observe(domRef1.current);
    return () => observer.unobserve(domRef1.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible2(entry.isIntersecting));
    });
    // const current = domRef.current;
    observer.observe(domRef2.current);
    return () => observer.unobserve(domRef2.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible3(entry.isIntersecting));
    });
    // const current = domRef.current;
    observer.observe(domRef3.current);
    return () => observer.unobserve(domRef3.current);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFile) => {
      setUploadedFile(acceptedFile);
    },
  });

  const uploadFileToBackend = async () => {
    if (!currentUser) {
      alert("Not Authorized");
    } else {
      try {
        const fileName = uploadedFile[0].name;
        var data = new FormData();
        data.append("file", uploadedFile[0]);
        data.append("name", fileName);

        const url = "http://localhost:5000/predict";
        const response = await fetch(url, {
          method: "POST",
          body: data,
        });
        const response_data = await response.json();
        setProbabilityOfDeepfake(response_data["probability"]);
      } catch (error) {
        console.log(error);
        alert("Error");
      }
    }
  };

  return (
    <div className="home">
      <section className="analyzer-container">
        <div className="about-project">
          <div
            className={`about-container ${isVisible1 ? "is-visible" : ""}`}
            ref={domRef1}
          >
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
              <p>Deepfake Probability:</p>
              <p
                id="probability"
                style={
                  Number(probabilityOfDeepfake) < 50
                    ? { color: "limegreen" }
                    : Number(probabilityOfDeepfake) < 85
                    ? { color: "goldenrod" }
                    : { color: "red" }
                }
              >
                {probabilityOfDeepfake}
              </p>
            </div>
            <button onClick={uploadFileToBackend} className="standard_button">
              Upload
            </button>
          </div>
        </div>
      </section>
      <section
        className={`about-us ${isVisible2 ? "is-visible" : ""}`}
        id="about-us"
        ref={domRef2}
      >
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          architecto, sed in magni incidunt asperiores provident perferendis.
          Delectus sint repellat optio tenetur illo amet et sit placeat quidem
          quaerat. Dolore! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Doloremque deserunt, corporis laudantium consectetur nisi aut
          expedita eaque illum dolores maxime quam. Pariatur repellendus a neque
          tenetur deleniti vel deserunt? Saepe.
        </p>
      </section>
      <section
        className={`methadology ${isVisible3 ? "is-visible" : ""}`}
        id="methadology"
        ref={domRef3}
      >
        <h2>Our Methadology</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
          possimus maxime. Neque sapiente eius numquam aliquid non dicta quo
          adipisci vitae voluptates in libero expedita praesentium, dolor quod
          corrupti fugiat! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vitae nisi sapiente nihil, praesentium quo, excepturi tenetur
          ipsum, facere accusamus ullam dicta debitis velit exercitationem!
          Asperiores nesciunt quasi id sapiente voluptates?
        </p>
      </section>
    </div>
  );
};

export default Home;
