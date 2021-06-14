import React, { Component } from "react";
import { connect } from "react-redux";
//import { Button } from "react-bootstrap";
import * as actions from "../../actions";

class Item extends Component {
  render() {
    const { data, type, removeItem, addItem } = this.props;
    return (
      <div className="item">
        <img src={data.img} alt="movie-pic" />
        <div className="title">{data.title}</div>
        <div className="button">
          {type === "Recommendations" ? (
            <button className="block-btn-remove" onClick={() => addItem(data)}>
              Add
            </button>
          ) : (
              <button className="block-btn-add" onClick={() => removeItem(data)}>
                Remove
            </button>
            )}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    // list: state.myList,
    // recommendations: state.recommendations
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: data => {
      dispatch(actions.removeItem(data));
    },
    addItem: data => {
      dispatch(actions.addItem(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
