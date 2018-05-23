import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <ul>
                <li>jh</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    piano: state.piano,
  };
};

export default connect(
  mapStateToProps,
)(Piano);
