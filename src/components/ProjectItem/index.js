import React, { Component } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import style from './index.module.scss';

class ProjectItem extends Component {
  constructor() {
    super();
  }
  render() {
    const { item, kind } = this.props;
    return (
      <Card className={style.card}>
        <CardActionArea>
          <div className={style.preview} >
            <img src={`projects/${kind}/${item.name}/preview.gif`} alt="" />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={() => this.view()}>
            view
          </Button>
          <Button size="small" color="primary">
            source
          </Button>
        </CardActions>
      </Card>
    )
  }
  view() {
    window.location.pathname += `projects/${this.props.kind}/${this.props.item.name}/index.html`
  }
}

export default ProjectItem;