import { Car } from "@/actions/cars/brands";
import React from "react";
import { LocationIcon } from "../common/icons";

type CarCardProps = {
    car: Car;
};

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <div className="card bg-base-300 shadow-xl mx-auto">
            <figure>
                <img src={car.image || ""} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg text-primary">{car.name}</h2>

                <div className="badge badge-neutral badge-sm">
                    {car.body_types?.body}
                </div>

                {/* Location and mileage */}
                <div className="flex justify-between items-center text-sm ml-1 mr-1">
                    <p>{`${car.mileage?.toLocaleString("en-US")} Km`}</p>
                    <p className="flex items-center justify-end">
                        <LocationIcon classes="mr-1" /> {car.places?.place}
                    </p>
                </div>

                {/* Price and Monthly Price */}
                <div className="flex justify-between items-center text-sm">
                    <div className="badge badge-secondary badge-lg font-bold">
                        {`RM ${car.price?.toLocaleString("en-US")}`}
                    </div>

                    <p className="text-xs flex items-center justify-end">
                        {`${car.month_price?.toLocaleString("en-US")} /month`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
