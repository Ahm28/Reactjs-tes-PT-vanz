import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarComponents() {
  let navigate = useNavigate();

  const notLogin = () => {
    return (
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    );
  };

  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  const login = () => {
    return <Button onClick={logout}>Logout</Button>;
  };

  return (
    <Navbar className="nav" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand className="fw-bold">React Test</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Link to="/post">
              <Nav.Link href="/post">Post</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="/about">About</Nav.Link>
            </Link>
            {/* <Link to="/login">
              <Button>Login</Button>
            </Link> */}

            {localStorage.login ? login() : notLogin()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
