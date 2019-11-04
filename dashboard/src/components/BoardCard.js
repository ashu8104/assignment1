/* globals $ */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class BoardCard extends React.PureComponent {
  
  constructor(props) {
    super(props);
  
  }



  render() {
    console.log('MyName');
    if(this.props.board_name){
        return (
            <div className="col s12 m6 l3 ">
              <div className="card blue-grey darken-1 board-card display-card top-margin">
                <div className="card-content white-text">
                  <Link to="/addlist"><span> {this.props.board_name} </span></Link>
                </div>
              </div>
            </div>

        );
    }
  }
}