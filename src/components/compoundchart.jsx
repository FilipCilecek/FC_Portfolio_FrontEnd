import React from 'react';
import { Line } from 'react-chartjs-2';

const CompoundChart = ({ sendInvested, sendCompounded, sendYears }) => {
  let years_array = [];
  for (let i = 0; i < sendYears; i++) {
    years_array[i] = i + 1;
  }

  let data = {
    labels: years_array,
    datasets: [
      {
        label: 'Investováno',
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: sendInvested,
      },
      {
        label: 'Zůrokováno',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        data: sendCompounded,
      },
    ],
  };

  return (
    <div className='chart'>
      <Line data={data} />
    </div>
  );
};

export default CompoundChart;
