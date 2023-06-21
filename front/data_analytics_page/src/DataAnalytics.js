import {React} from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell , ResponsiveContainer} from 'recharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import './css/DataAnalytics.css';

//function to get current date and formatted to dd-mm-yy
const getCurrentDate = () => {
    const currentDate = new Date();
    const time = currentDate.getHours().toString();
    const day = String(currentDate.getDate()).padStart(2, '0').toString();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0').toString();
    const year = String(currentDate.getFullYear()).slice(-2).toString();

    const formattedDate = `${day}-${month}-${year}-${time}`;
    return formattedDate;
    
};

//function to export data
const exportReport = () => {
  const graphContainer = document.getElementsByClassName('dashboard')[0];

  html2canvas(graphContainer, { scale: 2 }) // Set the scale option to 2 for better resolution
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg', 0.7); // Use JPEG format with 70% quality

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save('data-analytics-report-' + getCurrentDate() + '.pdf');
    })
    .catch((error) => {
      console.error('Error exporting report:', error);
    });
};


const DataAnalytics = () => {
  // Larger fake data
  const data = [
    { Year: 2019, totalCases: 1000, positiveCases: 300, negativeCases: 700, ageGroup: '10-25', cellCondition: 'Normal', cancerClassification: 'Negative for Intraepithelial malignancy' },
    { Year: 2020, totalCases: 1500, positiveCases: 400, negativeCases: 1100, ageGroup: '26-41', cellCondition: 'Cancerous', cancerClassification: 'High squamous intra-epithelial lesion' },
    { Year: 2021, totalCases: 2000, positiveCases: 500, negativeCases: 1500, ageGroup: '42-57', cellCondition: 'Precancerous', cancerClassification: 'Low squamous intra-epithelial lesion' },
    { Year: 2022, totalCases: 1800, positiveCases: 600, negativeCases: 1200, ageGroup: '58-63', cellCondition: 'Cancerous', cancerClassification: 'High squamous intra-epithelial lesion' },
    { Year: 2023, totalCases: 2000, positiveCases: 800, negativeCases: 1200, ageGroup: '64+', cellCondition: 'Cancerous', cancerClassification: 'Squamous cell carcinoma' }
  ];

  //pie chart color for total negative and total positive cases 
  const negative_positive_data = [
    { name: 'Positive', value: 150 },
    { name: 'Negative', value: 350 },
  ];
  
  const COLORS = ['#FF8042', '#0088FE']; // Specify colors for each segment

// Get data for Cell condition pie chart
  const cellConditionData = [
    { name: 'Normal', value: data.filter(item => item.cellCondition === 'Normal').length },
    { name: 'Cancerous', value: data.filter(item => item.cellCondition === 'Cancerous').length },
    { name: 'Precancerous', value: data.filter(item => item.cellCondition === 'Precancerous').length },
  ];

  const COLORS_cell_condition = ['#47B0AA', '#48B2DE', '#E57872']; // Specify colors for each segment



  // Get data for Cancer classification pie chart
  const cancerClassificationData = [
    { name: 'Squamous cell carcinoma', value: data.filter(item => item.cancerClassification === 'Squamous cell carcinoma').length },
    { name: 'High squamous intra-epithelial lesion', value: data.filter(item => item.cancerClassification === 'High squamous intra-epithelial lesion').length },
    { name: 'Negative for Intraepithelial malignancy', value: data.filter(item => item.cancerClassification === 'Negative for Intraepithelial malignancy').length },
    { name: 'Low squamous intra-epithelial lesion', value: data.filter(item => item.cancerClassification === 'Low squamous intra-epithelial lesion').length },
  ];

  return (
    <div id='dataAnalytics_container'>
        <header>
            <h1>Data Analytics Dashboard</h1>
        </header>
        
        <div className="dashboard">
            <div className="chart-item">
                <h2 className="chart-title">Total Cervical Cancer Cases</h2>
                <div className='chart_g'>
                    <LineChart width={600} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalCases" stroke="#8884d8" />
                    </LineChart>
                </div>
            </div>

        <div className="chart-item">
            <h2 className="chart-title">Positive vs Negative Cases</h2>
            <div className='chart_g'>
            <PieChart width={400} height={300}>
            <Pie
                data={negative_positive_data}
                cx={200} // Center x-coordinate of the pie chart
                cy={150} // Center y-coordinate of the pie chart
                innerRadius={60} // Inner radius of the pie chart (creates a donut chart effect)
                outerRadius={100} // Outer radius of the pie chart
                fill="#8884d8" // Color for the whole pie chart
                paddingAngle={1} // Spacing between segments
                dataKey="value" // Property in data array to determine segment values
            >
                {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip /> {/* Display tooltip on hover */}
            <Legend verticalAlign="bottom" align="center" /> {/* Display legend at the bottom */}
            </PieChart>
            </div>
        </div>

        <div className="chart-item">
            <h2 className="chart-title">Age Group Distribution of Cases</h2>
            <div className='chart_g'>
                <BarChart width={600} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ageGroup" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalCases" fill="#8884d8" />
                </BarChart>
            </div>
        </div>

        <div className="chart-item">
            <h2 className="chart-title">Age Group Distribution of Positive and Negative Cases</h2>
            <div className='chart_g'>
                <BarChart width={600} height={400} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ageGroup" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="positiveCases" fill="#8884d8" />
                <Bar dataKey="negativeCases" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>


        <div className="chart-item">
            <h2 className="chart-title">Cell Condition Distribution</h2>
            <div className='chart_g'>
            <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={cellConditionData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#E57872"
                label
            >
                {cellConditionData.map((entry, index) => (
                <Cell key={index} fill={COLORS_cell_condition[index % COLORS_cell_condition.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend/>
            </PieChart>
            </div>
        </div>

        <div className="chart-item">
            <h2 className="chart-title">Cancer Classification Distribution</h2>
            <div className='chart_g'>
                <PieChart width={400} height={400}>
                <Pie dataKey="value" nameKey="name" data={cancerClassificationData} cx="50%" cy="50%" outerRadius={120} fill="#8884d8">
                    {cancerClassificationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`#${index * 599}`} />
                    ))}
                </Pie>
                <Tooltip/>
                <Legend/>
                </PieChart>
            </div>
        </div>
        </div>
        
        {/* button to export report */}
        <div className="export-report">
            <button onClick={exportReport}>Export Report</button>
        </div>
    </div>
  );
}


export default DataAnalytics;