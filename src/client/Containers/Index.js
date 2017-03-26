import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          React will do the magic
        </div>
        {this.props.children}
      </div>
    );
  }
}