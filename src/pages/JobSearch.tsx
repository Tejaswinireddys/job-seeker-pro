
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, DollarSign, ExternalLink, Bookmark, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const technologies = [
  "Java Full Stack",
  "Python Full Stack", 
  "Data Science",
  "DevOps",
  "SRE",
  "AI Engineer"
];

const locations = [
  "Remote",
  "Hybrid", 
  "On-site",
  "San Francisco",
  "New York", 
  "Austin",
  "Seattle"
];

const jobPortals = [
  "LinkedIn",
  "Indeed", 
  "Glassdoor",
  "AngelList",
  "Stack Overflow",
  "WeWorkRemotely",
  "Company Careers"
];

const mockJobs = [
  {
    id: 1,
    title: "Senior Java Full Stack Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA (Hybrid)",
    salary: "$120k - $160k",
    posted: "2 hours ago",
    portal: "LinkedIn",
    tags: ["Java", "Spring Boot", "React", "AWS"],
    description: "We're looking for a senior full stack developer to join our growing team..."
  },
  {
    id: 2,
    title: "Python Data Scientist",
    company: "DataFlow Labs",
    location: "Remote",
    salary: "$110k - $140k", 
    posted: "4 hours ago",
    portal: "Indeed",
    tags: ["Python", "ML", "TensorFlow", "SQL"],
    description: "Join our data science team to build ML models and drive insights..."
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudNine Systems",
    location: "Austin, TX (On-site)",
    salary: "$100k - $130k",
    posted: "1 day ago", 
    portal: "Glassdoor",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
    description: "Looking for a DevOps engineer to manage our cloud infrastructure..."
  }
];

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      toast({
        title: "Search Complete",
        description: `Found ${mockJobs.length} jobs matching your criteria`,
      });
    }, 2000);
  };

  const handleApply = (jobId: number, jobTitle: string) => {
    toast({
      title: "Application Initiated",
      description: `Started application process for ${jobTitle}`,
    });
  };

  return (
    <div className="search-bg min-h-screen p-6 -m-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Find Your Dream Job 🔍
          </h1>
          <p className="text-gray-600 mt-2">Search across multiple platforms with AI-powered matching</p>
        </div>

        {/* Search Filters */}
        <Card className="job-card-hover border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Search className="h-6 w-6" />
              Job Search Engine
            </CardTitle>
            <CardDescription className="text-orange-100">Find your next opportunity across multiple platforms</CardDescription>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Technology</label>
                <Select value={selectedTech} onValueChange={setSelectedTech}>
                  <SelectTrigger className="border-2 border-orange-200 focus:border-orange-400">
                    <SelectValue placeholder="Select technology" />
                  </SelectTrigger>
                  <SelectContent>
                    {technologies.map(tech => (
                      <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Location</label>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="border-2 border-orange-200 focus:border-orange-400">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-gray-700">Salary Range</label>
                <Input 
                  placeholder="e.g. 100k-150k"
                  value={salaryRange}
                  onChange={(e) => setSalaryRange(e.target.value)}
                  className="border-2 border-orange-200 focus:border-orange-400"
                />
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handleSearch} 
                  disabled={isSearching}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 h-10"
                >
                  {isSearching ? "Searching..." : "Search Jobs"}
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <label className="text-sm font-medium mb-3 block text-gray-700">Job Portals</label>
              <div className="flex flex-wrap gap-2">
                {jobPortals.map(portal => (
                  <Badge key={portal} variant="outline" className="cursor-pointer hover:bg-orange-100 border-orange-300 text-orange-700 hover:border-orange-400 px-3 py-1">
                    {portal}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Results */}
        <div className="space-y-4">
          <Card className="border-0 shadow-md">
            <CardContent className="p-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Search Results ({mockJobs.length})</h3>
                <Button variant="outline" size="sm" className="bg-white text-orange-600 border-white hover:bg-orange-50">
                  Apply to All Suitable
                </Button>
              </div>
            </CardContent>
          </Card>

          {mockJobs.map(job => (
            <Card key={job.id} className="job-card-hover border-0 shadow-lg">
              <CardContent className="p-6 bg-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{job.title}</h4>
                    <p className="text-lg text-gray-600 font-medium">{job.company}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">{job.portal}</Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 text-red-500" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <Clock className="h-4 w-4 text-blue-500" />
                    {job.posted}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">{tag}</Badge>
                  ))}
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {job.description}
                </p>

                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleApply(job.id, job.title)}
                    className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 border-0"
                  >
                    <Send className="h-4 w-4" />
                    Quick Apply
                  </Button>
                  <Button variant="outline" size="sm" className="border-2 border-gray-300 hover:bg-gray-50">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-2 border-gray-300 hover:bg-gray-50">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
