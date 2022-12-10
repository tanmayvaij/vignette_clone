import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = { 
    indexAxis: 'y', // Changing the index axis to y for converting to horizontal chart 
    scales: {
        y: {
            ticks: {
                font: {
                    weight: "bold" //this change the font size
                }
            }
        }
    }
}

const data = {

    // list of labels / values on the y axis
    labels: [
        ['Average', '4.11'], 
        ['Self', '4.00'], 
        ['Supervisors', '5.00'], 
        ['Peers', '4.00'],
        ['Direct Reports', '4.00']
    ],

    datasets: [
        {

            // name of Chart
            label: 'Distribution',

            // list of data to be plotted on x-axis
            data: [ 4.11, 4.00, 5.00, 4.00, 4.00 ],

            // background colors of all the bars respectively
            backgroundColor: [
                'rgba(27, 25, 25, 0.77)',
                'rgba(91, 203, 243, 1)',
                'rgba(254, 97, 97, 1)',
                'rgba(24, 204, 0, 1)',
                'rgba(243, 170, 1, 1)'
            ],

            // width of each bar in %
            barPercentage: 0.6,

        }
    ]

}

const BarChart = () => {
    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart
