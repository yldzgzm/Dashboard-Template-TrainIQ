"use client";
import { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const Teams = () => {
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

    const teams = data.teams;

    return (
        <Carousel className="w-full col-span-3 h-full ">
            <CarouselContent>
                {teams.map((team, index) => (
                    <CarouselItem key={index}>
                        <ScrollArea className="w-full h-[400px] border rounded border-0 items-center ">
                            <div className="p-1">
                                <div className="w-full h-[500px]">
                                    <h1 className="text-lg font-bold">{team.title}</h1>
                                    <p>{team.description}</p>
                                    <div className="employee-list grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {team.employees.map((employee, empIndex) => (
                                            <div key={empIndex}
                                                 className="flex items-start p-4 border rounded-lg shadow-sm hover:bg-gray-50 transition mt-3"
                                            >
                                                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                                                    <div className="bg-white p-4 sm:p-6">
                                                        <h4 className="text-lg font-bold">{employee.name}</h4>
                                                        <p><span className="font-semibold">Title:</span>{employee.title}</p>
                                                        <p><span className="font-semibold">Email:</span> {employee.email}</p>
                                                        <p><span className="font-semibold">Current Score:</span> {employee.current_score}</p>
                                                        <p><span className="font-semibold">Lessons Taken:</span> {employee.lessons_taken}</p>
                                                        <p><span className="font-semibold">Skills Being Developed:</span> {employee.skills_being_developed.join(', ')}</p>
                                                    </div>
                                                </article>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default Teams;
