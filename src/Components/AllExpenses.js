import React from 'react'
import DonutChart from 'react-donut-chart';

const AllExpenses = () => {
    const chartData = [
        {
            label: "Bills",
            value: 20,
            color: "purple"
        },
        {
            label: "Entertainment",
            value: 12,
            color: "orange"
        },
        {
            label: "Clothes",
            value: 15,
            color: "red"
        },
        {
            label: "Health",
            value: 20,
            color: "blue"
        },
        {
            label: "Education",
            value: 12,
            color: "yellow"
        },
        {
            label: "Other",
            value: 15,
            color: "green"
        }
    ]
    const bgColors = ["purple", "orange", "red", "blue", "yellow", "green"]
    const handleClick = (item, toggled) => {
        console.log(item);
        console.log(toggled);
    }
    const addShadow = (item) => {

    }
  return (
    <div className='mx-auto col-12 col-lg-6'>
        <div className=''>
            <p className='fw-bold'>All expenses <span className='float-end'>--</span></p>
        </div>
        <DonutChart data={chartData} colors={bgColors} innerRadius="0.84" onClick={(item, toggled) => handleClick(item, toggled)} width={450} onMouseEnter={(item) => addShadow(item)} />
    </div>
  )
}

export default AllExpenses;