// import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Form,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

export default function Post() {
  //   const [form, setForm] = useState({
  //     title: "",
  //     content: "",
  //     posting: 0,
  //   });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [item, setItem] = useState([]);

  const [alert, setAlert] = useState();

  const datas = localStorage.data;

  console.log(datas);

  //   console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" && content === "") {
      return setAlert(<Alert variant="danger">Isi semua bagian kosong</Alert>);
    } else {
      setItem([...item, { id: item.length + 1, title, content }]);
      setTitle("");
      setContent("");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("data");

    if (data) {
      setItem(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(item));
  });

  //   localStorage.removeItem(item); //all items

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center my-5">
        <Card style={{ width: "80%" }}>
          <Card.Body>
            <Card.Title>
              <h2 className="fw-bold d-flex justify-content-center align-items-center">
                Add Post
              </h2>
            </Card.Title>
            {alert && alert}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Titile</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={title}
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Content"
                  name="content"
                  value={content}
                  style={{ height: "100px" }}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="ms-auto">
                Add Post
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>

      {/* <div>
        <Row>
          {datas &&
            datas.map((data) => (
              <Col md={4}>
                <Card key={data.id}>
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div> */}
    </Container>
  );
}
