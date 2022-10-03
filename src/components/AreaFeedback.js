import React from 'react'
import Chart from "react-google-charts";

const chart_array=[1,2,3,4,5,6,7,8,9]
const pieOptions = {
    is3D: true,
    top:'50%',
    width: 120,
    height: 120,
    borderRadius:'15px',
    slices: [
        {
            color: 'red',
        },
        {
            color: 'green',
        }
      
    ],
    legend: "none"
    ,
    tooltip: 
    {
        text:'percentage',
        isHtml: true,
        fontSize:'10px'
    },
    chartArea: {
        width: '75%',
        height: '75%',
    },
    fontName: 'Roboto',
    fontSize: 20,
}

function AreaFeedback() {
  return (
    <div className='container'>
        <h3>  Area Feedback  Status </h3>
        <h3 className='w-100 mb-4 text-center green_text'>
        Distric 3 Devision
        </h3>

        <div className='cart_cards blu_bg pt-5 pb-4 px-3 d-flex align-items-center justify-content-center flex-wrap'>
            {
                chart_array.map((item,index)=>(

            <div className='chart_card text-wrap my-3 p-2'>
                <h5>Kuppiyawatte - East Hospital sq.</h5>
                <div className='chart d-flex align-items-center justify-content-center'>
                <Chart
                className='cart_file'
                    width="90%"
                    height="90%"
                    chartType="PieChart"
                    color="#829ce9"
                    loader={<div>Loading Pie Chart</div>}
                    // getDatafromArray chart_array
                    data={[
                        ['Student', 'visit','full'],
                        ['A', 80,67],
                        ['B', 90, 47],
                    ]}
                    options={
                        pieOptions
                    }
                />
                </div>
            </div>
                ))
            }
        </div>

        <div className='my-4 d-flex align-items-center justify-content-evenly'>
            <div className='legend-left d-flex align-items-center justify-content-evenly'>
                <span style={{width:"40px",height:"10px",backgroundColor:"green"}}></span>
                <div className="ps-md-4">Positive <br/> Feedback  </div>
            </div>
            <div className='legend-right d-flex align-items-center justify-content-evenly'>
            <span style={{width:"40px",height:"10px",backgroundColor:"red"}}></span>
                <div className="ps-md-4">Negative <br/> Feedback  </div>
            </div>
        </div>


    </div>
  )
}

export default AreaFeedback