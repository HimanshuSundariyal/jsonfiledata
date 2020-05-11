import React from 'react';  
import Button from '@material-ui/core/Button';  
import TextField from '@material-ui/core/TextField';  
import Grid from '@material-ui/core/Grid';  
import Typography from '@material-ui/core/Typography'; 
import Alert from '@material-ui/lab/Alert';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error:false
  }
}


componentDidMount() {
   let documentData = JSON.parse(localStorage.getItem('document'));

   if(documentData)
   {
   if(documentData.username === 'admin' && documentData.password ==='admin')
   {
    this.props.history.push("/dashbord") 
   }

}

 }

handleChange = (e)=> {
  this.setState({[e.target.name]:e.target.value});
}

handleFormSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem('document',JSON.stringify(this.state));
  if(this.state.username==='admin' && this.state.password==='admin')
  {
   this.props.history.push("/dashbord")  
  }
  else
  {
     this.setState({error:true})
  }
}


render() {  
   return (  
      <Grid  
         container  
         spacing={0}  
         direction="column"  
         alignItems="center"  
         justify="center"  
         style={{ minHeight: '100vh' }}  
         >  

{ this.state.error && <Alert severity="error">Please use username:admin and password:admin</Alert>}

   <Typography component="h1" variant="h5">  
      Log in  
   </Typography>  
   <form onSubmit={this.handleFormSubmit}>  
   <TextField
      name="username"  
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="User Name"
      autoComplete="off"
      onChange ={this.handleChange}
   />  
   <TextField
      name="password"   
      variant="outlined"  
      margin="normal"  
      fullWidth  
      label="Password"  
      type="password" 
      autoComplete="off"
      onChange ={this.handleChange}
   />  
   <Button  
      type="submit"  
      fullWidth  
      variant="contained"  
      color="primary"  
      >  
      Log In  
      </Button>  
   </form>  
  </Grid>  
  );  
 }    
}  
export default Login;  