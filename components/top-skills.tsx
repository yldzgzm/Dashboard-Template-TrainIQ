"use client";
import { useState, useEffect } from 'react';

const TopSkills = () => {
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

    const topSkills = data.top_skills;

    return (
        <div className="max-w-2xl mx-auto">
            <ul className="grid grid-cols-2 gap-2">
                {topSkills.map((skill, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-start p-7 border rounded-lg shadow-sm hover:bg-gray-50 transition"
                    >
                        <div className="ml-1">
                            <h3 className="text-lg text-nowrap font-medium">{skill.skill}</h3>
                            <p className="text-gray-600">Employees: {skill.employees}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopSkills;
