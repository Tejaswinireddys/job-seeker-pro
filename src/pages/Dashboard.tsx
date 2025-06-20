
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
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Applications"
          value="847"
          description="All time applications sent"
          icon={Send}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Response Rate"
          value="28%"
          description="Responses received"
          icon={CheckCircle}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Jobs"
          value="156"
          description="Jobs in pipeline"
          icon={Search}
          trend={{ value: 3, isPositive: false }}
        />
        <StatCard
          title="Interviews"
          value="23"
          description="Scheduled this month"
          icon={Calendar}
          trend={{ value: 15, isPositive: true }}
        />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>Get started with your job hunt</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button className="h-auto p-4 flex flex-col items-center gap-2" variant="outline">
              <Search className="h-6 w-6" />
              <span>Search New Jobs</span>
            </Button>
            <Button className="h-auto p-4 flex flex-col items-center gap-2" variant="outline">
              <FileText className="h-6 w-6" />
              <span>Update Resume</span>
            </Button>
            <Button className="h-auto p-4 flex flex-col items-center gap-2" variant="outline">
              <Plus className="h-6 w-6" />
              <span>Bulk Apply</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Weekly Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Applications sent vs responses received</CardDescription>
          </CardHeader>
          <CardContent>
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
        <Card>
          <CardHeader>
            <CardTitle>Success Rate Trend</CardTitle>
            <CardDescription>Response rate improvement over time</CardDescription>
          </CardHeader>
          <CardContent>
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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Today's Goals
          </CardTitle>
          <CardDescription>Track your daily application targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Applications Sent</span>
                <span>23/100</span>
              </div>
              <Progress value={23} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Resume Updates</span>
                <span>5/10</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Follow-ups Sent</span>
                <span>8/15</span>
              </div>
              <Progress value={53} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
