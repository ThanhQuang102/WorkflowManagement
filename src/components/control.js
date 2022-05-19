
import React from 'react';
import Search from './search';
import Sort from './sort'

class control extends React.Component { 
  render(){
      return (
          <div>
            <Search />
            <Sort/>
          </div>
      );
    }
}

export default control;
