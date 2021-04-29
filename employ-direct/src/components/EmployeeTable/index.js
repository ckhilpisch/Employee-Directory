import React from "react";
import MaterialTable from "material-table";
import "../EmployeeTable/style.css"

function EmployeeTable({ users }) {
  console.log(users);
    return (
      <MaterialTable
      title=""
      columns={[
        { title: "Image", field: "pic", render: rowData => <img src={rowData.pic}/> },
        { title: 'Name', field: 'name' },
        { title: "Email", field: "email" },
        { title: "Phone", field: "phone"},
      ]}
      data={ users }
      options={{
        sorting: true,
        search: false
      }}
       
/>)}


export default EmployeeTable;
