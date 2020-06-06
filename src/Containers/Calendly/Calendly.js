import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Profile from "./../../Images/rounded-profile-pic_transparent.png";
import LogIcon from "./../../Images/logout-icon.png"
import { Navbar } from "../../Components";
import { MDBProgress } from "mdbreact";
import { Link } from "react-router-dom";

import SemiCircleProgressBar from "react-progressbar-semicircle";
import {
  Contract,
  Dashboard,
  Wallet,
  Consultation,
} from "../../Images/Icons";
class SignUp extends React.Component {
  calendlyScriptSrc = 'https://assets.calendly.com/assets/external/widget.js'
  buildCalendlyUrl = (account, eventName) =>
    `https://calendly.com/${account}/${eventName}`

  componentDidMount() {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', this.calendlyScriptSrc)
    head.appendChild(script)
  }

  componentWillUnmount() {
    const head = document.querySelector('head')
    const script = document.querySelector('script')
    head.removeChild(script)
  }
  render() {

    return (
      <div style={{ padding: ".5%" }}>
        <Paper elevation={3}>
          <Navbar path={() => this.props.history} />

          <Grid container spacing={1}>
            <Grid item xs={12} sm={3} style={{ padding: "0% 2%" }}>
              <Paper
                style={{ borderRadius: "20px 0px 0px 20px", padding: "8% 15%" }}
                className="dashboard-side"
              >
                {/* <Badge badgeContent={4} color="primary"> */}
                <img
                  src={Profile}
                  alt=""
                  width="100px"
                  style={{ borderRadius: "100%" }}
                />
                <br />
                {/* </Badge> */}
                <span className="bold">Kenny Manson</span>
                <span>Rapper</span>
                <span>ALT, GA</span>
                <span>Menu</span>
                <Link to="/dashboard">
                  <span className="bold">
                    <img src={Dashboard} alt="" className="icon" /> Dashboard
                  </span>
                </Link>
                <Link to="/contracts">
                  <span
                    className="bold"
                  >
                    <img src={Wallet} alt="" className="icon" /> Document Vault
                </span>
                </Link>

                <Link to="/upload">


                  <span className="bold">
                    <img src={Contract} alt="" className="icon" /> Contract
                    Revision
                  </span>
                </Link>
                <Link to="/calendly">
                  <span className="bold _active">
                    <img src={Consultation} alt="" className="icon" />
                    Consultation
                  </span>
                </Link>

                <img src={LogIcon} width='30px' />


              </Paper>
     
            </Grid>

            <Grid item xs={12} sm={8}>
            
              <div class="calendly-inline-widget" data-url="https://calendly.com/joinleveragedotcom/15min" style={{ minWidth: '320px', height: '630px' }}></div>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default SignUp;
