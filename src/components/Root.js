import React from 'react';
import Header from './Header';


class Root extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
             <Header  />
          </div>
        </div>
         <div className="row">
          <div className="col-md-10 col-md-offset-1">
              <h3>Home Items</h3>
          </div>
        </div>
      </div>
       
    );
  }
}
export default Root;