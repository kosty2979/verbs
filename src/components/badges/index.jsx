import React from "react";

const Badges = ({items}) => {
  return (
    items.map(i => <span className={'badge'} key={i.id}>{i.first}</span>)
  )
}

export default Badges