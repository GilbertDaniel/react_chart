import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({data, options}) => {
  return (
    <div>
      <Doughnut
        data={data}
        height={400}
        options={options}

      />
    </div>
  )
}

export default DoughnutChart