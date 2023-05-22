import React from "react";
import "../style/Dashboard.css";
import SingleCard from "../Components/Reuseable/SingleCard";
import MileChart from "../Assest/charts/MileCharts";
import CarStatsChart from "../Assest/charts/CarStatsChart";
import RecommendeCar from "../Components/UI/RecommendeCar";
import recomendedCars from '../Assest/dummy-data/recomendedCars'
const carObj = {
  title: "Total Cars",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Daily Trips",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__car">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Mile Stats</h3>
            <MileChart />
          </div>

          {/*  */}
          <div className="stats">
            <h3 className="stats__title">Car Stats Chart</h3>
            <CarStatsChart />
          </div>
        </div>

        {/*  */}

        <div className="recomend__cars-wrapper">
          {recomendedCars.map((item) => (
            <RecommendeCar item={item} key={item.id} />
          ))}
        </div>
        {/*  */}
       
      </div>
    </div>
  );
};

export default Dashboard;
