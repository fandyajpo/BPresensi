import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LineElement,
  LineController,
  registerables,
} from "chart.js/auto";
import { Bar } from "react-chartjs-2";

// ChartJS.register(...registerables);

const ActivityStatistic = () => {
  return (
    <div className="w-full h-full">
      <Bar
        data={{
          labels: ["Hadir", "Aktiv.lain", "Izin", "Cuti"],
          datasets: [
            {
              label: "Aktivitas Bulan Ini",
              data: [5, 10, 15, 20, 25, 30],
              backgroundColor: [
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
              ],
              borderColor: [
                "rgba(75, 192, 192, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default ActivityStatistic;
