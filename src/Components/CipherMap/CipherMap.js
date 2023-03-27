import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Heading from "../Fonts/Heading";

function CipherMap() {
  return (
    <div className="py-4">
      <div className="py-4">
        <Heading text="Cipher Map" />
      </div>

      <CalendarHeatmap
        startDate={new Date("2016-01-01")}
        endDate={new Date("2017-01-01")}
        values={[
          { date: "2016-01-01", count: 12 },
          { date: "2016-01-22", count: 122 },
          { date: "2016-01-30", count: 38 },
          // ...and so on
        ]}
      />
    </div>
  );
}

export default CipherMap;
