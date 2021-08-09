import "./App.css";
import FooterBar from "./components/FooterBar/FooterBar";
import NavBar from "./components/NavBar/NavBar";
import SignInForm from "./components/SignInForm/SignInForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div style={{ height: "72.3px" }} className="spacer"></div>
      <div className="content">
        <SignInForm />
        <div className="pro-section">
          <h1>Vous êtes un pro ?</h1>
          <p>
            Connectez-vous à votre Espace Partenaire Effy.{" "}
            <a href="#">Se connecter</a>{" "}
          </p>
        </div>
      </div>
      <FooterBar />
    </div>
  );
}

export default App;
