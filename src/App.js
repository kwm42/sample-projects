import React from 'react';
import Test from './Test';
import style from './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className={style.App}>
        <div className={style.container}>
          <h1 className={style.title}>welcome to my sample code!</h1>
          <button className={style.btn}>Let's go</button>
        </div>
        <div className={style.graph}>
          <h2>Welcome to GitHub Pages</h2>
          <p>You can use the editor on GitHub to maintain and preview the content for your website in Markdown files.</p>
          <p>Whenever you commit to this repository, GitHub Pages will run Jekyll to rebuild the pages in your site, from the content in your Markdown files.</p>
        </div>
      </div>
    )
  }
}

export default App;