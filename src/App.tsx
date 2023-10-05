import { useState } from "react";
import "./App.css";
import { Button, Grid, Typography } from "@mui/material";
import dataMenu from "./mocks/data.json";

function App() {
  console.log(dataMenu);

  return (
    <>
      <Grid>
        <Grid>
          <Typography>PLANIFICACION DE MENUS</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
