import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Grid } from "@material-ui/core";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const Filter = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    console.log({ sd: event.target.value });
    setCategory(event.target.value);
    if (event.target.value == 10) {
      console.log("all");
    }
    if (event.target.value == 20) {
      console.log("classtime");
    }
    if (event.target.value == 30) {
      console.log("studytime");
    }
    if (event.target.value == 40) {
      console.log("freetime");
    }

    // switch (event?.target?.value) {
    //   case 1:
    //     event.target.value == 10;
    //     console.log("All");
    //   case 2:
    //     event.target.value == 20;
    //     console.log("Class Time");
    // }
  };
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={2}>
          <FormControl
            color="primary"
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Select
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={category}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Class Time</MenuItem>
              <MenuItem value={30}>Study Time</MenuItem>
              <MenuItem value={40}>Free Time</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};
export default Filter;
