import React from 'react';
import PropTypes from 'prop-types';
import SideNavigation from '../../containers/SideNavigation';
import { withRouter } from 'react-router-dom';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
          <h1>Items</h1>
          <hr/>
        <div>
          <SideNavigation />
          <h1>{this.props.match.params.topicId ? "Match: " + this.props.match.params.topicId : "not matched"}</h1>
        </div>
      </div>
    );
  }
}

Dashboard.displayName = 'Articles Dashboard';

Dashboard.propTypes = {
  articles: PropTypes.array
};


export default withRouter(Dashboard);
