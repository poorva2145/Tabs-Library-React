import React, { useState } from 'react';
import TopBar from './TopBar';
import ContentBar from './ContentBar';

const Initialize_tabs = (props) => {
  const n = props.data.lenght;
  const items = props.data;
  const [mainIndex, setMainIndex] = useState(0);

  let titleList = items.map((item, index) => {
    return <TopBar key={index} title={item.title} index={index} total={n} mainIndex={mainIndex} setMainIndexfunc={setMainIndex} />
  })

  return (
    <div id="myTab">
      <div>
        {titleList}
      </div>
      <div>
        <ContentBar content={items[mainIndex].content} />
      </div>
    </div>
  )
}

export default Initialize_tabs;