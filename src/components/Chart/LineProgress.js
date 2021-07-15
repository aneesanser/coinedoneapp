import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import moment from "moment";
import { Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);
const LineProgress = () => {
  const chartData = useSelector((state) => state?.studentTimings?.chartData);
  let From = moment.duration(chartData[0]?.freeTime?.total, "minutes");
  let To = moment.duration(chartData[0]?.totalTime?.total, "minutes");
  console.log({ To });
  //   console.log({ tim: moment(chartData[0].freeTime.total).format("hh") });
  return (
    <div>
      <Typography  gutterBottom variant="h5" className="s" color="textSecondary" component="p"  >
            Free Time-Usage
            </Typography>
       <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                          >
      <Typography variant="body2" className="s" color="textSecondary" component="p"  >Used {From._data.minutes}m</Typography> 
      <Typography variant="body2" className="s" color="textSecondary" component="p"  >Max {To._data.hours}hr</Typography>
      
      
    
      </Grid>
      <BorderLinearProgress
        variant="determinate"
        value={chartData[0]?.freeTime?.total}
      />
     <Grid 
                  container
                  
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                
              <Button  
                variant="outlined" 
                color="primary" 
                style={{ "height": "30"
                }}
              >
                Extend Free Time
              </Button>
              </Grid>
              <Grid
                  container
                  
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                
              <Button  
              
                color="primary" 
                style={{ "height": "28"
                }}
              >
                Change Time Restriction
              </Button>
              </Grid>
              
    </div>
  );
};
export default LineProgress;
