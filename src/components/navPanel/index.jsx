import React from 'react'
import {NavLink} from 'react-router-dom';

const NavPanel = () => {
  return (
    <div className="panel-heading clearfix">
      <NavLink to={'/'} activeClassName="active">Table of verbs</NavLink>
      <NavLink to={'/test'} activeClassName="active">Go to test</NavLink>
      <NavLink to={'/tense'} activeClassName="active">Tenses</NavLink>
    </div>
  )
};
export default NavPanel