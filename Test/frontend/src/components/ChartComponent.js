import React, { useEffect} from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
    //const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/api/sampledata');
            const jsonData = await response.json();
            //setData(jsonData);
            plotChart(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const plotChart = (data) => {
        const timestamps = data.map(entry => new Date(entry.ts));
        const machineStatus = data.map(entry => entry.machine_status);

        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: timestamps,
                datasets: [{
                    label: 'Machine Status',
                    data: machineStatus,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: { unit: 'second' },
                        scaleLabel: { display: true, labelString: 'Time' }
                    }],
                    yAxes: [{
                        ticks: { beginAtZero: true },
                        scaleLabel: { display: true, labelString: 'Machine Status' }
                    }]
                }
            }
        });
    };

    return (
        <div>
            <canvas id="myChart" width="800" height="400"></canvas>
        </div>
    );
};

export default ChartComponent;
