import React from "react";
import { Card, Col, Figure, Row } from "react-bootstrap";

export default function Home() {
  const datas = localStorage.data;

  console.log(localStorage.data.length);
  console.log(datas);

  const isData = () => {
    return (
      <div>
        {datas.map((data) => (
          <Col md={4}>
            <Card key={data.id}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    );
  };

  const dataEmpty = () => {
    return (
      <Figure className="d-flex justify-content-center">
        <Figure.Image src="/assets/undraw_no_data_re_kwbl.svg" width={300} />
        {/* <Figure.Caption>NO DATA</Figure.Caption> */}
      </Figure>
    );
  };

  return (
    <div>
      <Row>
        {/* {(localStorage.data = 2 ? dataEmpty() : isData())} */}
        {dataEmpty()}
      </Row>
    </div>
  );
}
