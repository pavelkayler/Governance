import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../../../core/context/Context.jsx";

const Header = () => {
  const { wallet, disconnectWallet } = useContext(Context);

  const handleExit = () => {
    disconnectWallet();
  };

  return (
    <>
      <div
        className="d-flex flex-column w-100 align-items-center justify-content-evenly"
        style={{
          height: "15vh",
          backgroundColor: "rebeccapurple",
        }}
      >
        <div className="d-flex flex-row justify-content-center w-100">
          <Navbar>
            <Nav>
              <h1>
                <Link to="/">Профессионалы 2026</Link>
              </h1>
            </Nav>
            {wallet && (
              <Nav>
                <Link to="/proposals">Все предложения</Link>
              </Nav>
            )}
          </Navbar>
        </div>
        {wallet && (
          <div className="d-flex flex-column justify-content-center align-content-center text-center w-50">
            <Button variant="outline-dark" onClick={handleExit}>
              Выйти
            </Button>
            <p className="text-success">ваш кошелек: {wallet}</p>
          </div>
        )}
      </div>
    </>
  );
};

export { Header };
