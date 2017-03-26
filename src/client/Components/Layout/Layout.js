import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
            Koa2 React Universal App demo
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Koa 2</strong>.
          </p>
        </footer>
      </div>
    );
  }
}