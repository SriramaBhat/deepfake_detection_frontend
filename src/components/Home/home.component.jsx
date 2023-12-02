import "./home.styles.scss";

const Home = () => {
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
              error optio!
            </p>
          </div>
        </div>
        <div className="analyzer">
          <div className="view"></div>
          <div className="result-container">
            <div className="result">
              <p>Accuracy Score:</p>
            </div>
            <button className="standard_button">Upload</button>
          </div>
        </div>
      </section>
      <section className="about-us"></section>
      <section className="methadology"></section>
    </div>
  );
};

export default Home;
