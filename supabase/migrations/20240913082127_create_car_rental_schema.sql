-- Define ENUM type for transmission
CREATE TYPE transmission_type AS ENUM ('Automatic', 'Manual');

-- engines table
CREATE TABLE engines (
    id SERIAL PRIMARY KEY,
    engine VARCHAR(255) NOT NULL
);

-- brands table
CREATE TABLE brands (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL
);

-- models table
CREATE TABLE models (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand_id INT REFERENCES brands(id) ON DELETE CASCADE
);

-- variants table (using transmission ENUM)
CREATE TABLE variants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    engine_id INT REFERENCES engines(id) ON DELETE SET NULL,
    transmission transmission_type NOT NULL  -- ENUM for transmission
);

-- bodytypes table
CREATE TABLE body_types (
    id SERIAL PRIMARY KEY,
    body VARCHAR(255) NOT NULL
);

-- colors table
CREATE TABLE colors (
    id SERIAL PRIMARY KEY,
    color VARCHAR(255) NOT NULL
);

-- places table
CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    place VARCHAR(255) NOT NULL
);

-- stores table
CREATE TABLE stores (
    id SERIAL PRIMARY KEY,
    store VARCHAR(255) NOT NULL,
    place_id INT REFERENCES places(id) ON DELETE CASCADE
);

-- fuel_types table
CREATE TABLE fuel_types (
    id SERIAL PRIMARY KEY,
    fuel_type VARCHAR(255) NOT NULL
);

-- cars table (prices denormalized)
CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    brand_id INT REFERENCES brands(id) ON DELETE SET NULL,
    model_id INT REFERENCES models(id) ON DELETE SET NULL,
    variant_id INT REFERENCES variants(id) ON DELETE SET NULL,
    color_id INT REFERENCES colors(id) ON DELETE SET NULL,
    bodytype_id INT REFERENCES bodytypes(id) ON DELETE SET NULL,
    store_id INT REFERENCES stores(id) ON DELETE SET NULL,
    place_id INT REFERENCES places(id) ON DELETE SET NULL,
    fuel_type_id INT REFERENCES fuel_types(id) ON DELETE SET NULL,
    price DECIMAL(10, 2),  -- Denormalized price
    month_price DECIMAL(10, 2),
    campaign_discount DECIMAL(10, 2),
    is_available BOOLEAN DEFAULT TRUE,
    license_plate VARCHAR(255) NOT NULL,
    last_updated TIMESTAMP DEFAULT NOW()
);

-- Create unique index on license_plate for faster lookups
CREATE UNIQUE INDEX idx_cars_license_plate ON cars (license_plate);

-- images table (combined with 'type' column)
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    car_id INT REFERENCES cars(id) ON DELETE CASCADE,
    name VARCHAR(255),
    url VARCHAR(255),
    "order" INT,
    type VARCHAR(10) CHECK (type IN ('inner', 'outer'))  -- 'inner' or 'outer'
);

-- stores_places join table (optional many-to-many relationship between stores and places)
CREATE TABLE store_places (
    store_id INT REFERENCES stores(id),
    place_id INT REFERENCES places(id),
    PRIMARY KEY (store_id, place_id)
);

-- Create indexes on foreign keys for faster querying
CREATE INDEX idx_models_brand_id ON models (brand_id);
CREATE INDEX idx_variants_engine_id ON variants (engine_id);
CREATE INDEX idx_cars_brand_id ON cars (brand_id);
CREATE INDEX idx_cars_model_id ON cars (model_id);
CREATE INDEX idx_cars_variant_id ON cars (variant_id);
CREATE INDEX idx_cars_color_id ON cars (color_id);
CREATE INDEX idx_cars_bodytype_id ON cars (bodytype_id);
CREATE INDEX idx_cars_store_id ON cars (store_id);
CREATE INDEX idx_cars_place_id ON cars (place_id);
CREATE INDEX idx_cars_fuel_type_id ON cars (fuel_type_id);
