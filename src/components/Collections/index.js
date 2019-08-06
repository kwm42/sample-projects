import React, { Component } from 'react';
import projects from '../../projects.json';
import ProjectList from '../ProjectList';

class Collections extends Component {
  constructor() {
    super();
  }
  render() {
    const collections = Object.keys(projects).map((key, index) => {
      return <ProjectList projects={projects[key]} key={index} />
    })
    return (
      <div>
        {collections}
      </div>
    )
  }
}

export default Collections;