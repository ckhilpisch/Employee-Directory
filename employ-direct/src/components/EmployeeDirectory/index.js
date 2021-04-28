import React, { Component } from "react";
import EmployeeRow from "../EmployeeTable";
import Header from "../Header";
import API from "../../utils/API";
import getUserData from "../../utils/API";





export default class EmployeeDirectory extends Component {
    state = {
      users: [{}],
      order: "descend",
      filteredUsers: [{}]
    }

    componentDidMount() {
      API.getUserData().then(results => {
        this.setState({
          users: results.data.results,
          filteredUsers: results.data.results
        });
      });
    }
    
    handleSearch = event => {
      console.log(event.target.value);
      const filter = event.target.value;
      const filteredList = this.state.users.filter(item => {

        let values = Object.values(item)
          .join("")
          .toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
      });
      this.setState({ filteredUsers: filteredList });
    }
  
    

      render() {
      return (
        <>
          <Nav handleSearch={this.handleSearch} />
          <div className="employeeTable">
            <EmployeeTable
              headings={this.headings}
              users={this.state.filteredUsers}
              handleSort={this.handleSort}
            />
          </div>
        </>
      );
    }
  }
  