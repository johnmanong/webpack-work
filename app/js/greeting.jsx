import React from "react";
import css from './greeting.scss'

export default React.createClass({
  render: function() {
    return (
      <div className={css.message}>
        Hello2, {this.props.name}!
      </div>
    );
  },
});