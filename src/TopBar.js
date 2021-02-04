import React from 'react';

const TopBar = ({ index, setActiveIndexfunc, activeIndex, title }) => {
  const ChangeTab = () => {
    setActiveIndexfunc(index);
  }

  let tabLinkStyle;
  if (index === activeIndex) {
    tabLinkStyle = {
      "color": "white",
      "backgroundColor": "#0d6efd"
    }
  }
  else {
    tabLinkStyle = {
      "color": "#0d6efd",
      "backgroundColor": "white"
    }
  }

  return (
    <button style={tabLinkStyle} className="tablink" onClick={ChangeTab}>{title}</button>
  )
}

export default TopBar;