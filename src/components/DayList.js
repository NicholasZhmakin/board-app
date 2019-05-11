import React from "react";
import Day from "./Day";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const DayList = ({ days }) => {
  const dayList = days.length ? (
    days.map(day => {
      return <Day key={day.dayId} day={day} />;
    })
  ) : (
    <Grid item xs={12}>
      <Typography
        variant="h4"
        align="center"
        style={{ color: "white" }}
        gutterBottom
      >
        Please add some days.
      </Typography>
    </Grid>
  );

  return (
    <Grid container spacing={24} style={{ padding: "3rem" }}>
      {dayList}
    </Grid>
  );
};
export default DayList;
