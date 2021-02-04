import React, { useState } from 'react';
import TopBar from './TopBar';
import ContentBar from './ContentBar';

const InitializeTabs = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const titleList = items.map(({ title }, index) => {
    return <TopBar key={index} title={title} index={index} activeIndex={activeIndex} setActiveIndexfunc={setActiveIndex} />
  })

  return (
    <div id="my-tab">
      <div>
        {titleList}
      </div>
      <div>
        <ContentBar content={items[activeIndex].content} />
      </div>
    </div>
  )
}

export default InitializeTabs;