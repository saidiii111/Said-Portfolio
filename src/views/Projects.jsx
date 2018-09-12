import React, {Component} from 'react';
import {Link} from "react-router-dom";

import projects from "../projects.json";

import {
  CardDeck,
  Card,
  CardTitle,
  CardBody,
  Badge
} from 'reactstrap';


class Projects extends Component {
  componentDidMount(){
    document.title = "Projects | Said's website";
  }
  render(){
    return(
      <div className="row">
      <CardDeck className="mt-5 col-sm col-md col-lg">
        {projects.map((project, i) => (
          <Card key={i}>
            <CardBody>
              <CardTitle className="h3">
                {project.title}
              </CardTitle>
            </CardBody>
            <img width="100%" src={project.thumbnailUrl} alt={project.title}/>
            <CardBody>
              <div className="tags">
                {project.tags.map(tag => (
                  <Badge key={tag} color="primary" pill>{tag}</Badge>
                ))}
              </div>
              <Link className="btn btn-primary" to={`/projects/${i}`}>See project</Link>
            </CardBody>
          </Card>
        ))}
      </CardDeck>
      </div>
    );
  }
}

export default Projects;
