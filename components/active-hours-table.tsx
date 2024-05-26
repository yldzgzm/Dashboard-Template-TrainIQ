"use client";
import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ActiveHours() {
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

  const activityHours = data.activity_hours;

  return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Date</TableHead>
            <TableHead>Completed Exams</TableHead>
            <TableHead>Taken Lessons</TableHead>
            <TableHead>Active Hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activityHours.map((course, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{course.date}</TableCell>
                <TableCell className="font-medium">{course.exams_completed}</TableCell>
                <TableCell>{course.lessons_taken}</TableCell>
                <TableCell>{course.hours}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}

export default ActiveHours;
