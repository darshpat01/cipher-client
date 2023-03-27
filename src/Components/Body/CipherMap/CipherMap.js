import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import Heading from "../../Fonts/Heading";
import "./CipherMap.css";

function CipherMap() {
  return (
    <div className="py-4">
      <div className="py-4">
        <Heading text="Cipher Map" />
      </div>
      <div>
        <CalendarHeatmap
          startDate={new Date("2016-01-01")}
          endDate={new Date("2017-01-01")}
          values={[
            { date: "2016-01-01", count: 1 },
            { date: "2016-01-22", count: 1 },
            { date: "2016-01-30", count: 1 },
            // ...and so on
          ]}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-scale-${value.count}`;
          }}
        />
      </div>
    </div>
  );
}

export default CipherMap;
