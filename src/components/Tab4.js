// src/components/Tab4.js

import React from 'react';
import ReactECharts from 'echarts-for-react';

const Tab4 = () => {
  const getOption = () => {
    return {
        xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }],
          yAxis: [{
            type: 'category',
            data: ['Morning', 'Afternoon', 'Evening']
          }],
          visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '0%'
          },
      series: [{
        type: 'heatmap',
        data: [
          [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0],
          [1, 0, 2], [1, 1, 3], [1, 2, 1], [1, 3, 4], [1, 4, 2], [1, 5, 5],
          [2, 0, 4], [2, 1, 1], [2, 2, 2], [2, 3, 3], [2, 4, 4], [2, 5, 1],
          [1, 0, 2], [1, 1, 3], [1, 2, 1], [1, 3, 4], [1, 4, 2], [1, 5, 5],
          [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0],
        ], // sample data
        label: {
          show: true
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };
  };

  return <ReactECharts option={getOption()} style={{height: '500px', width: '100%'}} />

  
}

export default Tab4;