import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';

class Articles extends React.Component {
  componentDidMount() {
    console.log('remount');
  }

  render() {
    return <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/category/:topicId" component={Dashboard} />
      </div>;
  }
}

Articles.displayName = 'Articles';

export default Articles;
