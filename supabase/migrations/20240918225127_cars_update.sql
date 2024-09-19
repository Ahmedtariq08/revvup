-- Migration to update cars table and remove fuel_types table

-- Step 1: Drop the foreign key constraint on cars for fuel_type_id
ALTER TABLE cars DROP CONSTRAINT IF EXISTS cars_fuel_type_id_fkey;

-- Step 2: Remove the fuel_type_id column from cars
ALTER TABLE cars DROP COLUMN IF EXISTS fuel_type_id;

-- Step 3: Remove the fuel_types table
DROP TABLE IF EXISTS fuel_types;

-- Step 4: Alter cars table to add new columns
ALTER TABLE cars
ADD COLUMN listing_date DATE,  -- Date of listing
ADD COLUMN mileage INT,  -- Mileage as a number
ADD COLUMN name VARCHAR(255),  -- Name of the car
ADD COLUMN year INT,  -- Year as an integer
ADD COLUMN highlights TEXT[],  -- Highlights as an array of strings
ADD COLUMN image TEXT,  -- Image URL stored as TEXT
ADD COLUMN vin_code VARCHAR(50),  -- VIN code of the car
ADD COLUMN fuel_type VARCHAR(50);  -- Fuel type as a string (e.g., Petrol, Diesel)
