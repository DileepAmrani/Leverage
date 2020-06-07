import React from "react";
import { Navbar } from "../../Components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { IconOne, IconTwo, IconThree, IconFour } from "./../../Images";
import "./HomePage.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="landing-page">
          <div style={{position: 'fixed' , width: '100%', backgroundColor: "#FFF"}}>

          <Navbar path={() => this.props.history} isLogin="false" />
          </div>
          <div style={{ padding: "5%", paddingTop: '200px'}}>
            <span className="heading">
              One Bad Contract
              <br /> Can Ruin Your Career
            </span>
            <span className="text">
              We help you focus on your creative career by
              <br /> negotiating contracts and other deals on your behalf.
            </span>
            <span className="text">A company for, artists, by artists.</span>
            <br />
            <div style={{ display: "flex" }}>
              <button
                className="join-btn"
                onClick={() => this.props.history.push("/payment")}
              >
                Join Now
              </button>
              <a href='#home'>
              <button
                className="more-btn"
              >

                Learn More
              </button>
                </a>
            </div>
          </div>
        </div>

        <div className="home_page" id='home'>
        <br /> <br />
          <Container maxWidth="lg">
            <span className="heading"> Focus on what matters</span>
            <br />
            <span className="text">
              As a creative, your sole focus should be on doing what you do
              best.
            </span>

            <br />
            <br />

            <span className="text">
              Leverage helps you achieve this by guiding you through the legel
              and logistical requirements to have a sustanable career.
            </span>

            <br />
            <div className="cards-section">
              <Grid container spacing={3}>
                <Grid item  sm={6} md={3} lg={3} xs={12}>
                  <img src={IconOne} alt="icon" />
                  <span className="card-title">HARDSHIP PROGRAM</span>
                  <br />
                  <span className="description">
                    Funding for artists dealing with family tragedy, stolen
                    instruments, job loss, ets
                  </span>
                </Grid>
                <Grid item  sm={6} md={3} lg={3} xs={12}>
                  <img src={IconTwo} alt="icon" />

                  <span className="card-title">LEGAL HELP</span>
                  <br />
                  <span className="description">
                    We provide opportunities to discuss legal issues with our
                    team at a reduced cost.
                  </span>
                </Grid>
                <Grid item  sm={6} md={3} lg={3} xs={12}>
                  <img src={IconThree} alt="icon" />

                  <span className="card-title">DOCUMENTS</span>
                  <br />
                  <span className="description">
                    We provide our Leverage Artists with free legal documents to
                    propel their careers.
                  </span>
                </Grid>
                <Grid item  sm={6} md={3} lg={3} xs={12}>
                  <img src={IconFour} alt="icon" />

                  <span className="card-title">MUSIC DISTRIBUTUTION</span>
                  <br />
                  <span className="description">
                    Leverage Artists have access to our distribution partners.
                    We’ll help you get discovered!
                  </span>
                  <br />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
