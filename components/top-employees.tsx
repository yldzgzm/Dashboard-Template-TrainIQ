"use client";
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TopEmployees() {
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

  const topEmployees = data.top_employees;

  return (
      <div className="space-y-8 w-full max-w-xl">
        {topEmployees.map((employee, index) => (
            <div key={index} className="flex items-center border-t pt-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={`/avatars/${index + 1}.png`} alt="Avatar" />
                <AvatarFallback>
                  {employee.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{employee.name}</p>
                <p className="text-sm text-muted-foreground">{employee.email}</p>
                <p className="text-sm text-muted-foreground">{employee.title}</p>
              </div>
              <div className="ml-auto font-medium">
                Score: {employee.current_score}
              </div>
            </div>
        ))}
      </div>
  );
}
