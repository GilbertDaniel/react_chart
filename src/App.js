import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';

function App() {
  var data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
        labels: {
            fontSize: 25,
        },
    },
}
  return (
    <div className="App">
      <h1>Data Visualization with React and Chart.js</h1>
      <BarChart data={data} options={options}/>
      <DoughnutChart data={data} options={options}/>
      <LineChart data={data} options={options}/>

    </div>
  );
}

export default App;
