// src/components/Tab3.js

import React from 'react';
import ReactECharts from 'echarts-for-react';

const Tab3 = () => {
  const getOption = () => {
    return {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'line',
        areaStyle: {}
      }]
    };
  };

  return  <ReactECharts option={getOption()} style={{ height: '500px', width: '100%' }} />
};

export default Tab3;