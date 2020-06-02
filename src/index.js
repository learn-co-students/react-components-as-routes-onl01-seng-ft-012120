import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
const Home = () => {
  return (
    <Router>
      <Route path="/" component={Welcome} />
    </Router>
  );
};

const Welcome = () => {
  return <div>TEST</div>;
};

ReactDOM.render(<Home />, document.getElementById("root"));
