import {  useState } from "react";
import { TextField, Button, Typography, Grid, Box } from "@mui/material";
import { SendEmail } from "../Functinality/SendEmail";
import { useApp } from "../Context/useAppContext";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [emailData, setEmailData] = useState({
    From: "",
    To: "hassan19alsayed@gmail.com",
    Subject: "",
    Body: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const { email, isLogin } = useApp();

  const navigate = useNavigate();


  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      emailData.From = email;
      SendEmail(emailData);
      setIsLoading(false);
      toast.success("Email sent successfully!");
      navigate("/catalog");
    }, 3000);
  };


  return (
    isLogin ? (
      <form>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              name="From"
              value={email}
              InputProps={{ readOnly: true }} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              variant="outlined"
              type="text"
              name="Subject"
              required
              value={emailData.Subject}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              required
              rows={4}
              name="Body"
              value={emailData.Body}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="center">
              {isLoading ? (
                <ClipLoader />
              ) : (
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </form>
    ) : (
      <form>
      <Typography variant="h4" gutterBottom>
        {
          toast.warning(' you cannot contact us, please login')
        }
      
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="From"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            type="text"
            name="Subject"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            name="Body"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <Box textAlign="center">
            {isLoading ? (
              <ClipLoader />
            ) : (
              <Button variant="contained" color="primary" onClick={handleSubmit} disabled>
                Submit
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </form>
    )
  );
  
         
}

export default Contact;
