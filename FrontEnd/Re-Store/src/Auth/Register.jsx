import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Register = () => {
  const [register, setRegister] = useState({ Name: '', Email: '', Phone: '', Address: '', Password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setRegister({
      Name: formData.get('Name'),
      Email: formData.get('Email'),
      Phone: formData.get('Phone'),
      Address: formData.get('Address'),
      Password: formData.get('Password'),
    });

    setLoading(true); 
  };

  useEffect(() => {
    if (register.Email && register.Password && register.Name && register.Address && register.Phone) {
      const timeoutId = setTimeout(() => {
        axios.post('http://localhost:5043/api/Account/Register', register)
          .then((response) => {
            console.log('Registration successful:', response.data);
            navigate('/login')
          })
          .catch(error => {
            console.error('Registration error:', error);
          })
          .finally(() => {
            setLoading(false); 
          });
      }, 1000); 

      return () => clearTimeout(timeoutId);
    }
  }, [register]); 

  return (
    <Container component={Paper} maxWidth="ms" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '4' }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Username"
            name="Name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Email"
            label="Email"
            type="email"
            id="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Phone"
            label="Phone"
            type="phone"
            id="phone"
            autoComplete="phone"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="Address"
            label="Address"
            type="text"
            id="address"
            autoComplete="address"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? <ClipLoader size={10} color='white' /> : 'Sign Up'}
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/login'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
