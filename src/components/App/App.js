import React, {Component} from 'react';
import Row from "../Row";
import Bottom from "../Bottom";
import { connect } from "react-redux";
import * as actions from "../../actions";

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
    console.log("componentDidMount: ", this.props.loading)
  }

  render() {
    console.log('Render lifecycle', this.props.loading)

    return (
      (this.props.loading!==true)?
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
        :<div>loading...</div>
    );
  }
}
const mapStateToProps = state => {
  return {
    list: state.myList,
    recommendations: state.recommendations,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(actions.fetchData());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
