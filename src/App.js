import React from 'react';
import './App.css';
import KeplerGl from 'kepler.gl'

import { addDataToMap } from 'kepler.gl/actions';
import Processors from 'kepler.gl/processors';
import KeplerGlSchema from 'kepler.gl/schemas';

import { connect } from 'react-redux'
import theData from './data.csv.js'

class App extends React.Component {
  componentDidMount() {
    const data = Processors.processCsvData(theData);
    const dataset = {
      data,
      info: {
        id: 'my_data'
      }
    };

    this.props.dispatch(addDataToMap({ datasets: dataset }));
  }

  render() {
    return (
      <div className="App">
        <KeplerGl
          id="foo"
          mapboxApiAccessToken={"pk.eyJ1IjoidG9laG8iLCJhIjoiY2s1bXl5cG92MTU0bzNlam83OTRtdWd5OSJ9.a3IA96cs-5ziDJ6kHJ0s-w"}
          width={window.innerWidth}
          height={window.innerHeight} />
      </div>
    );
  }
}

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

export default connect(
  mapStateToProps,
  dispatchToProps
)(App);
