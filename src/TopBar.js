import React from 'react';

const TopBar = (props) => {
  let ChangeTab = (e) => {
    e.preventDefault();
    props.setMainIndexfunc(props.index);
  }

  if (props.index === props.mainIndex) {
    return (
      <button style={{ "color": "white", "backgroundColor": "#0d6efd" }} className="tablink" id={props.index + "_tab"} onClick={ChangeTab}>{props.title}</button>
    )
  }

  return (
    <button className="tablink" id={props.index + "_tab"} onClick={ChangeTab}>{props.title}</button>
  )
}

export default TopBar;