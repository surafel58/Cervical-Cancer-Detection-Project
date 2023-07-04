import {React, useEffect, useState} from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell} from 'recharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import './DataAnalytics.css';
import { toast } from 'react-toastify';
import LoadingIcon from '../LoadingIcon/LoadingIcon';

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

  const COLORS = ['#FF8042', '#0088FE']; // Specify colors for each segment

  const COLORS_cell_condition = ['#47B0AA', '#48B2DE', '#E57872']; // Specify colors for each segment

  const [result, setResult ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lineChartData, setLineChartData] = useState(null);
  const [pieChartPositiveNegative, setPieChartPositiveNegative] = useState(null);
  const [ageDistributionData, setAgeDistributionData] = useState(null);
  const [cancer_Classification_Data, setCancerClassificationData] = useState(null);
  const [cell_condition_data, setCellConditionData] = useState(null);
  
  const fillChartData = (result) => {
    
    const total_test = result.total_test;
    const positive_negative_test = result.test_group;
    // const age_distribution_data_group = result.
    const cancer_classification = result.cancer_classification;
    const cell_condition = result.cell_condition;


    const line_chart_data = [];
    const pie_chart_data_p_n = [];
    // const age_distribution_data = [];
    
    const cancer_classification_data = [];
    const cell_condition_data = [];

    for(let key in total_test){

        line_chart_data.push({
            Year : Number(key),
            totalCases : total_test[key]
        });

    }

    setLineChartData(line_chart_data);

    
    pie_chart_data_p_n.push({
            name : 'Positive',
            value : positive_negative_test.total_positive
     
    });

    pie_chart_data_p_n.push({
        name : 'Negative',
        value : positive_negative_test.total_negative
 
    });

    setPieChartPositiveNegative(pie_chart_data_p_n);


    cancer_classification_data.push({

        name : 'High squamous intra-epithelial lesion',
        value: cancer_classification.HSIL
    });

    
    cancer_classification_data.push({

        name : 'Squamous cell carcinoma',
        value: cancer_classification.SCC
    })

    cancer_classification_data.push({

        name : 'Negative for Intraepithelial malignancy',
        value: cancer_classification.NIM
    })
    
    cancer_classification_data.push({
        
        name : 'Low squamous intra-epithelial lesion',
        value: cancer_classification.LSIL
    })
    
    setCancerClassificationData(cancer_classification_data);
    
    cell_condition_data.push({
        name: 'Normal',
        value: cell_condition.normal
    })

    
    cell_condition_data.push({
        name: 'Pre-cancerous',
        value: cell_condition.precancerous
    })

    cell_condition_data.push({
        name: 'Cancerous',
        value: cell_condition.cancerous
    });

    setCellConditionData(cell_condition_data);





}
    
    


  useEffect(() => {

    setIsLoading(true);
    try {
        const response = fetch("http://localhost:5000/api/data-analytics", {
        method : "GET"})

        .then((response) => {

            if(response.ok){

                response.json().then(result => {
                    setResult(result);
                    setIsLoading(false);

                    fillChartData(result);
                })
            }
            else{
                toast.error(result);
                setIsLoading(false)
            }
        })

    }
    catch (error) {
        setIsLoading(false);
        toast.error(error.message);
    }

  }, []);


  return (
      <div id='dataAnalytics_container'>
        <LoadingIcon color={"rgb(67, 166, 255)"} visible={isLoading} height={"80"} width={"80"} radius={1}/>    
        { result && (<><header>
            <h1>Data Analytics Dashboard</h1>
        </header>
        
        <div className="dashboard">
            <div className="chart-item">
                <h2 className="chart-title">Total Cervical Cancer Cases</h2>
                <div className='chart_g'>
                    <LineChart width={600} height={400} data={lineChartData}>
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
                data={pieChartPositiveNegative}
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
                data={cell_condition_data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#E57872"
                label
            >
                {cell_condition_data.map((entry, index) => (
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
                <Pie dataKey="value" nameKey="name" data={cancer_Classification_Data} cx="50%" cy="50%" outerRadius={120} fill="#8884d8">
                    {cancer_Classification_Data.map((entry, index) => (
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
        </div></>)}

        { !result && (<div style={{ width: "100vh", height: "100vh", backgroundColor: "transparent"}}></div>)}
    </div>
  );
}


export default DataAnalytics;