import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div>
      <div>
        <p style={{ color: "red", textAlign: "center" }}>
          <h2>About Me</h2>
          Hello!I’m {props.fullname}. I am passionate about Web Design. I am a
          skilled front-end developer . I am a quick learner and a team worker
          that gets the job done.
        </p>
        <div>
          <img style={{ width: "500", height: "500" }} src={props.src} alt="" />
          {props.children}
        </div>
        <div>
          <button onClick={() => props.alertMyInput(props.fullname)}>
            ClickMe
          </button>
        </div>
        <p style={{ fontSize: "100%", color: "red" }}>
          <h2>Bio</h2>
          <ul>
            <li>Email:{props.email}</li>
            <li>Phone:{props.phone}</li>
            <li>Address:{props.adresse}</li>
          </ul>
        </p>
      </div>
      <div>
        <h2> Professional Skills</h2>
        <p>{props.skills}</p>
      </div>
    </div>
  );
}

export default Profile;
