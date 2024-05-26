"use client";
import { useState, useEffect } from 'react';
import { Calendar } from "lucide-react";

const UpcomingCourses = () => {
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

    const upcomingCourses = data.upcoming_courses;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <ul className="space-y-4">
                {upcomingCourses.map((course, index) => (
                    <li
                        key={index}
                        className="flex items-start p-4 border rounded-lg shadow-sm hover:bg-gray-50 transition"
                    >
                        <Calendar className="h-6 w-6 text-blue-500 mt-1" />
                        <div className="ml-4">
                            <h3 className="text-lg font-medium">{course.title}</h3>
                            <p className="text-gray-600">{course.description}</p>
                            <p className="text-gray-500 mt-2">
                                <span className="font-semibold">Assigned to:</span>{" "}
                                {course.assigned_to}
                            </p>
                            <p className="text-gray-500">
                                <span className="font-semibold">Due date:</span>{" "}
                                {course.due_date}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingCourses;
