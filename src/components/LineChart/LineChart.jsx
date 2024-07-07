// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

// eslint-disable-next-line react/prop-types
const LineChart = ({ historicalData }) => {

    const [data, setData] = useState([["Date", "Prices"]]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices"]];
        // eslint-disable-next-line react/prop-types
        if (historicalData?.prices) {
            // eslint-disable-next-line react/prop-types
            historicalData?.prices.map((item) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
            })
            setData(dataCopy);
        }
    }, [historicalData])

    return (
        <Chart
            chartType='LineChart'
            data={data}
            height="100%"
            legendToggle
        ></Chart>
    );
};

export default LineChart;