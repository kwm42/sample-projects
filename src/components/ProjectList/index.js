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
        <div className={style.item}>
          <ProjectItem item={item} key={index} />
        </div>
      )
    })
    return (
      <div className={style.list} >
        {list}
      </div>
    )
  }
}

export default ProjectList;