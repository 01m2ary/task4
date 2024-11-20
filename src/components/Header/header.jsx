import Container from "../Container/container";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const MainHeader = ({ onLink }) => {
  const { pathname } = useLocation();
  
  return (
    <header>
      <Container>
        <div className="content">
          <div className="logo">
            <img src={"/logo.png"} />
          </div>
          <div className="menu">
            <Link to={"/"} className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to={"/about"}
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
