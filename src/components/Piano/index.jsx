import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import { connect } from 'react-redux';
import cs from './component.pcss';

class Piano extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classActive: false,
    };
  }

  send(e, event) {
    const ev = event.target.childNodes;
    this.setState({ classActive: true }, () => {
      ev[0].className = `${cs.animated} ${cs.fadeOutUp}`;
    });
    console.log(ev, this);
    const audio = new Audio();
    audio.src = e;
    audio.controls = true;
    audio.play();
    setTimeout(() => {
      this.setState({ classActive: false }, () => {
        ev[0].className = '';
      });
    }, 1000);
  }
  render() {
    const li = this.props.piano.map(item => (
      <li
        className={cs.do}
        key={item.id}
        onClick={this.send.bind(this, item.source)}
        role="presentation"
      >
        <p>{item.name}</p>
      </li>));
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <ul>
                { li }
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Piano.propTypes = {
  piano: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
const mapStateToProps = (state) => {
  return {
    piano: state.piano,
  };
};

export default connect(
  mapStateToProps,
)(Piano);
