import React from 'react';
import style from './App.module.scss';
import { Button } from '@material-ui/core';
import SampleAppBar from './components/SampleAppBar';
import Collections from './components/Collections';
import Typeface from './components/Typeface';

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <div className={style.front}>
          <div className={style.appbar}>
            <SampleAppBar className={style.bar} />
          </div>
          <div className={style.surface} ref="surface" >
              <Typeface />
              <div className={style.welcome} ref="welcome">
                <h1>welcome</h1>
                <p>hope you enjoy yourself</p>
              </div>
          </div>
        </div>
        <Collections />
      </div>
    )
  }

  constructor() {
    super();
  }

  componentDidMount() {
    let welcome = this.refs.welcome;
    let fontSize = window.innerWidth / 50 + 'px';
    welcome.style.fontSize = fontSize;
  }
}

export default App;