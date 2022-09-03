import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

export default class App extends PureComponent {
  // eslint-disable-next-line no-undef
  render() {
    return (
      <div>
        Hello World 123
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
