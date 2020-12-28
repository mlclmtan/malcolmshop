import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>版權所有 &copy; Malcolm商店</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
