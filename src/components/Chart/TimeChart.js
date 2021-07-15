import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { activityCheckApi } from "./actionChart";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { AppBar, Grid, TableCell, TableRow, Typography } from "@material-ui/core";

import LineProgress from "./LineProgress";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  largesize: { fontSize: 110},
  middlesize: {fontSize: 60},
  smallsize:{fontsize:5},
  text1:{fontSize:15},
  leftText: {
    textAlign: "left"
  },
  rightText: {
    textAlign: "right"
  },
  centerText: {
    textAlign: "center"
  },
}));
const TimeChart = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [category, setCategory] = useState("10");

  const [all, setAll] = useState({});
  const [color, setColor] = useState("");
  const [label, setLabel] = useState([]);

  const [deviceUsage, setDeviceUsage] = useState({ mobile: 10, laptop: 20 });
  const [dataChart, setDataChart] = useState([]);
  console.log({ dataChart });
  const chartData = useSelector((state) => state.studentTimings.chartData);
  const deviceData = useSelector(
    (state) => state.studentTimings.deviceData.chartData
  );
  console.log({ deviceData });
  // const Dtatt = screenTimings?.map((item) => setData(item.chartData));
  // console.log({ sss: chartData[0] });
  {
    cc: console.log(color);
  }

  console.log({ label });
  const data = {
    labels:
      label.length == 1 ? label : ["Class Time", "Study Time", "Free Time"],
    datasets: [
      {
        label: "# of Votes",
        data: dataChart,

        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
        weight: 1,
        hoverOffset: 10,
      },
    ],
  };
  console.log({ data });
  const handleChange = (event) => {
    console.log({ sd: event.target.value });
    setCategory(event.target.value);
    if (event.target.value === 10) {
      console.log("all");
      setLabel(["Class Time", "Study Time", "Free Time"]);
      setDataChart([
        chartData[0]?.classTime?.total,
        chartData[0]?.freeTime?.total,
        chartData[0]?.studyTime?.total,
      ]);
      setDeviceUsage({
        mobile: deviceData[0].deviceUsage.totalTime.mobile,
        laptop: deviceData[0].deviceUsage.totalTime.laptop,
      });

      setColor(["rgb(0, 102, 255)", "rgb(102, 255, 51)", "rgb(255, 102, 0)"]);
    }
    if (event.target.value === 20) {
      setColor("rgb(0, 102, 255)");
      setLabel(["Class Time"]);
      setDataChart(chartData[0].classTime.total);
      console.log("classtime");
      setDeviceUsage({
        mobile: deviceData[0].deviceUsage.classTime.mobile,
        laptop: deviceData[0].deviceUsage.classTime.laptop,
      });
    }
    if (event.target.value === 30) {
      setLabel(["Study Time"]);
      console.log("studytime");
      setColor("rgb(102, 255, 51)");
      setDataChart(chartData[0].studyTime.total);
      setDeviceUsage({
        mobile: deviceData[0].deviceUsage.studyTime.mobile,
        laptop: deviceData[0].deviceUsage.studyTime.laptop,
      });
    }
    if (event.target.value === 40) {
      setLabel(["Free Time"]);
      setColor("  rgb(255, 102, 0)");

      setDataChart(chartData[0].freeTime.total);
      console.log("freetime");
      setDeviceUsage({
        mobile: deviceData[0].deviceUsage.freeTime.mobile,
        laptop: deviceData[0].deviceUsage.freeTime.laptop,
      });
    }
  };

  useEffect(() => {
    dispatch(activityCheckApi());
  }, []);
  return (
    <div>
    
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{ backgroundColor: "#ffff" }}
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
      <Typography  gutterBottom variant="h5" className="s" color="textSecondary" component="p"  className={classes.leftText}>
            Activities Summary
            </Typography>
      <Grid
        style={{ backgroundColor: "#ffff", marginTop: 10 }}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        
        <Grid item xs={12} sm={4}>
        <Typography  gutterBottom variant="h5" className="s" color="textSecondary" component="p"  className={classes.leftText}>
            All Screen Time
            </Typography>
            <Grid container
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
          <p>Total:{chartData[0]?.totalTime?.total}</p>
          <Doughnut width={500}
        height={500} data={data} />
        </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
        
          {category == 10 ? <LineProgress /> : ""}
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography  gutterBottom variant="h5" className="s" color="textSecondary" component="p"  className={classes.centerText}>
            By Devices
            </Typography>
          <Grid container>
            
            <Grid item xs={12}>
              
              <TableRow>
                <TableCell>
              <PhoneAndroidIcon className={classes.middlesize} />
              </TableCell>
              <TableCell>
              <Typography variant="body2" className="s" color="textSecondary" component="p"  className={classes.centerText}>
                
                Adi's Phone<p>{deviceUsage.mobile}m </p>
              </Typography>
              </TableCell>
              </TableRow>
            </Grid>
            <Grid item xs={12}>
              <TableRow>
                <TableCell>
              <LaptopMacIcon className={classes.largesize} /> </TableCell>
              <TableCell>
              <Typography variant="body2" className="s" color="textSecondary" component="p"  className={classes.centerText}>
                
                Adi's Lap<p>{deviceUsage.laptop}m </p>
              </Typography>
              </TableCell>
              </TableRow>
              <Typography size="small"  color="primary" className={classes.rightText}  >
          See all devices
          </Typography>
            </Grid>
            
          </Grid>
        </Grid>
        
      </Grid>
        
      
    </div>
  );
};
export default TimeChart;
