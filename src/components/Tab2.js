// src/components/Tab2.js

import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { kmeans } from 'ml-kmeans';
import Papa from 'papaparse';
import clusterCsvJSON from '../services/csv-convert-service';


const Tab2 = () => {

  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    Papa.parse('/data/clusterValues.csv', {
      download: true,
      complete: function (results) {
        const csvData = Papa.unparse(results.data); // Convert parsed data back to CSV string
        clusterCsvJSON(csvData).then(jsonData => {
          console.log(jsonData); // Log the converted JSON data
          const data = jsonData.map(item => [parseFloat(item.x), parseFloat(item.y)]);
          setCsvData(data);
        });
      }
    });
  }, []);

  const additionalData = Array.from({ length: 1000 }, () => [
    Math.random() * 20, // x value
    Math.random() * 20, // y value
  ]);

  const clusters = kmeans(additionalData, 4);
  // console.log(clusters);

  // Map cluster IDs to colors
  const colors = ['red', 'orange', 'yellow', 'blue'];

  const getColor = (y) => {
    if (y < 5) return 'red';
    if (y < 10) return 'orange';
    if (y < 15) return 'yellow';
    // Add more conditions as needed
    return 'blue';
  };


  const getOption = () => {

    return {
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        name: 'X Axis', // Add this line
      },
      yAxis: {
        name: 'Y Axis', // Add this line
      },
      tooltip: {
        trigger: 'item',
        formatter: params => {
          const [x, y] = params.value;
          return `kMeans Clustering<br/>xAxis: ${x.toFixed(2)}<br/>yAxis: ${y.toFixed(2)}`;
        }
      },
      series: [{


        data: [
          [10.0, 8.04],
          [8.0, 6.95],
          [13.0, 7.58],
          [9.0, 8.81],
          [11.0, 8.33],
          [14.0, 9.96],
          [6.0, 7.24],
          [4.0, 4.26],
          [12.0, 10.84],
          [7.0, 4.82],
          [5.0, 5.68],
          ...additionalData,
        ].map((item, index) => {
          let color = 'defaultColor'; // Default color
          //  console.log('colors: item', item, ' index ', index);
          //  console.log('clusters:', clusters.clusters);
          // console.log('clusters.assignments:', clusters && clusters.assignments);
          /// console.log('colors[clusters.assignments[index]]:', colors && clusters && clusters.assignments && colors[clusters.assignments[index]]);
          if (colors) {
            // console.log('index:', clusters[index]);
            color = colors[clusters.clusters[index]]; // Assign color if conditions are met
          }
          return {
            value: item,
            symbolSize: Math.random() * 20,
            itemStyle: {
              color: color,
            },
          };
        }),
        type: 'scatter'
      }]
    };
  };

  return <ReactECharts option={getOption()} style={{ height: '70vh', width: '100%' }} />
};

export default Tab2;