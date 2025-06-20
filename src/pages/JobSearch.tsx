
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
    <div className="space-y-6">
      {/* Search Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Job Search
          </CardTitle>
          <CardDescription>Find your next opportunity across multiple platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Technology</label>
              <Select value={selectedTech} onValueChange={setSelectedTech}>
                <SelectTrigger>
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
              <label className="text-sm font-medium mb-2 block">Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
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
              <label className="text-sm font-medium mb-2 block">Salary Range</label>
              <Input 
                placeholder="e.g. 100k-150k"
                value={salaryRange}
                onChange={(e) => setSalaryRange(e.target.value)}
              />
            </div>

            <div className="flex items-end">
              <Button 
                onClick={handleSearch} 
                disabled={isSearching}
                className="w-full"
              >
                {isSearching ? "Searching..." : "Search Jobs"}
              </Button>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium mb-2 block">Job Portals</label>
            <div className="flex flex-wrap gap-2">
              {jobPortals.map(portal => (
                <Badge key={portal} variant="outline" className="cursor-pointer hover:bg-accent">
                  {portal}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Job Results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Search Results ({mockJobs.length})</h3>
          <Button variant="outline" size="sm">
            Apply to All Suitable
          </Button>
        </div>

        {mockJobs.map(job => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-semibold text-primary">{job.title}</h4>
                  <p className="text-lg text-muted-foreground">{job.company}</p>
                </div>
                <Badge variant="secondary">{job.portal}</Badge>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4" />
                  {job.salary}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {job.posted}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {job.description}
              </p>

              <div className="flex gap-2">
                <Button 
                  onClick={() => handleApply(job.id, job.title)}
                  className="flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Quick Apply
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
