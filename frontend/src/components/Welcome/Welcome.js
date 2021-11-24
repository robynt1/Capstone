import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
  <div className = "body-welcome">
      <div class="ui mini three item menu">
        <a href="http://localhost:3000/" class="item">
          Home
        </a>
        <a href="http://localhost:3000/Create" class="item">
          Get a Quote
        </a>
        <a href="http://localhost:3000/Admin" class="item">
          Admin Panel
        </a>
        {/* body */}
      </div>
      <body className="body-welcome">
          <div class="welcome">
            <h1>Welcome!</h1>
            <h2>Manage customers, or get an insurance quote.</h2>
          </div>
          <div class="button-group">
            <Link
              to="/Admin"
              className="btn btn-primary"
              style={{ marginRight: "50px", marginTop: "100px" }}
            >
              Admin Panel
            </Link>
            <Link
              to="/Create"
              className="btn btn-primary"
              style={{ marginRight: "50px", marginTop: "100px" }}
            >
              Get a Quote
            </Link>
          </div>

      </body>
    </div>
  );
}

export default Welcome;

