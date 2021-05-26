import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';

function BarChart(props) {

    const data = {
        labels: ['CO2'],
        datasets: [{
            label: '',
            data:[props.percent],
            backgroundColor: ['rgba(241, 28, 14, 0.65)'],
            barPercentage: 0.5,
            barThickness: 100,
            maxBarThickness: 100,
        }]
    }

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 100,
                title: {
                    display: true,
                    text: '%',
                    font: {
                      size: 18,
                    },
                    padding: {top: 20, left: 0, right: 0, bottom: 0}
                },
                lineAtValue: 100,
            },
        },
    }

  return (
    <div className="chart">

        <Bar
            data={data}
            options={options}
            width={200}
            height={400}
        />
    </div>
  );
}

export default BarChart;