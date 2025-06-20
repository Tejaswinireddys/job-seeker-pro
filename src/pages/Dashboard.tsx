
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import StatCard from '@/components/StatCard';
import { Search, Send, CheckCircle, Clock, TrendingUp, FileText, Calendar, Plus } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const weeklyData = [
  { name: 'Mon', applications: 12, responses: 2 },
  { name: 'Tue', applications: 8, responses: 1 },
  { name: 'Wed', applications: 15, responses: 3 },
  { name: 'Thu', applications: 10, responses: 2 },
  { name: 'Fri', applications: 18, responses: 4 },
  { name: 'Sat', applications: 5, responses: 1 },
  { name: 'Sun', applications: 3, responses: 0 },
];

const trendsData = [
  { month: 'Jan', successRate: 12 },
  { month: 'Feb', successRate: 15 },
  { month: 'Mar', successRate: 18 },
  { month: 'Apr', successRate: 22 },
  { month: 'May', successRate: 25 },
  { month: 'Jun', successRate: 28 },
];

export default function Dashboard() {
  return (
    <div className="dashboard-bg min-h-screen p-6 -m-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to SmartJobHunter 🎯
          </h1>
          <p className="text-gray-600 mt-2">Your AI-powered job application assistant</p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="job-stat-card from-emerald-500 to-teal-500 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Send className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">847</div>
                  <p className="text-emerald-100">Total Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="job-stat-card from-blue-500 to-cyan-500 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">28%</div>
                  <p className="text-blue-100">Response Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="job-stat-card from-purple-500 to-pink-500 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Search className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-purple-100">Active Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="job-stat-card from-orange-500 to-red-500 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-orange-100">Interviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="job-card-hover border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription className="text-indigo-100">Get started with your job hunt</CardDescription>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <div className="grid gap-4 md:grid-cols-3">
              <Button className="h-auto p-6 flex flex-col items-center gap-3 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-0">
                <Search className="h-8 w-8" />
                <span className="font-semibold">Search New Jobs</span>
              </Button>
              <Button className="h-auto p-6 flex flex-col items-center gap-3 bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 border-0">
                <FileText className="h-8 w-8" />
                <span className="font-semibold">Update Resume</span>
              </Button>
              <Button className="h-auto p-6 flex flex-col items-center gap-3 bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border-0">
                <Plus className="h-8 w-8" />
                <span className="font-semibold">Bulk Apply</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts Row */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Weekly Activity */}
          <Card className="job-card-hover border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle>Weekly Activity</CardTitle>
              <CardDescription className="text-cyan-100">Applications sent vs responses received</CardDescription>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="applications" fill="#3b82f6" name="Applications" />
                  <Bar dataKey="responses" fill="#10b981" name="Responses" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Success Rate Trend */}
          <Card className="job-card-hover border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle>Success Rate Trend</CardTitle>
              <CardDescription className="text-purple-100">Response rate improvement over time</CardDescription>
            </CardHeader>
            <CardContent className="p-6 bg-white">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trendsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="successRate" stroke="#8b5cf6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Today's Goals */}
        <Card className="job-card-hover border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Today's Goals
            </CardTitle>
            <CardDescription className="text-orange-100">Track your daily application targets</CardDescription>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Applications Sent</span>
                  <span className="text-blue-600">23/100</span>
                </div>
                <Progress value={23} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Resume Updates</span>
                  <span className="text-emerald-600">5/10</span>
                </div>
                <Progress value={50} className="h-3" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Follow-ups Sent</span>
                  <span className="text-purple-600">8/15</span>
                </div>
                <Progress value={53} className="h-3" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
