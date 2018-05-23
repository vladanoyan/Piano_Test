import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

class App extends React.Component {
  render() {
    return (
      <h1>
        {renderRoutes(this.props.route.routes)}
      </h1>
    );
  }
}
App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array,
  }).isRequired,
};

export default List;
