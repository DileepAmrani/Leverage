import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Profile from "./../../Images/rounded-profile-pic_transparent.png";
import "./Dashboard.css";
import { Navbar } from "../../Components";
import { MDBProgress } from "mdbreact";
import LogIcon from "./../../Images/logout-icon.png";
import SemiCircleProgressBar from "react-progressbar-semicircle";
import {
  Contract,
  Dashboard,
  Wallet,
  Consultation,
} from "./../../Images/Icons";
import Thumb from "./../../Images/artboard-1.png";
import Thumb2 from "./../../Images/artboard-2.png";
import Thumb3 from "./../../Images/artboard-3.png";
class SignUp extends React.Component {
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
                <img src={Profile} alt="" style={{ borderRadius: "100%" }} />
                <br />

                <span className="bold">Kenny Manson</span>
                <span>Rapper</span>
                <span>ALT, GA</span>
                <span>Menu</span>
                <Link to="/dashboard">
                  <span className="bold _active">
                    <img src={Dashboard} alt="" className="icon" /> Dashboard
                  </span>
                </Link>
                <Link to="/contracts">
                  <span className="bold">
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
                <img src={LogIcon} width="30px" alt='logo-icon' />
              </Paper>
              <div style={{ padding: "2% 15%" }}>
                <SemiCircleProgressBar
                  percentage={50}
                  showPercentValue
                  stroke="#1CA8FC"
                  strokeWidth="15"
                />
                ;
              </div>
            </Grid>

            <Grid item xs={12} sm={8}>
              <div style={{ padding: "0" }}>
                <Container>
                  <Paper
                    className="post"
                    onClick={() => this.props.history.push("/payment")}
                  >
                    <Grid container direction="row" alignItems="center">
                      <Grid item lg={3} md={12} sm={12} xs={12}>
                        <img src={Thumb} alt="" width="180px" height="180px" />
                      </Grid>
                      <Grid item lg={9} md={12} sm={12} xs={12}>
                        <div style={{ width: "200px", float: "right" }}>
                          2 out of 4 steps completed
                          <MDBProgress value={50} className="my-2" />
                        </div>
                        <br />
                        <span className="__title">
                          Create your own Business
                        </span>
                        <span className="description">
                          Select a DBA(Doing business as) or Assumed Name <br />
                          Get your Tax ID or Fed EIN number <br />
                          Get incorporated; LLC, S-Corp, Sole proprietorship,
                          Inc
                          <br />
                          Get Logo; Trademark Get copy right and patent
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                  <br />

                  <Paper
                    className="post"
                    onClick={() => this.props.history.push("/payment")}
                  >
                    <Grid container direction="row" alignItems="center">
                      <Grid item lg={3} md={12} sm={12} xs={12}>
                        <img src={Thumb2} alt="" width="180px" height="180px" />
                      </Grid>
                      <Grid item lg={9} md={12} sm={12} xs={12}>
                        <div style={{ width: "200px", float: "right" }}>
                          2 out of 4 steps completed
                          <MDBProgress value={50} className="my-2" />
                        </div>
                        <br />
                        <span className="__title">Get Published</span>
                        <span className="description">
                          In order to protect your music every creator much
                          publish there own music <br />
                          Get your Tax ID or Fed EIN number <br />
                          Get incorporated; LLC, S-Corp, Sole proprietorship,
                          Inc <br />
                          Get Logo; Trademark <br />
                          Get copy right and patent <br />
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                  <br />

                  <Paper
                    className="post"
                    onClick={() => this.props.history.push("/payment")}
                  >
                    <Grid container direction="row" alignItems="center">
                      <Grid item lg={3} md={12} sm={12} xs={12}>
                        <img src={Thumb3} alt="" width="180px" height="180px" />
                      </Grid>
                      <Grid item lg={9} md={12} sm={12} xs={12}>
                        <div style={{ width: "200px", float: "right" }}>
                          2 out of 4 steps completed
                          <MDBProgress value={50} className="my-2" />
                        </div>
                        <br />
                        <span className="__title">Monetize your music</span>
                        <span className="description">
                          Now that your business and publishing are setup, your
                          ready to start making Money from your music
                          <br />
                          Admin Companies: TuneCore, SongTrust, CdBaby, Taxi,
                          Sound Exchange.  
                          <br />
                          We can help you sign direct with iTunes, Spotify,
                          Apple Music, Satellite radio, Pandora, and any other
                          digital or streaming service.
                          <br />
                          .<br />
                        </span>
                      </Grid>
                    </Grid>
                  </Paper>
                </Container>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default SignUp;
