import React from 'react';
// import Input from './Input'
// import CategoryButtonGrid from './CategoryButtonGrid'



const Divider = ({col}) => {
  // console.log(col);
  const divStyle = {
    gridArea: "2 / " + col + " / 3 / " + (col + 1)
  };
  return (

    <div className="divider" style = {divStyle}>
      <hr />
    </div>
  )
}

export default Divider;
