import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return <h2>I't rendering {this.props.name}</h2>;
  }
}

