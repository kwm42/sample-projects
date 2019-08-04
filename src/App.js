import React from 'react';
import Test from './Test';
import style from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <p className={style.foo}>aaaa</p>
        <p className={style.bar}>asasas</p>
        <Test className={style.foo}></Test>
      </div>
    )
  }
}

export default App;