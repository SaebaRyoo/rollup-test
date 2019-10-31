import React from 'react';
import ReactDOM from 'react-dom';
import ReactPictureWaterMark from '../dist/react-picture-watermark';

const App = () => {
  return (
    <div>
      <ReactPictureWaterMark />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
