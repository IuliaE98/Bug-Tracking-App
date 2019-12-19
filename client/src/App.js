import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  
  componentDidMount = () => {
    axios.get('http://18.223.122.208:8080/api/project').then(projects => {
      this.setState({
        projects: projects.data
      })
    })
  }
  
  render() {
    const projects = this.state.projects.map((project, index) => <div key={index}>{project.name}</div>)
    return (
      <div className="app">
      <main>
        <h1>Bughunter</h1>
        <div className="projects">
          <h2>Projects list</h2>
          <div>{projects}</div>
        </div>
      </main>
    </div>
    );
  }
}

export default App;
