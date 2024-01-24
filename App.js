import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const generateDivs = () => {
    const divs = [];
    for (let i = 1; i <= 10; i++) {
      divs.push(
        <div key={i} className="col-sm-1">
          {generateInnerDivs(i)}
        </div>
      );
    }
    return divs;
  };

  const generateInnerDivs = (columnIndex) => {
    const innerDivs = [];
    for (let j = 1; j <= 10; j++) {
      const value = (columnIndex - 1) * 10 + j;
      innerDivs.push(<div key={value}>{value}</div>);
    }
    return innerDivs;
  };

  return (
    <div className="container">
      <div className="row">
        {generateDivs()}
      </div>
    </div>
  );
};

export default App;
