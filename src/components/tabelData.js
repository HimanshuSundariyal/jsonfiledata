import React from 'react'; 
import TableRow from '@material-ui/core/TableRow'; 
import TableCell from '@material-ui/core/TableCell'; 
const TabelData = (props) =>
{
  return(  
    props.data.map((p, index) => (
      <TableRow key={index}>  
        <TableCell component="th" scope="row">  
          {p.id}  
        </TableCell>  
        <TableCell align="left">{p.first_name}</TableCell>  
        <TableCell align="left">{p.last_name}</TableCell>  
        <TableCell align="left">{p.email}</TableCell>  
        <TableCell align="left">{p.gender}</TableCell>  
        <TableCell align="left">{p.ip_address}</TableCell>  
        <TableCell align="left">{p.country}</TableCell>  
        <TableCell style={{paddingRight:"114px"}} align="left">{p.code}</TableCell>  
      </TableRow>  
    ))  
  )
}
export default TabelData;  