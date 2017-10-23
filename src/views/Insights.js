import React from 'react';
import PropTypes from 'prop-types';
import SideNavigation from '../containers/SideNavigation';

const Insights = () =>
  <div>
          <h1>insights</h1>
          <hr/>
        <div>
          <SideNavigation />
          <p>insights here</p>
        </div>
      </div>;

Insights.displayName = 'Insights';

Insights.propTypes = {
  data: PropTypes.object
};

export default Insights;
