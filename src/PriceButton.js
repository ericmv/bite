import React from 'react';
// import Input from './Input'
// import CategoryButtonGrid from './CategoryButtonGrid'



const PriceButton = (props) => {
  const divStyle = {
    gridArea: "1 / " + (props.col + 1) + " / 2 / " + (props.col+2)
  };

  return (
    <button type="button" className="priceButton" style={divStyle} val={props.val} onClick={()=> {props.onClick(props.val + 1);}}>
      <div>{props.text}</div>
    </button>
  )


}

export default PriceButton;
