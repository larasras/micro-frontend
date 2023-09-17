// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>;
// }
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/sign-up" className="link">
          Page 1
        </Link>
        <Link to="/manage-item" className="link">
          Page 2
        </Link>
      </nav>
    </BrowserRouter>
  );
}