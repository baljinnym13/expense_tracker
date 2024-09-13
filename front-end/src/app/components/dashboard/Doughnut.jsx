import { Doughnut } from "react-chartjs-2";

const DoughnurChart = ({ categoryData }) => {
  const data2 = {
    datasets: [
      {
        data: [10, 10, 20, 40, 20],

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: ["Food", "Tech", "Taxi", "Health", "Car"],
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-3/4 w-3/4 p-4 bg-white card ">
      <div className="h-full w-full ">
        <Doughnut className="flex " options={options2} data={data2} />
      </div>
    </div>
  );
};

export default DoughnurChart;

{
  /* {categoryData && <Doughnut options={options2} data={data2} />}
        {!categoryData && (
          <div className="flex items-center justify-center w-full h-full gap-4">
            <div className="w-24 h-24 rounded-full skeleton"></div>
          </div>
        )} */
}
