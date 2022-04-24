import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    await setIsLogin(!isLogin);
    navigate("/");
  };

  useEffect(() => {
    const login = localStorage.getItem("login");

    console.log(login);

    // if (login) {
    //   setIsLogin(JSON.parse(login));
    // }
  }, []);

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(isLogin));
  });

  return (
    <>
      <Container>
        <div className="my-5">
          <Row>
            <Col className="d-flex justify-content-center">
              <img
                src="/assets/undraw_access_account_re_8spm.svg"
                width={400}
              />
            </Col>
            <Col>
              <Card className="rounded-3 border border-2">
                <Card.Body className="py-5">
                  <Card.Title className="text-center fw-bold">Login</Card.Title>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleClick}
                    >
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
