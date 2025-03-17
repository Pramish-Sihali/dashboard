"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Create a component to display the audience segmentation analysis
const AudienceSegmentationDashboard = () => {
  // State to control active tab
  const [activeTab, setActiveTab] = useState("demographic");

  // Mock data based on our analysis
  const demographicData = [
    {
      name: "Female, 25-34",
      reelPercentage: 17.4,
      overallPercentage: 12.52,
      difference: 4.88,
    },
    {
      name: "Male, 45-54",
      reelPercentage: 10.72,
      overallPercentage: 8.64,
      difference: 2.08,
    },
    {
      name: "Female, 35-44",
      reelPercentage: 19.9,
      overallPercentage: 18.62,
      difference: 1.28,
    },
    {
      name: "Female, 65+",
      reelPercentage: 5.75,
      overallPercentage: 5.66,
      difference: 0.08,
    },
    {
      name: "Male, 55-64",
      reelPercentage: 3.03,
      overallPercentage: 3.12,
      difference: -0.09,
    },
    {
      name: "Male, 25-34",
      reelPercentage: 26.26,
      overallPercentage: 26.8,
      difference: -0.54,
    },
    {
      name: "Male, 35-44",
      reelPercentage: 5.74,
      overallPercentage: 9.84,
      difference: -4.11,
    },
  ];

  const countryData = [
    {
      name: "United Kingdom",
      reelPercentage: 3.44,
      overallPercentage: 0.89,
      difference: 2.55,
    },
    {
      name: "Saudi Arabia",
      reelPercentage: 5.15,
      overallPercentage: 2.87,
      difference: 2.29,
    },
    {
      name: "Qatar",
      reelPercentage: 2.87,
      overallPercentage: 1.1,
      difference: 1.77,
    },
    {
      name: "Kuwait",
      reelPercentage: 1.93,
      overallPercentage: 0.39,
      difference: 1.54,
    },
    {
      name: "Bhutan",
      reelPercentage: 2.42,
      overallPercentage: 0.95,
      difference: 1.47,
    },
    {
      name: "United States",
      reelPercentage: 59.7,
      overallPercentage: 72.67,
      difference: -12.97,
    },
    {
      name: "Netherlands",
      reelPercentage: 6.37,
      overallPercentage: 8.09,
      difference: -1.73,
    },
  ];

  const engagementData = [
    { name: "३ महिने सीपको अवसर", value: 3.61 },
    { name: "Overall Average", value: 7.16 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A569BD",
    "#5DADE2",
    "#45B39D",
  ];

  // Top audience segments for the reel
  const topAudienceData = [
    { name: "Male, 25-34", percentage: 26.26, value: 258647 },
    { name: "Female, 35-44", percentage: 19.9, value: 195969 },
    { name: "Female, 25-34", percentage: 17.4, value: 171381 },
    { name: "Male, 45-54", percentage: 10.72, value: 105568 },
    { name: "Female, 65+", percentage: 5.75, value: 56596 },
  ];

  // Render appropriate chart based on active tab
  const renderChart = () => {
    switch (activeTab) {
      case "demographic":
        return (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">
              Demographic Comparison: ३ महिने सीपको अवसर vs Overall
            </h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={demographicData}
                  margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value: number) => `${value}%`} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                  <Legend />
                  <Bar
                    dataKey="reelPercentage"
                    name="३ महिने सीपको अवसर"
                    fill="#8884d8"
                  />
                  <Bar
                    dataKey="overallPercentage"
                    name="Overall Content"
                    fill="#82ca9d"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case "country":
        return (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">
              Country Comparison: ३ महिने सीपको अवसर vs Overall
            </h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={countryData}
                  margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value: number) => `${value}%`} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                  <Legend />
                  <Bar
                    dataKey="reelPercentage"
                    name="३ महिने सीपको अवसर"
                    fill="#8884d8"
                  />
                  <Bar
                    dataKey="overallPercentage"
                    name="Overall Content"
                    fill="#82ca9d"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      case "engagement":
        return (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">
              Engagement Rate Comparison
            </h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={engagementData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value: number) => `${value}%`} />
                  <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                  <Legend />
                  <Bar dataKey="value" name="Engagement Rate" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-yellow-800">
                <strong>Note:</strong> The &quot;३ महिने सीपको अवसर&quot; reel has a lower
                engagement rate (3.61%) compared to the overall average (7.16%).
                This suggests that while the reel is reaching the right
                audience, there might be opportunities to improve engagement
                elements.
              </p>
            </div>
          </div>
        );
      case "audience":
        return (
          <div className="p-4 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">
              Top Audience Segments for ३ महिने सीपको अवसर
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topAudienceData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="percentage"
                      nameKey="name"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(1)}%`
                      }
                    >
                      {topAudienceData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Audience Distribution</h3>
                <ul className="space-y-2">
                  {topAudienceData.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div
                        className="w-4 h-4 mr-2"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      ></div>
                      <span className="flex-1">{item.name}</span>
                      <span className="font-medium">
                        {item.percentage.toFixed(2)}%
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({item.value.toLocaleString()} views)
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                  <p className="text-blue-800 text-sm">
                    <strong>Key Insight:</strong> The &quot;३ महिने सीपको अवसर&quot; reel
                    performs particularly well with Female, 25-34 and Female,
                    35-44 demographics compared to overall content, suggesting
                    content focused on skill development appeals to these
                    segments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Select a tab to view data</div>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-gray-800 text-white p-6 rounded-t shadow">
        <h1 className="text-2xl font-bold">
          Audience Segmentation Analysis for &quot;३ महिने सीपको अवसर&quot;
        </h1>
        <p className="mt-2">
          Comprehensive analysis comparing audience demographics, geographic
          distribution, and engagement metrics.
        </p>
      </div>

      <div className="mb-8 bg-white shadow rounded-b p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 p-4 rounded border border-blue-200">
            <h3 className="text-sm text-blue-800 uppercase font-semibold">
              Views
            </h3>
            <p className="text-2xl font-bold">984,910</p>
          </div>
          <div className="bg-green-50 p-4 rounded border border-green-200">
            <h3 className="text-sm text-green-800 uppercase font-semibold">
              Reach
            </h3>
            <p className="text-2xl font-bold">1,244,407</p>
          </div>
          <div className="bg-purple-50 p-4 rounded border border-purple-200">
            <h3 className="text-sm text-purple-800 uppercase font-semibold">
              Reactions
            </h3>
            <p className="text-2xl font-bold">34,480</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
            <h3 className="text-sm text-yellow-800 uppercase font-semibold">
              Engagement Rate
            </h3>
            <p className="text-2xl font-bold">3.61%</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "demographic"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("demographic")}
          >
            Demographics
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "country"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("country")}
          >
            Countries
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "engagement"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("engagement")}
          >
            Engagement
          </button>
          <button
            className={`py-2 px-4 font-medium ${
              activeTab === "audience"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("audience")}
          >
            Audience Breakdown
          </button>
        </div>
      </div>

      {renderChart()}

      <div className="mt-8 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">
          Key Insights & Recommendations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">
              Target Audience Segments
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Female, 25-34:</strong> 17.40% (vs 12.52% overall) -{" "}
                <span className="text-green-600">+4.88%</span>
              </li>
              <li>
                <strong>Female, 35-44:</strong> 19.90% (vs 18.62% overall) -{" "}
                <span className="text-green-600">+1.28%</span>
              </li>
              <li>
                <strong>Male, 45-54:</strong> 10.72% (vs 8.64% overall) -{" "}
                <span className="text-green-600">+2.08%</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Target Countries</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>United Kingdom:</strong> 3.44% (vs 0.89% overall) -{" "}
                <span className="text-green-600">+2.55%</span>
              </li>
              <li>
                <strong>Saudi Arabia:</strong> 5.15% (vs 2.87% overall) -{" "}
                <span className="text-green-600">+2.29%</span>
              </li>
              <li>
                <strong>Qatar:</strong> 2.87% (vs 1.10% overall) -{" "}
                <span className="text-green-600">+1.77%</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Recommendations</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              Create more skill development content targeting female audiences
              in the 25-44 age range, as they show significantly higher interest
              compared to other content.
            </li>
            <li>
              Consider creating targeted campaigns for Middle Eastern countries
              (Saudi Arabia, Qatar, Kuwait) and the UK where this content
              significantly outperforms.
            </li>
            <li>
              Though this content reached the right audience, engagement metrics
              are lower than average. Consider enhancing engagement elements
              like clearer calls to action or interactive components.
            </li>
            <li>
              Develop a content strategy focusing on practical skills and
              opportunities similar to &quot;३ महिने सीपको अवसर&quot; for the identified
              demographic segments.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AudienceSegmentationDashboard;
