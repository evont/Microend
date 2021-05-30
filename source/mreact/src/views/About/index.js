import logo from "../../logo.svg";
import "../App/App.css";
function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="About-logo" alt="logo" />
        <p>
          Edit <code>src/About.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default About;
