import React from "react";

import { Container, Grid } from "@material-ui/core";

import TimeChart from "../components/Chart/TimeChart";
import AppBar from "../components/AppBar";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#edd3a1" }}>
      <Container maxWidth="lg">
        <AppBar />
        <TimeChart />
      </Container>
    </div>
  );
};
export default Dashboard;
