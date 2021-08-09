import React from "react";
import TextField from "@material-ui/core/TextField";
import "./SignInForm.css";

const SignInForm = () => {
  const [email, setEmail] = React.useState("");
  const [isEmail, setIsEmail] = React.useState(true);

  const handleSubmit = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsEmail(re.test(String(email).toLowerCase()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Se connecter</h1>
      <br />
      <br />
      {/* <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="outlined"
      /> */}
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input"
        fullWidth
        label="Adresse e-mail"
        variant="outlined"
        helperText={isEmail ? "" : "Email invalide"}
        error={!isEmail}
      />
      <TextField
        required
        className="input"
        fullWidth
        label="Mot de passe"
        variant="outlined"
      />
      <a href="#">Mot de passe oublié ?</a>
      <button type="submit">CONNEXION</button>
    </form>
  );
};

export default SignInForm;
