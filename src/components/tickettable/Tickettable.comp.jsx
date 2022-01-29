
import React  from "react";
import { Table } from "react-bootstrap";

export const Tickettable=({tickets})=>{
    return(
        <Table striped bordered hover>
            <thead>
               <tr>
                   <th>#</th>
                   <th>subjects</th>
                   <th>status</th>
                   <th>opened date</th>
                   </tr>


            </thead>
            <tbody>
            {tickets.length ? (tickets.map(row => (
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.subject}</td>
                        <td>{row.status}</td>
                        <td>{row.createdAt}</td>
                    </tr>
                ))) : (
                    <tr>
                        <td colSpan="4" className='text-center'>No ticket show</td>
                    </tr>
                )}
               
                
                
            </tbody>
          
        </Table>
    );
};