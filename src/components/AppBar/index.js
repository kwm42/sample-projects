import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import style from './index.scss';
import avatar from '../../../static/avatar.png';

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
      {['111', '222', '333'].map((item, index) => {
        return (
          <ListItem button key={index}>{item}</ListItem>
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
              News
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
