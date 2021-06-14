import React, { Component } from "react";
import { connect } from "react-redux";

class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
        <h3 className="bottom">My Video List</h3>
        <ul>
        {this.props.list.map(item => (
          <li key={item.id} className="bottom-item">
            {item.title}
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.myList
  };
};

export default connect(mapStateToProps)(Bottom);
