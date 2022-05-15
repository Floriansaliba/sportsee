import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./Durations.css"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import PropTypes from 'prop-types';
import { fetchAverageSession, fetchData } from "../../API_calls/APIcall";



export default function App() {

  const {userId} = useParams()
  const [statistics, setStatistics] = useState(null)

  useEffect(()=>{
    fetchData(userId, setStatistics, "average-sessions")
  }, [])

  /**
   * Transform data received from API in order to use them as input in the line chart
   * @returns Array of objects representing input data for the line chart
   */

  function formatData() {
    const dataToUse = statistics.map((data) => {
      // switch à tester 
      if (data.day === 1) {
        return {
          day: "L",
          sessionLength: data.sessionLength,
        };
      }
      else if (data.day === 2) {
        return {
          day: "M",
          sessionLength: data.sessionLength,
        };
      }
      else if (data.day === 3) {
        return {
          day: "M",
          sessionLength: data.sessionLength,
        };
      }
      else if (data.day === 4) {
        return {
          day: "J",
          sessionLength: data.sessionLength,
        };
      }
      else if (data.day === 5) {
        return {
          day: "V",
          sessionLength: data.sessionLength,
        };
      }
      else if (data.day === 6) {
        return {
          day: "S",
          sessionLength: data.sessionLength,
        };
      }
      else if (data.day === 7) {
        return {
          day: "D",
          sessionLength: data.sessionLength,
        };
      }
      else {
        return undefined;
      }
    });
    return dataToUse;
  }

const CustomTooltip = ({ active, payload}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-duration">
        <p className="duration-label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltip.propTypes = {
  active : PropTypes.bool,
  payload : PropTypes.array
 }



console.log(statistics)
  return (
    <div className="linechart_container">
      <h2 className="duration_title">Durée moyenne des sessions</h2>
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <LineChart
        data={statistics && formatData()}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid horizontal={false} vertical={false} strokeDasharray="4 4" fill = "#E60000"/>
        <XAxis interval="preserveStartEnd"  dataKey="day" tickLine={false} mirror={true} tick={{stroke: '#FFFFFF', strokeWidth: 0.5, mixBlendMode : "normal", fontSize : "12px"}} />
        <YAxis hide={true} dataKey="sessionLength" padding={{top : 80, bottom : 50}} />
        <Tooltip content={<CustomTooltip />} cursor={{stroke : "rgba(0, 0, 0, 0.1)", strokeWidth : 79}} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          dot={false}
          activeDot = {{stroke : "rgba(255, 255, 255, 0.198345)", strokeWidth : "10px", r: 5}}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}


