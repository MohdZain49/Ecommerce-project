import styles from "./Dashboard.module.css";

import { CiSearch } from "react-icons/ci";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { ProgressBar, WidgetCard, TopTransactions } from "../../../index";
import { useSelector } from "react-redux";

function Dashboard() {
  const adminDashboard = useSelector((store) => store.dashboard);
  const [
    widgets,
    dashboardBarChart,
    inventoriesProgressBars,
    gender,
    topTransactions,
  ] = adminDashboard;

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.searchBar}>
        <CiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search for data, users and docs"
          className={styles.searchInput}
        />
      </div>

      <section className={styles.widgetsSection}>
        {widgets.map((widget) => (
          <WidgetCard
            key={widget.id}
            heading={widget.heading}
            value={widget.value}
            percentage={widget.percentage}
            color={widget.color}
          />
        ))}
      </section>

      <section className={styles.graphSection}>
        <div className={styles.dashboardGraphContainer}>
          <h3 className={styles.graphHeading}>Revenue and Transaction</h3>
          <BarChart
            xAxis={dashboardBarChart.xAxis}
            series={dashboardBarChart.series}
            width={dashboardBarChart.width}
            height={dashboardBarChart.height}
          />
        </div>
        <div className={styles.dashboardInventoryContainer}>
          <h3 className={styles.graphHeading}>Inventory</h3>
          {inventoriesProgressBars.map((Bar) => (
            <ProgressBar key={Bar.id} Bar={Bar} />
          ))}
        </div>
      </section>

      <section className={styles.genderTransactionSection}>
        <div className={styles.genderGraphContainer}>
          <h3 className={styles.genderGraphHeading}>Gender</h3>
          <PieChart
            className={styles.genderGraph}
            series={[{ data: gender.data, innerRadius: 70, outerRadius: 78 }]}
            width={gender.size.width}
            height={gender.size.height}
          >
            <PieCenterLabel>Gender</PieCenterLabel>
          </PieChart>
        </div>
        <TopTransactions topTransactions={topTransactions} />
      </section>
    </div>
  );
}

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default Dashboard;
