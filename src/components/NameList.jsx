import React from "react";
import { connect } from "react-redux";

const NameList = ({ names }) => {
  return (
    <ul>
      {names.map((name) => (
        <li key={name.id}>{name.text}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const names = state.names;
  return {
    names,
  };
};

export default connect(mapStateToProps)(NameList);
