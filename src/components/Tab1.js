// Code for the first tab of the application

import React from 'react';
import ReactECharts from 'echarts-for-react';


const Tab1 = () => {
  const getOption = () => {
    return {
      grid:{
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          stack: 'total'
        },
        {
          data: [220, 180, 190, 90, 70, 210, 230],
          type: 'bar',
          stack: 'total'
        }
      ]
    };
    
  };

  return  <ReactECharts option={getOption()} style={{ height: '500px', width: '100%' }} />
};

export default Tab1;