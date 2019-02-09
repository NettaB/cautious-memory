import React, { Component } from 'react';
import './App.css';
import { findIsolated, sortedData } from './data';

const MissionComponent = ({ mission }) => {
  return (
    <tr>
      <td>{mission.agent}</td>
      <td>{mission.country}</td>
      <td>{mission.address}</td>
      <td>{mission.date}</td>
    </tr>
  )
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      missionList: null
    }
  }

  componentDidMount() {
    console.log('Most Isolated:', findIsolated());
    this.setState({ missionList: sortedData() });
  }
  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Agent ID</th>
              <th>Country</th>
              <th>Address</th>
              <th>Date</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td colSpan="4">{this.state.missionList && this.state.missionList.length} missions</td>
            </tr>
          </tfoot>
          <tbody>
            {this.state.missionList && this.state.missionList.map(mission => <MissionComponent mission={mission} key={mission.date} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
