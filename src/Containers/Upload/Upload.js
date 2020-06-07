import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Profile from "./../../Images/rounded-profile-pic_transparent.png";
import "./Upload.css";
import { Navbar } from "../../Components";
import LogIcon from "./../../Images/logout-icon.png";
import Swal from "sweetalert2";
import { Contract, Dashboard, Wallet, Consultation } from "../../Images/Icons";
class SignUp extends React.Component {

  action = () =>{
  Swal.fire("Good job!", "CONGRATS YOU HAVE UPLOADED YOUR CONTRAT FOR REVISION!");
  }
  render() {
    return (
      <div style={{ padding: ".5%" }}>
        <Paper elevation={3}>
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
                    className="bold"
                  >
                    <img src={Wallet} alt="" className="icon" /> Document Vault
                </span>
                </Link>

                <Link to="/upload">


                  <span className="bold  _active">
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
                <img src={LogIcon} width="30px" alt='logo-icon' />
              </Paper>
              <br />
              <br />
              <br />
            </Grid>

            <Grid item xs={12} sm={8}>
              <Paper className="_paper">
                <div style={{ padding: "2%" }}>
                  <span className="heading">Upload New Documents</span>
                  <span style={{ float: "right" }}>X</span>
                </div>
                <div style={{ backgroundColor: "#E0E0E0" }}>
                  <br />

                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <div class="dropzone-wrapper">
                            <div class="dropzone-desc">
                              {/* <i class="glyphicon glyphicon-download-alt"></i> */}
                              <span>
                                <b>Drag and drop or</b> Browse files
                              </span>
                              <br />
                              <span>Maximum file size 200MB</span>
                              <br />
                              <span>Maximum number of files 100</span>
                              <br />
                              <span>Accepted: pot</span>
                              <br />
                            </div>

                            <input
                              type="file"
                              name="img_logo"
                              class="dropzone"
                            />
                          </div>
                        </div>

                        <div style={{ padding: "3%", textAlign: "center" }}>
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize: "25px",
                              color: "#1FA7FB",
                            }}
                          >
                            Advanced Setting
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "2%" }}>
                  <span>No Document Required</span>
                  <span style={{ float: "right" }}>
                    <button className="button">Cancel</button>
                    <button className="button btn-color" onClick={()=> this.action()}>Upload Document</button>
                  </span>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default SignUp;
