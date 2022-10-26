import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Purpose from "./Purpose";
import Location from "./Location";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Purpose/>
  </React.StrictMode>
);
var i = 1;

function progress(){
    switch(i) {
        case(1):
            document.writeln(<li><div className = "current"><b>1</b></div><div><b>Purpose</b></div></li>);
            document.writeln(<li><div><b>2</b></div><div><b>Location</b></div></li>);
            document.writeln(<li><div><b>3</b></div><div><b>Time</b></div></li>);
            document.writeln(<li><div><b>4</b></div><div><b>Details</b></div></li>);
            document.writeln(<li><div><b>5</b></div><div><b>Review</b></div></li>);

    }

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default progress();
