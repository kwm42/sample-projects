import React from 'react';
import style from './App.scss';
import projects from './projects.json';
import { Button } from '@material-ui/core';

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
        <Button variant="contained">
          Default
        </Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="secondary" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </div>
    )
  }

  constructor() {
    super();
    console.log(projects.cssDemos);
  }
}

export default App;