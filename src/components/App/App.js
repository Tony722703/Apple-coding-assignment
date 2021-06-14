import React, {Component} from 'react';
import Row from "../Row";
import Bottom from "../Bottom";

class App extends Component {
  render() {
    return (
      <div className="main">
        <div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix_logo"
          />
        </div>
        <Row type="My List" />
        <Row type="Recommendations" />
        <Bottom />
      </div>
    );
  }
}

export default App;
