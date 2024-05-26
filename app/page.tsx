"use client";
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { TopEmployees } from "@/components/top-employees";
import { Search } from "@/components/search";
import TeamSwitcher from "@/components/team-switcher";
import { UserNav } from "@/components/user-nav";

import { ArchiveIcon } from "lucide-react";

import TopSkills from "@/components/top-skills";
import UpcomingCourses from "@/components/upcoming-courses";
import { ScrollArea } from "@/components/ui/scroll-area";
import InprogressCourses from "@/components/inprogress-courses";
import ActiveHours from "@/components/active-hours-table";
import Teams from "@/components/teams";
import Chart from "@/components/chart";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://demotrainiq.com/case/dashboard');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setData(data.data); // Update to reflect the structure of your data
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
      <>
        <div className="hidden flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <div className="flex items-center space-x-2">
                <CalendarDateRangePicker />
                <Button>Download</Button>
              </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="teams">Teams</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4  ">
                <div className="grid gap-10 md:grid-cols-3  lg:grid-cols-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Completed
                      </CardTitle>
                      <ArchiveIcon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent className=" ">
                      <div className="text-2xl font-bold">
                        {data.total_completed_courses}
                      </div>
                      <p className="text-xs space-x-1 text-muted-foreground">
                        Courses
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Employees
                      </CardTitle>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {data.total_employees}
                      </div>
                      <p className="text-xs text-muted-foreground">Employees</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Skills in Development</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Chart />
                    </CardContent>
                  </Card>

                  <Carousel className="w-full col-span-3 h-full ">
                    <CarouselContent>
                      <CarouselItem className="">
                        <div className="p-1">
                          <Card className=" w-full h-[500px] ">
                            <CardHeader>
                              <CardTitle>Top Employees</CardTitle>
                              <CardDescription>
                                Average employees score: {data.average_employee_score}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center p-6">
                              <TopEmployees/>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1">
                          <Card className=" w-full h-[500px] justify-center items-center ">
                            <CardHeader>
                              <CardTitle>Top Skills</CardTitle>
                              <CardDescription>
                                Top skills based on current score
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center p-6">
                              <TopSkills />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1">
                          <Card className=" h-[500px]  w-full">
                            <CardHeader>
                              <CardTitle>In Progress Courses</CardTitle>
                              <CardDescription>
                                In Progress Courses.
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center mx-auto justify-center max-w-2xl">
                              <ScrollArea className="w-full h-[400px] border rounded border-x-0 items-center ">
                                <InprogressCourses />
                              </ScrollArea>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="p-1">
                          <Card className=" h-[500px]  w-full">
                            <CardHeader>
                              <CardTitle>Upcoming Courses</CardTitle>
                              <CardDescription>
                                Upcoming courses for the next 30 days.
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center mx-auto justify-center max-w-2xl">
                              <ScrollArea className="w-full h-[400px] border rounded border-x-0 items-center ">
                                <UpcomingCourses/>
                              </ScrollArea>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </TabsContent>


              <TabsContent value="teams" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Employees</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <Teams/>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2">
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Activity Hours of the Week</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <ActiveHours/>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </>
  );
}
