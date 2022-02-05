import logo from "./logo.svg";
import Profile from "./profile/Profile.js";

import "./App.css";

function App() {
  function alertMyInput(a) {
    alert(a);
  }

  return (
    <div className="App">
      <div>
        <Profile
          fullname="Naima Metoui"
          email="metouinaima@gmail.com"
          phone="55334455"
          adresse="Mareth Gabes"
          skills="HTML5 CSS3 JS REACT "
          src="./im1.jpg"
          alertMyInput={alertMyInput}
        />
      </div>
    </div>
  );
}

export default App;
