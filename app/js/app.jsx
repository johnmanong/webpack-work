import React from "react";
import ReactDOM from 'react-dom';
import Greeting from "./greeting.jsx";

import baseCSS from "../stylesheets/base.scss"

const App = React.createClass({

  render() {
    return (
      <div className={baseCSS.app}>
        <Greeting name="World"/>
      </div>
    );
  },

});


ReactDOM.render(
  <App/>,
  document.getElementById('react-mount')
);