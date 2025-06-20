
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
  const [statusFilter, setStatusFilter] = useState("");
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
    const matchesStatus = !statusFilter || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold">847</div>
            <p className="text-sm text-muted-foreground">Total Applications</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">234</div>
            <p className="text-sm text-muted-foreground">Under Review</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">45</div>
            <p className="text-sm text-muted-foreground">Interviews</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">123</div>
            <p className="text-sm text-muted-foreground">Rejections</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            Application Tracker
          </CardTitle>
          <CardDescription>Manage and track all your job applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <Input
                placeholder="Search by job title or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Statuses</SelectItem>
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
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Match Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.jobTitle}</TableCell>
                  <TableCell>{app.company}</TableCell>
                  <TableCell>{app.appliedDate}</TableCell>
                  <TableCell>
                    <Badge variant={statusColors[app.status as keyof typeof statusColors]}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{app.platform}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-green-500 rounded-full" 
                          style={{ width: `${app.matchScore}%` }}
                        />
                      </div>
                      <span className="text-sm">{app.matchScore}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {app.status !== "Rejected" && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleFollowUp(app.id, app.company)}
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
