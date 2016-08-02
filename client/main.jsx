import React, { Component } from 'react';
import { render } from 'react-dom';
import { TestDecorator } from '/imports/decorator.js';

import './main.html';

@TestDecorator
class FooWidget extends Component {
  render() {
    return <h1>FooWidget</h1>;
  }
}

Meteor.startup(function() {
  render(<FooWidget/>, document.getElementById('root'));
});
