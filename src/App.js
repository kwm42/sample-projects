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
          <div className={style.appbar}>
            <SampleAppBar className={style.bar} />
          </div>
          <div className={style.surface}>
            {/* <Button className={style.btn} >foo</Button> */}
          </div>
        </div>
        <Collections />
      </div>
    )
  }

  constructor() {
    super();
  }
}

export default App;