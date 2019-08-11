import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Avatar, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import style from './index.scss';
import avatar from '../../../static/img/avatar.png';

const drawList = [
  {
    label: 'github',
    url: 'http://github.com/kwm42'
  },
  {
    label: 'blog',
    url: 'http://kwm42.github.io'
  }
]

class SampleAppBar extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpen: false
    }
  }

  render() {
    const drawer = 
    <List className={style.sideList}>
      {drawList.map((item, index) => {
        return (
          <div key={index}>
            <ListItem button onClick={() => window.location.href = `${item.url}`}>{item.label}</ListItem>
            <Divider />
          </div>
        )
      })}
    </List>
    

    return (
      <div className={style.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => this.toggleDrawer(true)} edge="start" className={style.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={style.title}>
              Kwm42
            </Typography>
            <Avatar alt="kwm42" src={avatar}/>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={() => this.toggleDrawer(false)}>
          { drawer }
        </Drawer>
      </div>
    );
  }

  toggleDrawer(open) {
    this.setState({
      ...this.state,
      drawerOpen: open
    })
  }
}

export default SampleAppBar;
