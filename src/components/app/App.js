import './App.css';
import React from 'react';
import IconsSwitch from '../icon-switch/Icon-switch';
import ListView from '../list-view/List-view';
import ListView2 from '../list-view2/list-view2';
import { connect } from 'react-redux';

function App({viewList}) {
  return (
    <React.Fragment>
      <IconsSwitch />
      {viewList ? <ListView2 /> : <ListView />}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  viewList: state.viewList,
});

export default connect(mapStateToProps, null)(App);
