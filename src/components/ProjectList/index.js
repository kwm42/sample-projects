
import React, { Component } from 'react'
import ProjectItem from '../ProjectItem';
import style from './index.module.scss';

class ProjectList extends Component {
  constructor() {
    super();
  }
  render() {
    const { projects } = this.props;
    const list = projects.map((item, index) => {
      return (
        <div className={style.item} key={index} >
          <ProjectItem item={item} />
        </div>
      )
    })
    return (
      <div>
        <h2>{this.props.kind}</h2>
        <div className={style.list} >
          {list}
        </div>
      </div>
    )
  }
}

export default ProjectList;