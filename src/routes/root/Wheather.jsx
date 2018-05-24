import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import Celsus from '../../resource/images/celsus.png';
import Sun from '../../resource/images/sunny.png';
import Rain from '../../resource/images/rain.ico';
import SunCloud from '../../resource/images/sunCloud.jpg';
import Windy from '../../resource/images/windy-weather.png';
import cs from './component.pcss';

class Wheather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {},
    };
  }
  componentDidMount() {
    fetch(`http://samples.openweathermap.org/data/2.5/weather?q=${this.props.city}&appid=b6907d289e10d714a6e88b30761fae22`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }
  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }

    let temp;

    if (this.props.type === 'celsius') {
      temp = (data.main.temp - 32) * (5 / 9);
    } else {
      temp = data.main.temp;
    }

    return (
      <Container>
        <Row>
          <Col>
            <div className={cs.weatherContent}>
              <div className={cs.weather}> Weather in <span>{this.props.city}</span></div>
              <div className={cs.discription}>{data.weather[0].description}</div>
              <div className={cs.date}>Lon - [{data.coord.lon}]</div>
              <div className={cs.date}>Lat - [{data.coord.lat}]</div>
              <div><img src={Celsus} alt="Celsus" />
                <span className={cs.details}>{temp}</span></div>
              <div><img src={Sun} alt="sun" />
                <span className={cs.details}>{data.sys.sunrise}</span></div>
              <div><img src={SunCloud} alt="sunCloud" />
                <span className={cs.details}>{data.clouds.all}</span></div>
              <div><img src={Rain} alt="Rain" />
                <span className={cs.details}>{data.sys.sunset}</span></div>
              <div><img src={Windy} alt="Windy" />
                <span className={cs.details}>{data.wind.speed}</span></div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

Wheather.propTypes = {
  city: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'farenheit',
    'celsius',
  ]).isRequired,
};

export default Wheather;
