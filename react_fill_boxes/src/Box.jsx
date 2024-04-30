import React from 'react';
import "./App.css"
const Box = (props) => {
    const {displayBox, onClickHandler, index, order} = props;
  return<><div 
  className='box' 
  disabled={order.includes(index)}
  onClick={(e)=>onClickHandler(e, index)} 
  style={{visibility:!displayBox? "hidden":'visible', backgroundColor:!!order.includes(index)?'green':'transparent'}}
  ></div></>
}

export default Box;