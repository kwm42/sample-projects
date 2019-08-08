import React from 'react';
import style from './App.module.scss';
import { Button } from '@material-ui/core';
import SampleAppBar from './components/SampleAppBar';
import Collections from './components/Collections';

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <div className={style.front}>
          {/* <div className={style.front}>
          <SampleAppBar />
          <div className={style.surface}>
            <Button variant="contained" className={style.btn}>
              fofo
          </Button>
          </div>
        </div>
        <Collections /> */}
          <div className={style.a}>a</div>
          <div className={style.b}>b</div>
        </div>
        ss
      </div>
    )
  }

  constructor() {
    super();
  }
}

export default App;