import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { Link } from "react-router-dom";

import Profile from "./../../Images/rounded-profile-pic_transparent.png";
import "./Contracts.css";
import { Navbar } from "../../Components";
import { MDBProgress } from "mdbreact";
import { MDBBtn } from "mdbreact";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import LogIcon from "./../../Images/logout-icon.png"
import {
  Contract,
  Dashboard,
  Wallet,
  Consultation,
} from "../../Images/Icons";
import Swal from "sweetalert2";


class SignUp extends React.Component {
  action = () => {
    Swal.fire(
      "GREAT!",
      "CONGRATS YOU HAVE DOWNLOADED A LEVERAGE APPROVED CONTRACT!"
    );
  };
  render() {
    return (
      <div style={{ padding: ".5%" }}>
        <Paper elevation={3} style={{ paddingBottom: "20px" }}>
          <Navbar path={() => this.props.history} />

          <Grid container spacing={0}>
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
                    className="bold _active"
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
                  <span className="bold">
                    <img src={Consultation} alt="" className="icon" />
                    Consultation
                  </span>
                </Link>
                <img src={LogIcon} width="30px" />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                  <Paper>
                    <div className="title">
                      PRODUCER <br />
                      (FOR HIRE)
                      <br />
                      CONTRACT
                    </div>
                    <div className="post-image">
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <MDBBtn color="primary"   onClick={()=> this.action()}>DOWNLOAD NOW</MDBBtn>
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Paper>
                    <div className="title">
                      PRODUCER <br />
                      (FOR HIRE)
                      <br />
                      CONTRACT
                    </div>
                    <div className="post-image">
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <MDBBtn color="primary"  onClick={()=> this.action()}>DOWNLOAD NOW</MDBBtn>
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Paper>
                    <div className="title">
                      PRODUCER <br />
                      (FOR HIRE)
                      <br />
                      CONTRACT
                    </div>
                    <div className="post-image">
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <MDBBtn color="primary"  onClick={()=> this.action()}>DOWNLOAD NOW</MDBBtn>
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Paper>
                    <div className="title">
                      PRODUCER <br />
                      (FOR HIRE)
                      <br />
                      CONTRACT
                    </div>
                    <div className="post-image">
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <MDBBtn color="primary"  onClick={()=> this.action()}>DOWNLOAD NOW</MDBBtn>
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Paper>
                    <div className="title">
                      PRODUCER <br />
                      (FOR HIRE)
                      <br />
                      CONTRACT
                    </div>
                    <div className="post-image">
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <MDBBtn color="primary"  onClick={()=> this.action()}>DOWNLOAD NOW</MDBBtn>
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Paper>
                    <div className="title">
                      PRODUCER <br />
                      (FOR HIRE)
                      <br />
                      CONTRACT
                    </div>
                    <div className="post-image">
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <MDBBtn color="primary"  onClick={()=> this.action()}>DOWNLOAD NOW</MDBBtn>
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Paper>
                    <div className="title">
                      PRODUCER <br />
                      (FOR HIRE)
                      <br />
                      CONTRACT
                    </div>
                    <div className="post-image">
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <MDBBtn color="primary"  onClick={()=> this.action()}>DOWNLOAD NOW</MDBBtn>
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                  <Paper>
                    <div className="title">
                      PRODUCER <br />
                      (FOR HIRE)
                      <br />
                      CONTRACT
                    </div>
                    <div className="post-image">
                      <br />
                      <br />
                      <br /> <br />
                      <br />
                      <MDBBtn color="primary"  onClick={()=> this.action()}>DOWNLOAD NOW</MDBBtn>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default SignUp;
