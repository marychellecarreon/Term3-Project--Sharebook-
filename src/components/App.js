import React  from 'react';
import {Link} from 'react-router';




const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
           <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
           data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             </button>
             <a className="navbar-brand" href="#">ShareBook</a>
              </div>
               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
              <li className="active"><a href="/">Home<span className="sr-only">(current)</span></a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/books">Books</a></li>
              <li><a href="/cart">Cart</a></li>
          </ul>
       </div>
     </div>
    </nav>





      {/* Each smaller components */}
      {props.children}
    </div>
  );
};

export default App
