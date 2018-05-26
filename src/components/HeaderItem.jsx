import React from "react";
import PropTypes from "prop-types";

function HeaderItem(props) {
  var itemStyles = {
      backgroundColor: 'cyan',
      border: '1px solid red',
      display:'inline',
      align:'center',
      marginLeft: 'auto',
      marginRight:'auto'
    }

  return (
      <h3 style={itemStyles}>{props.title}&nbsp;|</h3>
  );
}

HeaderItem.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeaderItem;
