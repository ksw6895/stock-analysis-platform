'use client';


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Plus, TrendingUp, Bell, Filter } from 'lucide-react';

const Dashboard = () => {
  // Sample data - replace with real data later
  const performanceData = [
    { date: '2024-01', value: 100 },
    { date: '2024-02', value: 120 },
    { date: '2024-03', value: 115 },
    { date: '2024-04', value: 140 },
    { date: '2024-05', value: 135 },
    { date: '2024-06', value: 160 }
  ];

  const savedStrategies = [
    { name: 'Value Growth Strategy', matches: 5, lastUpdated: '2h ago' },
    { name: 'Dividend Champions', matches: 3, lastUpdated: '1d ago' },
    { name: 'Small Cap Growth', matches: 8, lastUpdated: '3h ago' }
  ];

  const stockRecommendations = [
    { symbol: 'AAPL', score: 92, change: '+2.5%' },
    { symbol: 'MSFT', score: 88, change: '+1.8%' },
    { symbol: 'GOOGL', score: 85, change: '-0.5%' }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="space-x-4">
          <Button variant="outline">
            <Bell className="h-4 w-4 mr-2" />
            Alerts
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Strategy
          </Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Chart */}
        <Card className="col-span-full lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Saved Strategies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Saved Strategies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {savedStrategies.map((strategy, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{strategy.name}</h3>
                    <p className="text-sm text-gray-500">
                      {strategy.matches} matches • {strategy.lastUpdated}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Recommendations */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stockRecommendations.map((stock, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-blue-600">{stock.symbol[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-medium">{stock.symbol}</h3>
                      <p className="text-sm text-gray-500">Score: {stock.score}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      stock.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stock.change}
                    </p>
                    <Button variant="outline" size="sm">Analyze</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;