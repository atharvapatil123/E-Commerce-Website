import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

export default function Signin(props) {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Input
              label="Email"
              placeholder="Enter email"
              value=""
              type="email"
              onChange={() => {}}
            />
            <Input
              label="Password"
              placeholder="Password"
              value=""
              type="Password"
              onChange={() => {}}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
