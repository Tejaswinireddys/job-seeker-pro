
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Send, Search, Filter, Calendar, ExternalLink, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockApplications = [
  {
    id: 1,
    jobTitle: "Senior Java Developer",
    company: "TechCorp Inc",
    appliedDate: "2024-01-15",
    status: "Interview Scheduled",
    platform: "LinkedIn",
    salary: "$120k-160k",
    followUpDate: "2024-01-22",
    matchScore: 95
  },
  {
    id: 2,
    jobTitle: "Python Data Scientist", 
    company: "DataFlow Labs",
    appliedDate: "2024-01-14",
    status: "Under Review",
    platform: "Indeed",
    salary: "$110k-140k",
    followUpDate: "2024-01-21",
    matchScore: 88
  },
  {
    id: 3,
    jobTitle: "DevOps Engineer",
    company: "CloudNine Systems", 
    appliedDate: "2024-01-13",
    status: "Applied",
    platform: "Glassdoor",
    salary: "$100k-130k",
    followUpDate: "2024-01-20",
    matchScore: 82
  },
  {
    id: 4,
    jobTitle: "AI Engineer",
    company: "Neural Networks Inc",
    appliedDate: "2024-01-12", 
    status: "Rejected",
    platform: "AngelList",
    salary: "$130k-170k",
    followUpDate: null,
    matchScore: 75
  }
];

const statusColors = {
  "Applied": "secondary",
  "Under Review": "default", 
  "Interview Scheduled": "destructive",
  "Rejected": "outline"
} as const;

export default function Applications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();

  const handleFollowUp = (applicationId: number, company: string) => {
    toast({
      title: "Follow-up Sent",
      description: `Follow-up email sent to ${company}`,
    });
  };

  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="applications-bg min-h-screen p-6 -m-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Application Tracker 📊
          </h1>
          <p className="text-gray-600 mt-2">Monitor and manage all your job applications</p>
        </div>

        {/* Header Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="job-stat-card from-blue-500 to-cyan-500 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Send className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">847</div>
                  <p className="text-blue-100">Total Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="job-stat-card from-yellow-500 to-orange-500 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Search className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">234</div>
                  <p className="text-yellow-100">Under Review</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="job-stat-card from-green-500 to-emerald-500 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-green-100">Interviews</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="job-stat-card from-red-500 to-pink-500 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Filter className="h-8 w-8" />
                <div>
                  <div className="text-2xl font-bold">123</div>
                  <p className="text-red-100">Rejections</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="job-card-hover border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Send className="h-6 w-6" />
              Application Management
            </CardTitle>
            <CardDescription className="text-cyan-100">Manage and track all your job applications</CardDescription>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <Input
                  placeholder="Search by job title or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm border-2 border-cyan-200 focus:border-cyan-400"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48 border-2 border-cyan-200 focus:border-cyan-400">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="Applied">Applied</SelectItem>
                  <SelectItem value="Under Review">Under Review</SelectItem>
                  <SelectItem value="Interview Scheduled">Interview Scheduled</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Applications Table */}
        <Card className="job-card-hover border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-teal-400 to-cyan-400 p-4 text-white rounded-t-lg">
              <h3 className="text-lg font-semibold">Your Applications</h3>
            </div>
            <div className="bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold text-gray-700">Job Title</TableHead>
                    <TableHead className="font-semibold text-gray-700">Company</TableHead>
                    <TableHead className="font-semibold text-gray-700">Applied Date</TableHead>
                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                    <TableHead className="font-semibold text-gray-700">Platform</TableHead>
                    <TableHead className="font-semibold text-gray-700">Match Score</TableHead>
                    <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((app) => (
                    <TableRow key={app.id} className="hover:bg-cyan-50">
                      <TableCell className="font-medium text-gray-800">{app.jobTitle}</TableCell>
                      <TableCell className="text-gray-600">{app.company}</TableCell>
                      <TableCell className="text-gray-600">{app.appliedDate}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={statusColors[app.status as keyof typeof statusColors]}
                          className="font-medium"
                        >
                          {app.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-blue-300 text-blue-700">
                          {app.platform}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all duration-300" 
                              style={{ width: `${app.matchScore}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{app.matchScore}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {app.status !== "Rejected" && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleFollowUp(app.id, app.company)}
                              className="bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100"
                            >
                              <Mail className="h-4 w-4" />
                            </Button>
                          )}
                          <Button variant="outline" size="sm" className="bg-gray-50 border-gray-300 hover:bg-gray-100">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
