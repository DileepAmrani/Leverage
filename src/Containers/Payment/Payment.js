import React from "react";
import { Navbar } from "../../Components";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TickMark from "./../../Images/tickmark.png";
import { MDBBtn } from "mdbreact";
import "./Payment.css";
class Payment extends React.Component {
  render() {
    return (
      <div className="payment">
        <Navbar path={() => this.props.history} />

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Paper style={{ minHeight: "500px" }}>
                <div className="card-header">
                  <br />
                  <span className="title">FREE MEMBERSHIP</span>

                  <span className="price">
                    <sup>$</sup>0<sub>/mo</sub>
                  </span>
                </div>

                <div style={{ padding: "5%" }}>
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Personalized Consultation</span>
                  </span>
                  <br />
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Monthly Webinars</span>
                  </span>
                  <br />
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Exclusive Newsletters</span>
                  </span>
                  <br />

                  <span>
                    <img src={TickMark} />

                    <span className="_text">Hardship Help</span>
                  </span>
                  <br />
                  <div className="card-bottom-btn">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <MDBBtn color="primary" style={{ width: "200px" }} onClick={() => this.props.history.push('/dashboard')}>
                      JOIN NOW
                    </MDBBtn>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper style={{ minHeight: "500px" }}>
                <div className="card-header blue">
                  <span className="sub-title">MOST POPULAR</span>

                  <span className="title">BASIC MEMBERSHIP</span>

                  <span className="price">
                    <sup>$</sup>19.99<sub>/mo</sub>
                  </span>
                </div>

                <div style={{ padding: "5%" }}>
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Personalized Consultation</span>
                  </span>
                  <br />
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Monthly Webinars</span>
                  </span>
                  <br />
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Exclusive Newsletters</span>
                  </span>
                  <br />

                  <span>
                    <img src={TickMark} />

                    <span className="_text">Hardship Help</span>
                  </span>
                  <br />

                  <span>
                    <img src={TickMark} />

                    <span className="_text"> Access to Industry Contracts</span>
                  </span>
                  <br />
                  <div className="card-bottom-btn">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <MDBBtn color="primary" style={{ width: "200px" }} onClick={() => this.props.history.push('/dashboard')}>
                      JOIN NOW
                    </MDBBtn>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper style={{ minHeight: "500px" }}>
                <div className="card-header dark">
                  <span className="sub-title">MOST POPULAR</span>
                  <span className="title">BASIC MEMBERSHIP</span>

                  <span className="price">
                    <sup>$</sup>200<sub>/yr</sub>
                  </span>
                </div>

                <div style={{ padding: "5%" }}>
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Personalized Consultation</span>
                  </span>
                  <br />
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Monthly Webinars</span>
                  </span>
                  <br />
                  <span>
                    <img src={TickMark} />

                    <span className="_text">Exclusive Newsletters</span>
                  </span>
                  <br />

                  <span>
                    <img src={TickMark} />

                    <span className="_text">Hardship Help</span>
                  </span>
                  <br />

                  <span>
                    <img src={TickMark} />

                    <span className="_text"> Access to Industry Contracts</span>
                  </span>
                  <br />
                  <div className="card-bottom-btn">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <MDBBtn color="dark" style={{ width: "200px" }} onClick={() => this.props.history.push('/dashboard')}>
                      JOIN NOW
                    </MDBBtn>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <div className="payment_bottom_text">
          <span>
            Based on your survey results, we’ve determined that you’re in the
            beginning stages of building a sustainable brand as an artist.
            Leverage is here to guide through the steps to take your career to
            the next level!
          </span>
        </div>
      </div>
    );
  }
}

export default Payment;
