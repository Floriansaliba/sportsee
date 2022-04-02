import React, {useEffect, useState} from "react";
import "./Profil.css"
import { useParams } from "react-router-dom";
import USER_PERFORMANCE from "../../mock/user_performance";
import { fetchData } from "../../API_calls/APIcall";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { fetchPerformanceData } from "../../API_calls/APIcall";


export default function Profil() {

    const {userId} = useParams()
    const [statistics, setStatistics] = useState(null)

    useEffect(()=>{
      fetchPerformanceData(userId, setStatistics)
    }, [])

  /**
   * Transform data received from API in order to use them as input in the radar chart
   * @returns Array of objects representing input data for the radar chart
   */
    function formatData() {
    const dataToUSe = statistics.data.reverse().map((object) => {
      if (object.kind === 1) {
        return {
          kind: 'Cardio',
          value: object.value,
        };
      }
      else if (object.kind === 2) {
        return {
          kind: 'Energy',
          value: object.value,
        };
      }
      else if (object.kind === 3) {
        return {
          kind: 'Endurance',
          value: object.value,
        };
      }
      else if (object.kind === 4) {
        return {
          kind: 'Force',
          value: object.value,
        };
      }
      else if (object.kind === 5) {
        return {
          kind: 'Vitesse',
          value: object.value,
        };
      }
      else if (object.kind === 6) {
        return {
          kind: 'Intensité',
          value: object.value,
        };
      }
      else {
        return false;
      }
    });
    return dataToUSe;
  }


  return (
    <div className="profilchart_container">
      <ResponsiveContainer 
          width="100%"
          height="100%"
      >
        <RadarChart
          outerRadius={75}
          data={statistics && formatData()}
          fill="white"
          stroke="white"
        >
          <PolarGrid radialLines = {false} />
          <PolarAngleAxis 
          dataKey="kind" 
          axisLine = {false}
          tickLine = {false}
          dy={4}
          tick = {{fontSize: 12, fontWeight: 500}}
          />
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
            domain={[0, 'dataMax']}
            stroke = "transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
