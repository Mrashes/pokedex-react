import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
      return (
        <div className="border">
            {this.props.name} || {this.props.type} || {this.props.species}
        </div>
      );
    }
  }

export default Pokemon;