import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Mobile from "./../../Images/mobile.png";
import Logo from "./../../Images/logo.png";
import LogInIcon from "./../../Images/login.png"
import "./Signin.css";
class SignUp extends React.Component {
  render() {
    return (
      <div style={{ padding: "2.5% 0" }}>
        <Container maxWidth="lg">
          <Paper elevation={3} style={{ borderRadius: "0" }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4} style={{ backgroundColor:'#D5DCE0'}}>
                <div className="background">

                <img src={Mobile} alt="" />
                </div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div style={{ padding: "5% 0", textAlign: "center" }}>
                  <Container maxWidth="sm">
                    <span style={{ display: "block", float: "right" }}>
                      Welcone to Leverage!
                    </span>
                    <br />
                    <br />
                    <br />
                    <img src={Logo} alt="logo" />
                    <br />
                    <br />
                    <br />

                    <span>
                      Join our Community that have more than 10000 artists and
                      who learn now things everyday
                    </span>
                    <br />
                    <br />
                    <br />
                    <br />

                    <TextField
                      id="outlined-basic"
                      label="EMAIL"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <TextField
                      id="outlined-basic"
                      label="PASSWORD"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                    <br />
                    <br />
                    <span style={{ display: "block", float: "right", cursor: 'pointer' }} onClick={() => this.props.history.push('/form')}>
                      <img src={LogInIcon} alt='' /> LOGIN 
                    </span>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <span style={{ display: "block", float: "left" }}>
                      Don't have Account? Sign up.
                    </span>
                  </Container>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default SignUp;
