import React, { Component } from 'react'
import './style.css';
 export default class tables extends Component {
   constructor()
   {
     super();
     this.state={
       users:null
     }
   }
   
   componentDidMount() {
  fetch('https://reqres.in/api/users').then((resp)=>{
    resp.json().then((result)=>{
     // console.warn(result.data)
      this.setState({users:result.data})
    })
  })
}


  render() {
    return (
      <div className="tables">
      <center>
        <h1 className="heading">
          Fetch API Data
        </h1>
        </center>
        <div classname="content-color">
       
          <center>
            <table className="table" border="10">
              <tr className="title">
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
              </tr>
          {
          this.state.users ? this.state.users.map((item,i)=>
         
        <tr className="title">
          <td>{item.id}</td>
         <td>{item.first_name}</td> 
        <td>{item.last_name}</td>
         <td>{item.email}</td>
        </tr>
        
    )
    :
    null
        }
        </table>
        </center>
        </div>
        </div>
    );
  }
}
