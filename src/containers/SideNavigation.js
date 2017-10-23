import React from 'react';
import { Link } from 'react-router-dom'


class SideNavigation extends React.Component {

  render() {
    return (
      <ul>
        <li><Link to="/">Clean</Link></li>
        <li><Link to="/category/uncategorized">Uncategorized</Link></li>
        <li><Link to="/category/foo">foo</Link></li>
        <li><Link to="/category/bar">bar</Link></li>
        <li><Link to="/insights">insights</Link></li>
      </ul>
    );
  }
}

SideNavigation.displayName = 'SideNavigation';

export default SideNavigation
