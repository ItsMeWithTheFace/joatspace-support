import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SupportForm from './SupportForm';

const Support = () => {
  const style = {
    marginTop: '5rem'
  };

  return (
    <Container>
      <Row style={style}>
        <Col width="sm">
          <h1>
            Welcome to JoatSpace Support!
          </h1>
        </Col>
      </Row>
      <Row>
        <Col width="sm">
          <p>
            This page has all the resources you need to contact
            JoatSpace and resolve any issues.
          </p>
        </Col>
      </Row>
      <Row>
        <Col width="sm">
          <SupportForm style={style} />
        </Col>
      </Row>
    </Container>
  )
}

export default Support
