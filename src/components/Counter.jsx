import React from "react";
import { connect } from "react-redux";
import { increment } from "../actions";
import { decrement } from "../actions";

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <span>{count}</span>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  const count = state.counter;
  return {
    count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
