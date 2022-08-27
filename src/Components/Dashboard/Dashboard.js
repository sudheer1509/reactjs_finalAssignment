import React, { useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import Chart from "react-apexcharts";

export default function Dashboard() {
  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((res) => {
        localStorage.setItem("apidata", JSON.stringify(res.data));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const dashboardPage = JSON.parse(
    localStorage.getItem("apidata")
  ).dasbhoardPage;
  const featured = dashboardPage.latestHits.featured;
  const latest = dashboardPage.latestHits.latest;
  const popular = dashboardPage.latestHits.popular;
  const months = dashboardPage.latestHits.months;
  const performance = dashboardPage.performance;
  const storage = dashboardPage.storage;
  const notifications = dashboardPage.notifications;
  const orders = dashboardPage.orders;
  console.log(performance);
  const latestHitsProps = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: months,
      },
      yaxis: {
        categories: [10, 20, 30, 40, 50, 60, 70, 80, 90],
      },
    },
    series: [
      {
        name: "latest",
        data: latest,
      },
      {
        name: "popular",
        data: popular,
      },
      {
        name: "featured",
        data: featured,
      },
    ],
  };
  const performanceKeys = Object.keys(performance);
  const performanceValues = Object.values(performance);
  const performanceProps = {
    options: {
      series: [
        {
          data: performanceValues,
        },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: performanceKeys,
      },
    },
  };

  const storagekeys = Object.keys(storage);
  const storagevalues = Object.values(storage);
  const storageProps = {
    options: {
      series: storagevalues,
      chart: {
        width: 380,
        type: "pie",
      },
      labels: storagekeys,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="dcontainer">
      <div className="row">
        <div className="col-lg-6 ">
          <div className="box1">
            <div className="chartTitle">Latest Hits</div>
            <Chart
              options={latestHitsProps.options}
              series={latestHitsProps.series}
              type="line"
              width="500"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box1">
            <div className="chartTitle">Performance</div>
            <Chart
              options={performanceProps.options}
              series={performanceProps.options.series}
              type="bar"
              width="500"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="box1">
            <div className="chartTitle">Performance</div>
            <Chart
              options={storageProps.options}
              series={storageProps.options.series}
              type="pie"
              width="500"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="box1">
            <div className="chartTitle">Notification List</div>
            <div className="box2">
              {notifications.map((item) => (
                <div className="notificationBox">
                  <div className="notificationImage">
                    <img src={item.pic} alt="notificationImage" />
                  </div>
                  <div className="notificationText">
                    <div className="notificationContent">{item.message}</div>
                    <div className="notificationTime">{`${item.time} ago`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="orderListContainer">
            {orders && orders.length !== 0 ? (
              <div>
                <div className="orderListTitle">Orders List</div>
                <table>
                  <thead>
                    <tr className="ordersTheadtr">
                      <th>ORDER NO.</th>
                      <th>STATUS</th>
                      <th>OPERATORS</th>
                      <th>LOCATION</th>
                      <th>DISTANCE</th>
                      <th>START DATE</th>
                      <th>EST DELIVERY DUE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item) => (
                      <tr key={item.orderNo} className="ordersTbodytr">
                        <td>{item.orderNo}</td>
                        <td>{item.status}</td>
                        <td>{item.operators}</td>
                        <td>{item.location}</td>
                        <td>{item.distance}</td>
                        <td>{item.startDate}</td>
                        <td>{item.deliveryDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
