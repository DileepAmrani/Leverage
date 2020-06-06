import React from "react";
import { Navbar } from "../../Components";
import Container from "@material-ui/core/Container";
import "./OnBroadingForm.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LeftIcon from "./../../Images/left.png";
import RightIcon from "./../../Images/right.png";
class Form extends React.Component {
  render() {
    return (
      <div>
        <Navbar path={() => this.props.history} />

        <Container maxWidth="sm">
          <br /><br />
          <span className="question">Have you started a Busines?</span>
          <br /><br /><br />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} sm={6} lg={6}>
              <Paper className="paper">Sole Proprietership</Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Paper className="paper">Assumed Name</Paper>
            </Grid>

            <Grid item xs={12} sm={6} lg={6}>
              <Paper className="paper">LLC</Paper>
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <Paper className="paper">Corporation</Paper>
            </Grid>

            <Grid item xs={12} sm={6} lg={6}>
              <Paper className="paper">Net Yet</Paper>
            </Grid>
          </Grid>
        </Container>
        <br />
        <Container maxWidth="lg">
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6} sm={6} lg={6} style={{cursor: 'pointer'}} onClick={() => this.props.history.push('/payment')}>
              <img src={LeftIcon} />
            </Grid>

            <Grid item xs={6} sm={6} lg={6} style={{cursor: 'pointer'}} onClick={() => this.props.history.push('/dashboard')}>
              <img src={RightIcon} style={{ float: "right" }} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Form;
