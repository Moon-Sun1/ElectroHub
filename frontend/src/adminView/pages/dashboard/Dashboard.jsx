// DashboardCards.jsx
import { FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";
import DashboardCard from "./DashboardCard";

const barData = [
  { value: 2 },
  { value: 6 },
  { value: 4 },
  { value: 9 },
  { value: 8 },
];
const lineData = [
  { value: 2 },
  { value: 1 },
  { value: 6 },
  { value: 5 },
  { value: 8 },
];

// ... existing code ...

// Add this data at the top of your file
const monthlySpentData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 80 },
  { month: "Mar", value: 40 },
  { month: "Apr", value: 60 },
  { month: "May", value: 30 },
  { month: "Jun", value: 100 },
  { month: "Jul", value: 50 },
  { month: "Aug", value: 70 },
  { month: "Sep", value: 35 },
  { month: "Oct", value: 90 },
  { month: "Nov", value: 20 },
  { month: "Dec", value: 40 },
];
const earningData = [{ value: 7 }, { value: 9 }, { value: 5 }];

const mainGreenColor = "#088178";
const maxBar = 10; // The maximum value for the faded // Replace with your main green color
const chartAnimationTime = 1500; // Animation duration in milliseconds



export default function Dashboard() {
  return (
    <div className="w-full h-full grid grid-cols-1 gap-4 px-2 py-2 md:w-[85%] lg:w-full lg:grid-cols-6 lg:gap-4 lg:px-6 lg:py-3 lg:rounded-lg lg:shadow-sm">
      <DashboardCard style="col-span-1 md:col-span-1 lg:col-span-3 flex items-center justify-between">
        <div className="h-full flex justify-center flex-col gap-1 text-bold">
          <h4 className="text-gray-400 ">spent this month</h4>
          <h6 className="text-2xl font-bold text-gray-800">$682.5</h6>
        </div>
        <div className="w-20 h-[70px] flex items-center relative">
          <ResponsiveContainer
            width="100%"
            height="100%"
            className={"absolute top-0 left-0 w-full h-full"}
          >
            <BarChart
              data={barData}
              margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
              className="flex items-center justify-center"
            >
              {/* Inactive (background) bars */}
              <Bar
                dataKey={() => maxBar}
                fill="#E0E7FF"
                radius={[6, 6, 10, 10]}
                isAnimationActive={false}
                className="cursor-pointer"
                barSize={7}
                
              />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barData}
              margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
              className="flex items-center justify-center"
            >
              {/* Active (foreground) bars */}
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#088178" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#14B8A6" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <Bar
                dataKey="value"
                fill="url(#colorGradient)"
                barSize={7}
                radius={[6, 6, 10, 10]}
                animationDuration={chartAnimationTime}
                className="cursor-pointer"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </DashboardCard>

      {/* New Clients Card */}
      <DashboardCard style="col-span-1 lg:col-span-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-full p-4">
            <FaUsers className="text-3xl" />
          </div>

          <div className="h-full flex flex-col gap-1 text-bold">
            <h4 className="text-gray-400 ">New clients</h4>
            <h6 className="text-2xl font-bold text-gray-800">321</h6>
          </div>
        </div>
        <div className="w-20 h-[70px] flex items-start">
          <ResponsiveContainer width="100%" height="100%">
            <defs>
              <linearGradient id="tealGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#0D9488" stopOpacity={1} />{" "}
                {/* teal-600 */}
                <stop offset="100%" stopColor="#99F6E4" stopOpacity={1} />{" "}
                {/* teal-200 */}
              </linearGradient>
            </defs>
            <LineChart data={lineData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={false}
                animationDuration={chartAnimationTime}
                className="cursor-pointer"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </DashboardCard>

      {/*Earning Card */}

      <DashboardCard style="col-span-1 lg:col-span-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gray-100 text-white rounded-full flex items-center justify-center">
            <ResponsiveContainer width="40%" height="60%">
              <BarChart
                data={earningData}
                margin={{ top: 0, right: 0, left: 0, bottom: 4 }}
              >
                {/* Inactive (background) bars */}
                <Bar
                  dataKey="value"
                  fill={mainGreenColor}
                  radius={[6, 6, 6, 6]}
                  isAnimationActive={true}
                  className="cursor-pointer"
                  barSize={5}
                  animationDuration={chartAnimationTime}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="h-full flex flex-col gap-1 text-bold">
            <h4 className="text-gray-400 ">New clients</h4>
            <h6 className="text-2xl font-bold text-gray-800">321</h6>
          </div>
        </div>
      </DashboardCard>

      {/* Activity Card */}
      <DashboardCard style="col-span-1 lg:col-span-3 flex items-center justify-between bg-gradient-to-r from-teal-400 to-teal-600 text-white">
        <div className="h-full flex justify-center flex-col gap-1 text-bold">
          <h4 className="text-gray-100 font-semibold ">Activity</h4>
          <h6 className="text-2xl font-bold text-white">$540.50</h6>
        </div>
        <div className="w-20 h-[70px] flex items-start">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#fff"
                strokeWidth={3}
                dot={false}
                animationDuration={chartAnimationTime}
                className="cursor-pointer"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </DashboardCard>

      {/* Uncomment the following sections if you want to include them in your dashboard */}

      <DashboardCard style="col-span-1 lg:col-span-4 flex flex-col justify-between h-[100vh]">
        <div>
          <h4 className="text-gray-400 text-sm mb-1">Total Spent</h4>
          <h2 className="text-4xl font-bold text-gray-900">$682.5</h2>
        </div>
        <div className="w-full h-48 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlySpentData}
              margin={{ top: 10, right: 10, left: 10, bottom: 5 }}
              barCategoryGap={8}
            >
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ dy: 12, fontSize: 12 }}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  borderRadius: 8,
                  background: "#fff",
                  color: " #000",
                }}
                itemStyle={{ color: "#666", fontWeight: 500 }}
                labelStyle={{ display: "none" }}
                formatter={(value) => [`$${value}`, "Spent"]}
              />
              <Bar
                dataKey="value"
                fill="#E0E7FF"
                barSize={28}
                radius={[8, 8, 8, 8]}
                animationDuration={chartAnimationTime}
                activeBar={{ fill: "#088178" }}
                className="cursor-pointer"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </DashboardCard>
    </div>
  );
}
