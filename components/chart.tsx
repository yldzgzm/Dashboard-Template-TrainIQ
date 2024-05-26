"use client";
import { useState, useEffect } from 'react';

const Chart = () => {
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

    const skillsInDevelopment = data.skills_in_development;

    return (
        <div className="grid grid-cols-2 gap-4">
            {skillsInDevelopment.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <div className="w-24">{item.skill}</div>
                    <div className="flex-1 h-4 bg-gray-300 rounded-md">
                        <div className="h-full bg-black rounded-md" style={{ width: `${item.employees * 20}px` }}></div>
                    </div>
                    <div className="w-8">{item.employees}</div>
                </div>
            ))}
        </div>
    );
};

export default Chart;
