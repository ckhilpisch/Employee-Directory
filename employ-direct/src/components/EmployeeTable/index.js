import React from "react";
import MaterialTable from "material-table";

function EmployeeTable({ users }) {
  console.log(users);
    return (
      <MaterialTable
      title=""
      columns={[
        { title: "", field: "pic", render: rowData => <img src={rowData.pic}/> },
        { title: 'First', field: 'name' },
        { title: 'Last', field: 'surname' },
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
