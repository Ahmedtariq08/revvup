import { Car } from "@/actions/cars/brands";
import React from "react";
import CarCard from "./CarCard";

interface CardGridProps {
    cars: Car[];
}

const CardGrid: React.FC<CardGridProps> = ({ cars }) => {
    return (
        <div className="mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cars.map((car, index) => (
                    <CarCard key={index} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CardGrid;
