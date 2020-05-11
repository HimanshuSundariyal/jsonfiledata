import React from 'react'; 
import data from './data/MOCK_DATA.json';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import Grid from '@material-ui/core/Grid'; 
import TabelData from './tabelData'; 
import {Button} from '@material-ui/core';

class Dashbord extends React.Component{
    
  constructor(props)
  {
    super(props);
    this.state={
      tableData:[],
      counterlist:[]
    }

  }

  handelLogout = () => {
    localStorage.removeItem("document");
    this.props.history.push("/");
  }

  filterByGender = (e) =>{
    let filter_val = e.target.value;
    if(filter_val =='')
    {
      this.setState({tableData:data})  
    }
    else
    {
    let fliter_data = data.filter( data => data.gender== filter_val); 
    this.setState({tableData: fliter_data})
    } 
  }

  filterByCounter = (e) => {
    let filter_val = e.target.value;
    if(filter_val =='')
    {
      this.setState({tableData:data})  
    }
    else
    {
    let fliter_data = data.filter( data => data.country== filter_val); 
    this.setState({tableData: fliter_data})
    } 
  }

  componentDidMount() {
    let documentData = JSON.parse(localStorage.getItem('document'));
    console.log(documentData);
    if(documentData)
    {
    if(documentData.username !== 'admin')
    {
      this.props.history.push("/") 
    }
  }
  else{
    this.props.history.push("/") 
  }
      this.setState({tableData: data})

  let country = [];
  for(var i = 0; i<data.length; i++ )
  {
    if(country.includes(data[i].country))
    {

    }
    else
    {
      country.push(data[i].country);
    }
  } 
      this.setState({counterlist: country });
  }  
  
  render(){
    return(
    <Grid  
    container  
    direction="column"  
    alignItems="center"  
    justify="center"  
    style={{maxWidth: "1120px", margin: "0 auto" }}  
    > 


<Grid container>
  <Grid item md={4}>
    Filter By Gender 
    <select onChange={this.filterByGender}>
        <option value="">...Please selectg...</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>
  </Grid>
  <Grid item md={4}>
     Filter By country
      <select onChange={this.filterByCounter}>
        <option>...Select Country...</option>
        {
          this.state.counterlist.map( country => (
            <option key={ country } value={country}> {country } </option>
          ))
        }
      </select>

  </Grid>
  <Grid item md={4}>
  <Button variant="contained" color="primary" onClick={this.handelLogout}>
  logout
</Button>
  </Grid>
</Grid>



    <TableContainer component={Paper}>  
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead>  
            <TableRow>  
              <TableCell>Id</TableCell>  
              <TableCell align="left">First Name</TableCell>  
              <TableCell align="left">Last Name</TableCell>  
              <TableCell align="left">Email</TableCell>  
              <TableCell align="left">Gender</TableCell>  
              <TableCell align="left">Ip Address</TableCell>  
              <TableCell align="left">country</TableCell>  
              <TableCell style={{paddingRight:"60px"}} align="left" >Country Code</TableCell>  
            </TableRow>  
          </TableHead>  
          <TableBody>  
            <TabelData data={this.state.tableData} />
          </TableBody>  
        </Table>  
</TableContainer>  
</Grid>
    )
}
}
export default Dashbord;