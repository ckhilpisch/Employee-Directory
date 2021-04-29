import React, { Component } from "react";
import EmployeeTable from "../EmployeeTable/index";
import { getUserData } from "../../utils/API";
import Navbar from "../Navbar/index";
import Search from "../Search/index";
import "../EmployeeDirectory/style.css";


export default class EmployeeDirectory extends Component {
    state = {
      users: [],
      order: "descend",
      filteredUsers: []
    }

    componentDidMount() {
      getUserData().then(results => {
        const cleanUsers = 
        results.data.results.map(user => {
          return {
            pic: user.picture.thumbnail, 
            name: user.name.first + " " + user.name.last, 
            email: user.email, 
            phone: user.phone
          }
        })
        this.setState({
          users: cleanUsers,
          filteredUsers: cleanUsers
        });
      });
    }
    
    handleSearch = event => {
      const filter = event.target.value;
      const filteredList = this.state.users.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase()) 
      })
      this.setState({ filteredUsers: filteredList });
    }
      render() {
      return (
        <>
          <Navbar>
          <Search handleSearch={this.handleSearch} />
          </Navbar>
          <div className="employeeTable">
            <EmployeeTable users={this.state.filteredUsers}
            />
          </div>
        </>
      );
    }
  }
