"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
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
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
 
  ScatterChart,
  Scatter,
  ZAxis,

} from "recharts";

// Define TypeScript interfaces for our data
interface DemographicData {
  name: string;
  reelPercentage: number;
  overallPercentage: number;
  difference: number;
  views: number;
  conversionRate?: number;
  conversionPotential: string;
  interests?: string[];
}

interface CountryData {
  name: string;
  reelPercentage: number;
  overallPercentage: number;
  difference: number;
  views: number;
  conversionPotential: string;
  localizedApproach?: string;
}

interface AudienceData {
  name: string;
  percentage: number;
  value: number;
}

interface EngagementData {
  name: string;
  value: number;
}

interface EngagementMetric {
  name: string;
  reel: number;
  overall: number;
}

interface ConversionStrategy {
  segment: string;
  type: string;
  potential: string;
  approach: string;
  ctas: string[];
  estimatedConversionRate: number;
  targetedContent: string[];
  potentialRevenue: number;
}

interface MetricsData {
  views: number;
  reach: number;
  reactions: number;
  comments: number;
  shares: number;
  engagementRate: number;
  overallEngagementRate: number;
  completionRate: number;
  clickThroughRate: number;
}

interface TrendData {
  date: string;
  views: number;
  engagement: number;
}

interface EducationData {
  level: string;
  percentage: number;
  conversionPotential: string;
}

const AudienceSegmentationDashboard: React.FC = () => {
  // State to control active tab and responsive design
  const [activeTab, setActiveTab] = useState<string>("demographic");
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTabMenuOpen, setIsTabMenuOpen] = useState<boolean>(false);

  // Check for mobile screen size on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add resize listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup listener
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Define colors
  const COLORS = [
    "#4361EE", // Primary blue
    "#3A0CA3", // Deep purple
    "#7209B7", // Bright purple
    "#F72585", // Pink
    "#4CC9F0", // Light blue
    "#4F772D", // Green
    "#31572C"  // Dark green
  ];

  // Helper functions
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  const formatPercentage = (num: number): string => {
    return `${num.toFixed(2)}%`;
  };

  const formatCurrency = (num: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const getPerformanceColor = (difference: number): string => {
    if (difference > 3) return "text-emerald-600";
    if (difference > 1) return "text-green-600";
    if (difference > 0) return "text-lime-600";
    if (difference > -1) return "text-yellow-600";
    return "text-red-600";
  };

  const getConversionPotentialClass = (potential: string): string => {
    switch (potential) {
      case "Very High":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "High":
        return "bg-green-100 text-green-800 border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Data sources - Enhanced with additional metrics and insights
  const demographicData: DemographicData[] = [
    {
      name: "Female, 25-34",
      reelPercentage: 17.4,
      overallPercentage: 12.52,
      difference: 4.88,
      views: 171381,
      conversionRate: 4.2,
      conversionPotential: "Very High",
      interests: ["Career Development", "Professional Growth", "Tech Skills", "Workplace Flexibility"]
    },
    {
      name: "Male, 45-54",
      reelPercentage: 10.72,
      overallPercentage: 8.64,
      difference: 2.08,
      views: 105568,
      conversionRate: 3.8,
      conversionPotential: "High",
      interests: ["Career Transition", "Digital Literacy", "Management Skills", "Industry Credentials"]
    },
    {
      name: "Female, 35-44",
      reelPercentage: 19.9,
      overallPercentage: 18.62,
      difference: 1.28,
      views: 195969,
      conversionRate: 3.5,
      conversionPotential: "High",
      interests: ["Work-Life Balance", "Leadership Skills", "Industry Certifications", "Remote Work"]
    },
    {
      name: "Female, 65+",
      reelPercentage: 5.75,
      overallPercentage: 5.66,
      difference: 0.09,
      views: 56596,
      conversionRate: 2.1,
      conversionPotential: "Medium",
      interests: ["Digital Literacy", "Hobby Skills", "Personal Growth", "Community Connection"]
    },
    {
      name: "Male, 55-64",
      reelPercentage: 3.03,
      overallPercentage: 3.12,
      difference: -0.09,
      views: 29830,
      conversionRate: 1.9,
      conversionPotential: "Medium",
      interests: ["Retirement Planning", "Consulting Skills", "Digital Tools", "Knowledge Transfer"]
    },
    {
      name: "Male, 25-34",
      reelPercentage: 26.26,
      overallPercentage: 26.8,
      difference: -0.54,
      views: 258647,
      conversionRate: 2.7,
      conversionPotential: "Medium",
      interests: ["Technical Skills", "Coding", "Career Advancement", "Entrepreneurship"]
    },
    {
      name: "Male, 35-44",
      reelPercentage: 5.74,
      overallPercentage: 9.84,
      difference: -4.1,
      views: 56493,
      conversionRate: 1.5,
      conversionPotential: "Low",
      interests: ["Management Skills", "Leadership", "Industry Knowledge", "Technical Certification"]
    },
  ];

  const countryData: CountryData[] = [
    {
      name: "United Kingdom",
      reelPercentage: 3.44,
      overallPercentage: 0.89,
      difference: 2.55,
      views: 33869,
      conversionPotential: "Very High",
      localizedApproach: "UK-recognized credentials with European job market focus"
    },
    {
      name: "Saudi Arabia",
      reelPercentage: 5.15,
      overallPercentage: 2.87,
      difference: 2.28,
      views: 50758,
      conversionPotential: "Very High",
      localizedApproach: "Arabic-supported programs with Gulf employment emphasis"
    },
    {
      name: "Qatar",
      reelPercentage: 2.87,
      overallPercentage: 1.1,
      difference: 1.77,
      views: 28258,
      conversionPotential: "High",
      localizedApproach: "Executive education with Qatari business context"
    },
    {
      name: "Kuwait",
      reelPercentage: 1.93,
      overallPercentage: 0.39,
      difference: 1.54,
      views: 19047,
      conversionPotential: "High",
      localizedApproach: "Industry-specific training with Kuwaiti market applications"
    },
    {
      name: "Bhutan",
      reelPercentage: 2.42,
      overallPercentage: 0.95,
      difference: 1.47,
      views: 23861,
      conversionPotential: "High",
      localizedApproach: "Regional partnerships with cross-border certification"
    },
    {
      name: "United States",
      reelPercentage: 59.7,
      overallPercentage: 72.67,
      difference: -12.97,
      views: 587978,
      conversionPotential: "Medium",
      localizedApproach: "US-recognized credentials with American employment context"
    },
    {
      name: "Netherlands",
      reelPercentage: 6.37,
      overallPercentage: 8.09,
      difference: -1.72,
      views: 62701,
      conversionPotential: "Medium",
      localizedApproach: "EU-recognized programs with Dutch/English bilingual options"
    },
  ];

  const engagementData: EngagementData[] = [
    { name: "३ महिने सीपको अवसर", value: 3.61 },
    { name: "Overall Average", value: 7.16 },
  ];

  const engagementMetrics: EngagementMetric[] = [
    { name: "Engagement Rate", reel: 3.61, overall: 7.16 },
    { name: "Reactions/1K Views", reel: 35.0, overall: 52.7 },
    { name: "Comments/1K Views", reel: 0.42, overall: 1.08 },
    { name: "Shares/1K Views", reel: 0.69, overall: 1.25 },
    { name: "Watch Time (s)", reel: 45.2, overall: 38.6 },
    { name: "Completion Rate", reel: 38.5, overall: 31.2 }
  ];

  const topAudienceData: AudienceData[] = [
    { name: "Male, 25-34", percentage: 26.26, value: 258647 },
    { name: "Female, 35-44", percentage: 19.9, value: 195969 },
    { name: "Female, 25-34", percentage: 17.4, value: 171381 },
    { name: "Male, 45-54", percentage: 10.72, value: 105568 },
    { name: "Female, 65+", percentage: 5.75, value: 56596 },
  ];

  const metrics: MetricsData = {
    views: 984910,
    reach: 1244407,
    reactions: 34480,
    comments: 418,
    shares: 683,
    engagementRate: 3.61,
    overallEngagementRate: 7.16,
    completionRate: 38.5,
    clickThroughRate: 2.3
  };

  const conversionStrategies: ConversionStrategy[] = [
    {
      segment: "Female, 25-34",
      type: "Demographic",
      potential: "Very High",
      approach: "Career advancement, flexible learning options",
      ctas: ["Download career guide", "Free skill assessment", "Schedule career consultation"],
      estimatedConversionRate: 4.2,
      targetedContent: [
        "Success stories of women in tech",
        "Flexible learning path guides",
        "Career advancement case studies",
        "Work-life balance tips"
      ],
      potentialRevenue: 720000
    },
    {
      segment: "Male, 45-54",
      type: "Demographic",
      potential: "High",
      approach: "Career transition, specialized skills",
      ctas: ["Career pivot guide", "Industry demand report", "Skills gap analysis"],
      estimatedConversionRate: 3.8,
      targetedContent: [
        "Mid-career transition stories",
        "Technology adoption guides",
        "Industry expert interviews",
        "Executive format program details"
      ],
      potentialRevenue: 400000
    },
    {
      segment: "Female, 35-44",
      type: "Demographic",
      potential: "High",
      approach: "Professional upskilling",
      ctas: ["Skill gap assessment", "Industry networking events", "Leadership development guide"],
      estimatedConversionRate: 3.5,
      targetedContent: [
        "Work-life balance success stories",
        "Management skill development paths",
        "Industry certification guides",
        "Peer networking opportunities"
      ],
      potentialRevenue: 685000
    },
    {
      segment: "United Kingdom",
      type: "Geographic",
      potential: "Very High",
      approach: "UK-recognized credentials",
      ctas: ["UK employability guide", "Credential comparison tool", "UK market skills report"],
      estimatedConversionRate: 4.5,
      targetedContent: [
        "UK market-specific content",
        "British industry partnerships",
        "London job market analysis",
        "UK certification pathways"
      ],
      potentialRevenue: 152000
    },
    {
      segment: "Saudi Arabia",
      type: "Geographic",
      potential: "Very High",
      approach: "Specialized regional programs",
      ctas: ["Arabic program guide", "Regional opportunity assessment", "Gulf employer connections"],
      estimatedConversionRate: 4.3,
      targetedContent: [
        "Arabic-supported learning materials",
        "Gulf market success stories",
        "Saudi industry needs analysis",
        "Cultural context adaptations"
      ],
      potentialRevenue: 218000
    },
  ];

  // Additional data sets
  const trendData: TrendData[] = [
    { date: "Feb 16", views: 23456, engagement: 3.2 },
    { date: "Feb 23", views: 45678, engagement: 3.5 },
    { date: "Mar 1", views: 78901, engagement: 3.8 },
    { date: "Mar 8", views: 65432, engagement: 3.6 },
    { date: "Mar 15", views: 54321, engagement: 3.4 }
  ];

  const educationData: EducationData[] = [
    { level: "High School", percentage: 15.3, conversionPotential: "Medium" },
    { level: "Some College", percentage: 22.7, conversionPotential: "High" },
    { level: "Bachelor's Degree", percentage: 38.4, conversionPotential: "Very High" },
    { level: "Master's Degree", percentage: 18.9, conversionPotential: "High" },
    { level: "Doctorate", percentage: 4.7, conversionPotential: "Medium" }
  ];

  // Conversion potential vs audience size data
  const potentialVsSizeData = demographicData.map(item => ({
    name: item.name,
    audienceSize: item.views,
    differential: item.difference,
    conversionRate: item.conversionRate || 0
  }));

  // Sort data by difference for better visualization
  const sortedDemographicData = [...demographicData].sort((a, b) => b.difference - a.difference);
  const sortedCountryData = [...countryData].sort((a, b) => b.difference - a.difference).slice(0, 7);

  // Function to handle segment selection for conversion strategies
  const handleSegmentClick = (segment: string) => {
    setSelectedSegment(selectedSegment === segment ? null : segment);
  };

  // Get selected conversion strategy details
  const selectedStrategy = selectedSegment
    ? conversionStrategies.find(s => s.segment === selectedSegment)
    : null;

  // Toggle tab menu on mobile
  const toggleTabMenu = () => {
    setIsTabMenuOpen(!isTabMenuOpen);
  };

  // Select tab and close menu on mobile
  const selectTab = (tab: string) => {
    setActiveTab(tab);
    setIsTabMenuOpen(false);
  };

  // Render appropriate chart based on active tab
  const renderChart = () => {
    switch (activeTab) {
      case "demographic":
        return (
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Demographic Comparison: ३ महिने सीपको अवसर vs Overall
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`h-72 md:h-96 ${isMobile ? 'mb-6' : ''}`}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={sortedDemographicData}
                    margin={{ top: 20, right: 30, left: isMobile ? 80 : 60, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value: number) => `${value}%`} />
                    <YAxis dataKey="name" type="category" width={isMobile ? 80 : 100} tick={{ fontSize: isMobile ? 10 : 12 }} />
                    <Tooltip 
                      formatter={(value: number) => `${value.toFixed(2)}%`}
                      labelFormatter={(label: string) => `Segment: ${label}`}
                    />
                    <Legend />
                    <Bar
                      dataKey="reelPercentage"
                      name="३ महिने सीपको अवसर"
                      fill="#4361EE"
                    />
                    <Bar
                      dataKey="overallPercentage"
                      name="Overall Content"
                      fill="#7209B7"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="overflow-x-auto">
              <Link 
    href="https://docs.google.com/spreadsheets/d/18wN_OtlbvMFZqEcAdPl-lZSKvbP4myJFfREv1KEMUlw/edit?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline font-semibold mb-2 block"
  >
    View the list of <span className="font-bold">Potential Leads</span> who have shown interest.  
    They may be inquiring for themselves, a friend, or a family member.
  </Link>
                <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
          
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segment</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reel %</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overall %</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diff</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Potential</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sortedDemographicData.map((segment, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition duration-150">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{segment.name}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatPercentage(segment.reelPercentage)}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatPercentage(segment.overallPercentage)}</td>
                        <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${getPerformanceColor(segment.difference)}`}>
                          {segment.difference > 0 ? '+' : ''}{formatPercentage(segment.difference)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getConversionPotentialClass(segment.conversionPotential)}`}>
                            {segment.conversionPotential}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-blue-800">Key Insight:</h3>
                  <p className="text-blue-800 mt-1">
                    Female audiences aged 25-34 show nearly 5% higher viewership compared to your overall content,
                    making them your strongest demographic opportunity for student conversion.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Additional insight for demographics - Conversion Potential visualization */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Conversion Potential by Audience Size</h3>
              <div className="h-72 md:h-80 rounded-lg overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart
                    margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      type="number" 
                      dataKey="audienceSize" 
                      name="Audience Size" 
                      tickFormatter={(value) => `${(value/1000).toFixed(0)}K`}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="differential" 
                      name="Differential" 
                      unit="%" 
                    />
                    <ZAxis 
                      type="number" 
                      dataKey="conversionRate" 
                      range={[50, 400]} 
                      name="Est. Conversion Rate" 
                      unit="%" 
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => {
                        if (name === "Audience Size") return [`${formatNumber(value as number)}`, name];
                        return [`${value}%`, name];
                      }}
                    />
                    <Legend />
                    <Scatter 
                      name="Audience Segments" 
                      data={potentialVsSizeData} 
                      fill="#8884d8" 
                      shape="circle"
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-600 mt-2 italic">
                Note: Bubble size represents estimated conversion rate. Position shows relationship between audience size (x-axis) and performance differential (y-axis).
              </p>
            </div>
          </div>
        );
      case "country":
        return (
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Country Comparison: ३ महिने सीपको अवसर vs Overall
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`h-72 md:h-96 ${isMobile ? 'mb-6' : ''}`}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={sortedCountryData}
                    margin={{ top: 20, right: 30, left: isMobile ? 100 : 80, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" tickFormatter={(value: number) => `${value}%`} />
                    <YAxis dataKey="name" type="category" width={isMobile ? 100 : 80} tick={{ fontSize: isMobile ? 10 : 12 }} />
                    <Tooltip 
                      formatter={(value: number) => `${value.toFixed(2)}%`}
                      labelFormatter={(label: string) => `Country: ${label}`}
                    />
                    <Legend />
                    <Bar
                      dataKey="reelPercentage"
                      name="३ महिने सीपको अवसर"
                      fill="#4361EE"
                    />
                    <Bar
                      dataKey="overallPercentage"
                      name="Overall Content"
                      fill="#7209B7"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reel %</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diff</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Potential</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {sortedCountryData.filter(country => country.difference > 0).map((country, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition duration-150">
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{country.name}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatPercentage(country.reelPercentage)}</td>
                          <td className={`px-4 py-3 whitespace-nowrap text-sm font-medium ${getPerformanceColor(country.difference)}`}>
                            {country.difference > 0 ? '+' : ''}{formatPercentage(country.difference)}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getConversionPotentialClass(country.conversionPotential)}`}>
                              {country.conversionPotential}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-blue-800">Key Insight:</h3>
                  <p className="text-blue-800 mt-1">
                    The content shows significant overperformance in the UK (+2.55%) and 
                    Middle Eastern countries, suggesting strong potential for international 
                    student recruitment in these regions.
                  </p>
                </div>
                
                <div className="mt-4">
                  <h3 className="font-medium text-gray-800 mb-2">Localization Approaches</h3>
                  <div className="space-y-2">
                    {sortedCountryData.filter(country => country.difference > 0).slice(0, 3).map((country, index) => (
                      <div key={index} className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                        <h4 className="font-medium text-purple-800">{country.name}</h4>
                        <p className="text-purple-800 text-sm">{country.localizedApproach}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "engagement":
        return (
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Engagement Analysis
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className={`h-64 md:h-72 ${isMobile ? 'mb-6' : ''}`}>
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
                      <Bar dataKey="value" name="Engagement Rate" fill="#4361EE">
                        <Cell fill="#4361EE" />
                        <Cell fill="#7209B7" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold p-4 border-b">Engagement Metrics</h3>
                  <div className="p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Reel Engagement Rate:</span>
                      <span className="font-medium">{formatPercentage(metrics.engagementRate)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Overall Average Rate:</span>
                      <span className="font-medium">{formatPercentage(metrics.overallEngagementRate)}</span>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="text-gray-600">Difference:</span>
                      <span className="font-medium text-red-600">
                        {formatPercentage(metrics.engagementRate - metrics.overallEngagementRate)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-yellow-800">Engagement Gap Analysis:</h3>
                  <p className="text-yellow-800 mt-1">
                    While the reel reached the right demographic segments, its engagement rate is 
                    lower than your overall average. This suggests opportunities to improve engagement
                    with stronger calls-to-action and interactive elements.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className={`h-64 md:h-72 ${isMobile ? 'mb-6' : ''}`}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={isMobile ? 70 : 90} data={engagementMetrics}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" tick={{ fontSize: isMobile ? 10 : 12 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 'auto']} />
                      <Radar name="Reel" dataKey="reel" stroke="#4361EE" fill="#4361EE" fillOpacity={0.6} />
                      <Radar name="Overall" dataKey="overall" stroke="#7209B7" fill="#7209B7" fillOpacity={0.6} />
                      <Legend />
                      <Tooltip formatter={(value: number) => `${value}`} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold p-4 border-b">Engagement Trends</h3>
                  <div className="h-48 p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis yAxisId="left" domain={[0, 100000]} tickFormatter={(value) => `${value/1000}K`} />
                        <YAxis yAxisId="right" orientation="right" domain={[0, 5]} tickFormatter={(value) => `${value}%`} />
                        <Tooltip formatter={(value, name) => {
                          if (name === "views") return [`${formatNumber(value as number)}`, "Views"];
                          return [`${value}%`, "Engagement"];
                        }} />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="views" stroke="#4361EE" name="Views" />
                        <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#F72585" name="Engagement %" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "audience":
        return (
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              Audience Analysis for ३ महिने सीपको अवसर
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`h-72 md:h-80 ${isMobile ? 'mb-6' : ''}`}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topAudienceData}
                      cx="50%"
                      cy="50%"
                      labelLine={!isMobile}
                      outerRadius={isMobile ? 70 : 80}
                      fill="#8884d8"
                      dataKey="percentage"
                      nameKey="name"
                      label={isMobile ? undefined : ({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {topAudienceData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => `${value.toFixed(2)}%`} />
                    <Legend layout={isMobile ? "horizontal" : "vertical"} verticalAlign={isMobile ? "bottom" : "middle"} align={isMobile ? "center" : "right"} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Audience Distribution</h3>
                <ul className="space-y-2">
                  {topAudienceData.map((item, index) => (
                    <li key={index} className="flex items-center p-2 rounded-lg hover:bg-gray-50 transition duration-150">
                      <div
                        className="w-4 h-4 mr-2 rounded-full"
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
                
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium text-blue-800">Key Insight:</h3>
                  <p className="text-blue-800 mt-1">
                    The &quot;३ महिने सीपको अवसर&quot; reel
                    performs particularly well with Female, 25-34 and Female,
                    35-44 demographics compared to overall content, suggesting
                    content focused on skill development appeals to these
                    segments.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Educational Background Analysis */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Educational Background Distribution</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={educationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="level" />
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Bar dataKey="percentage" name="Percentage" fill="#7209B7">
                        {educationData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.conversionPotential === "Very High" ? "#4361EE" : 
                                  entry.conversionPotential === "High" ? "#4CC9F0" : "#F72585"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4 shadow-sm">
                    <h3 className="font-medium text-purple-800">Education Insight:</h3>
                    <p className="text-purple-800 mt-1">
                      Viewers with Bachelor&apos;s degrees (38.4%) show the highest conversion potential, 
                      suggesting content should be tailored to this education level while remaining 
                      accessible to those with some college experience (22.7%).
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-medium text-gray-800 mb-2">Interest Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {demographicData
                        .flatMap(d => d.interests || [])
                        .filter((v, i, a) => a.indexOf(v) === i)
                        .slice(0, 12)
                        .map((interest, index) => (
                          <span 
                            key={index} 
                            className="px-3 py-1 bg-indigo-50 text-indigo-800 rounded-full text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "conversion":
        return (
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Student Conversion Strategy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {conversionStrategies.map((strategy, index) => (
                <div 
                  key={index}
                  className={`p-4 border rounded-lg cursor-pointer transition hover:shadow-md ${
                    selectedSegment === strategy.segment 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/30'
                  }`}
                  onClick={() => handleSegmentClick(strategy.segment)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{strategy.segment}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getConversionPotentialClass(strategy.potential)}`}>
                      {strategy.potential}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{strategy.type}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Est. Conv: {strategy.estimatedConversionRate}%</span>
                    <span>Potential: {formatCurrency(strategy.potentialRevenue)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedStrategy ? (
              <div className="bg-gray-50 p-6 rounded-lg mt-4 shadow-sm">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">
                    Conversion Strategy: {selectedStrategy.segment}
                  </h3>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getConversionPotentialClass(selectedStrategy.potential)}`}>
                    {selectedStrategy.potential}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">Approach</h4>
                      <p className="mt-1 bg-white p-3 rounded-lg border">{selectedStrategy.approach}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700">Expected Metrics</h4>
                      <div className="bg-white p-3 rounded-lg border space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Conversion Rate:</span>
                          <span className="font-medium">{selectedStrategy.estimatedConversionRate}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Potential Revenue:</span>
                          <span className="font-medium">{formatCurrency(selectedStrategy.potentialRevenue)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-700">Recommended CTAs</h4>
                      <ul className="mt-1 list-disc pl-5 space-y-1 bg-white p-3 rounded-lg border">
                        {selectedStrategy.ctas.map((cta, index) => (
                          <li key={index}>{cta}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">Targeted Content</h4>
                      <ul className="mt-1 list-disc pl-5 space-y-1 bg-white p-3 rounded-lg border">
                        {selectedStrategy.targetedContent.map((content, index) => (
                          <li key={index}>{content}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-medium text-green-800">Implementation Tip</h4>
                      <p className="text-green-800 text-sm mt-1">
                        Create a dedicated landing page for this segment with messaging 
                        and visuals that align with their specific motivations and needs.
                        A/B test different CTAs to optimize conversion rates.
                      </p>
                    </div>
                    
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-medium text-blue-800">Timeline Recommendation</h4>
                      <p className="text-blue-800 text-sm mt-1">
                        Implement within 30 days to capitalize on current momentum.
                        Focus on establishing tracking mechanisms to measure conversion effectiveness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
                <p className="text-gray-600">Select a segment above to view detailed conversion strategy</p>
              </div>
            )}
          </div>
        );
      default:
        return <div>Select a tab to view data</div>;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-4 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-4 sm:p-6 rounded-lg shadow-lg mb-4">
        <h1 className="text-xl sm:text-2xl font-bold">
          Audience Segmentation Analysis for &quot;३ महिने सीपको अवसर&quot;
        </h1>
        <p className="mt-2 text-blue-100">
          Comprehensive analysis of demographics, geographic distribution, and engagement metrics.
        </p>
      </div>

      {/* Metrics Overview Section */}
      <div className="mb-6 bg-white rounded-lg shadow-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200 shadow-sm">
            <h3 className="text-xs sm:text-sm text-blue-800 uppercase font-semibold">
              Views
            </h3>
            <p className="text-lg sm:text-2xl font-bold">{formatNumber(metrics.views)}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200 shadow-sm">
            <h3 className="text-xs sm:text-sm text-green-800 uppercase font-semibold">
              Reach
            </h3>
            <p className="text-lg sm:text-2xl font-bold">{formatNumber(metrics.reach)}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200 shadow-sm">
            <h3 className="text-xs sm:text-sm text-purple-800 uppercase font-semibold">
              Reactions
            </h3>
            <p className="text-lg sm:text-2xl font-bold">{formatNumber(metrics.reactions)}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200 shadow-sm">
            <h3 className="text-xs sm:text-sm text-yellow-800 uppercase font-semibold">
              Engagement Rate
            </h3>
            <p className="text-lg sm:text-2xl font-bold">{formatPercentage(metrics.engagementRate)}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xs text-gray-600 uppercase font-medium">Comments</h3>
            <p className="text-base sm:text-lg font-medium">{formatNumber(metrics.comments)}</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xs text-gray-600 uppercase font-medium">Shares</h3>
            <p className="text-base sm:text-lg font-medium">{formatNumber(metrics.shares)}</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xs text-gray-600 uppercase font-medium">Completion</h3>
            <p className="text-base sm:text-lg font-medium">{formatPercentage(metrics.completionRate)}</p>
          </div>
          <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xs text-gray-600 uppercase font-medium">CTR</h3>
            <p className="text-base sm:text-lg font-medium">{formatPercentage(metrics.clickThroughRate)}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section - Mobile Friendly */}
      <div className="relative mb-4">
        {/* Mobile Tab Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleTabMenu}
            className="w-full flex items-center justify-between bg-white py-3 px-4 rounded-lg shadow-md"
          >
            <span className="font-medium">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        )}
        
        {/* Mobile Tab Dropdown */}
        {isMobile && isTabMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
            <button
              className="w-full text-left py-3 px-4 hover:bg-blue-50"
              onClick={() => selectTab("demographic")}
            >
              Demographics
            </button>
            <button
              className="w-full text-left py-3 px-4 hover:bg-blue-50"
              onClick={() => selectTab("country")}
            >
              Countries
            </button>
            <button
              className="w-full text-left py-3 px-4 hover:bg-blue-50"
              onClick={() => selectTab("engagement")}
            >
              Engagement
            </button>
            <button
              className="w-full text-left py-3 px-4 hover:bg-blue-50"
              onClick={() => selectTab("audience")}
            >
              Audience
            </button>
            <button
              className="w-full text-left py-3 px-4 hover:bg-blue-50"
              onClick={() => selectTab("conversion")}
            >
              Conversion
            </button>
          </div>
        )}
        
        {/* Desktop Tabs */}
        {!isMobile && (
          <div className="flex border-b bg-white rounded-t-lg overflow-hidden shadow-md">
            <button
              className={`py-3 px-6 font-medium transition ${
                activeTab === "demographic"
                  ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("demographic")}
            >
              Demographics
            </button>
            <button
              className={`py-3 px-6 font-medium transition ${
                activeTab === "country"
                  ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("country")}
            >
              Countries
            </button>
            <button
              className={`py-3 px-6 font-medium transition ${
                activeTab === "engagement"
                  ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("engagement")}
            >
              Engagement
            </button>
            <button
              className={`py-3 px-6 font-medium transition ${
                activeTab === "audience"
                  ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("audience")}
            >
              Audience
            </button>
            <button
              className={`py-3 px-6 font-medium transition ${
                activeTab === "conversion"
                  ? "border-b-2 border-blue-500 text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("conversion")}
            >
              Conversion
            </button>
          </div>
        )}
      </div>

      {/* Tab Content */}
      {renderChart()}

      {/* Recommendations Section */}
      <div className="mt-6 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          Key Insights & Recommendations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-800 text-lg flex items-center">
              <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-sm mr-2">1</div>
              Target Female, 25-34
            </h4>
            <p className="mt-2 text-sm text-green-800">
              Create career advancement focused content with flexible learning options. This segment shows 
              4.88% higher interest in your skills content.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 shadow-sm">
            <h4 className="font-semibold text-blue-800 text-lg flex items-center">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-2">2</div>
              Expand to UK Market
            </h4>
            <p className="mt-2 text-sm text-blue-800">
              Develop UK-specific credentials and marketing, as this region shows 2.55% higher engagement 
              with your skills development content.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200 shadow-sm">
            <h4 className="font-semibold text-purple-800 text-lg flex items-center">
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm mr-2">3</div>
              Improve Engagement
            </h4>
            <p className="mt-2 text-sm text-purple-800">
              Add stronger calls-to-action and interactive elements to address the 3.54% engagement 
              gap compared to your overall content.
            </p>
          </div>
        </div>
        
        {/* <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 border border-indigo-200 shadow-sm">
          <h3 className="font-semibold text-indigo-800 text-lg">Implementation Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h4 className="font-medium text-indigo-800">Month 1: Core Audience</h4>
              <ul className="mt-2 text-sm space-y-1 list-disc pl-4">
                <li>Target Female 25-34 segment</li>
                <li>Create segment-specific landing pages</li>
                <li>Set up conversion tracking</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h4 className="font-medium text-indigo-800">Month 2: Geographic Expansion</h4>
              <ul className="mt-2 text-sm space-y-1 list-disc pl-4">
                <li>Launch UK market campaign</li>
                <li>Test Middle Eastern audiences</li>
                <li>Develop region-specific credentials</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <h4 className="font-medium text-indigo-800">Month 3: Scaling Success</h4>
              <ul className="mt-2 text-sm space-y-1 list-disc pl-4">
                <li>Scale successful audience targeting</li>
                <li>Implement lookalike audiences</li>
                <li>Launch referral program</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      
      {/* Footer */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Data analysis period: February 16, 2025 - March 15, 2025</p>
      </div>
    </div>
  );
};

export default AudienceSegmentationDashboard;