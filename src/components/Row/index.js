import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../Item";

class Row extends Component {
  render() {
    const { type, list, recommendations } = this.props;
    const data = type === "My List" ? list : recommendations;

    return (
      <div className="list">
        <h3 className="header">{type}</h3>
        <div className="items">
          {data.map((ele, index) => (
            <Item data={ele} key={ele.id} type={type} />
          ))}
        </div>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    list: state.myList,
    recommendations: state.recommendations
  };
}

export default connect(mapStateToProps)(Row);
