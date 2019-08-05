import React from 'react';
import style from './App.scss';
import { Button } from '@material-ui/core';
import SampleAppBar from './components/AppBar';

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <SampleAppBar />
        <div className={style.surface}>
          <Button variant="contained" className={style.btn}>
            fofo
          </Button>
        </div>
      </div>
    )
  }

  constructor() {
    super();
  }
}

export default App;