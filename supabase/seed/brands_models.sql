-- Insert data into brands table
INSERT INTO brands (name, logo) VALUES
('Audi', 'https://b2c-cdn.carsome.my/B2C/fd3d4c8f-0b4b-429b-b651-99dbf28e5b16.png'),
('BMW', 'https://b2c-cdn.carsome.my/B2C/017ee584-024f-4512-a183-a21e127264ea.png'),
('Citroen', ''),
('Daihatsu', 'https://b2c-cdn.carsome.my/B2C/1c2c8e7b-69e6-4198-8f82-fc6a1029211e.png'),
('Ford', 'https://b2c-cdn.carsome.my/B2C/c263653c-03b5-47e7-b33c-e0de010d6a71.png'),
('Honda', 'https://b2c-cdn.carsome.my/B2C/901f99cd-ce87-46f8-914b-1a90b6fb45de.png'),
('Hyundai', 'https://b2c-cdn.carsome.my/B2C/f093c68e-5b4f-4047-af47-ae3c62637609.png'),
('Inokom', 'https://b2c-cdn.carsome.my/B2C/5efea6e4-382e-4bb5-9f9a-af8794163fa2.png'),
('Isuzu', 'https://b2c-cdn.carsome.my/B2C/51566808-ae0c-4e2a-b30d-31bdee19f599.png'),
('Kia', 'https://b2c-cdn.carsome.my/B2C/330365c1-6beb-4804-b081-a05553322c32.png'),
('Land Rover', 'https://b2c-cdn.carsome.my/B2C/2cf11188-7389-49d7-a947-79ce67e3fca5.png'),
('Lexus', 'https://b2c-cdn.carsome.my/B2C/6b73d307-1624-46dd-ac4f-8e0ca428dfc8.png'),
('MINI', 'https://b2c-cdn.carsome.my/B2C/7794508c-7495-46da-b8bd-bfbdc14a79ff.png'),
('Mazda', 'https://b2c-cdn.carsome.my/B2C/16e48c6b-3785-4480-8016-1e979331c593.png'),
('Mercedes-Benz', 'https://b2c-cdn.carsome.my/B2C/5c607ff9-8555-4fd9-9afb-0693076ee09d.png'),
('Mitsubishi', 'https://b2c-cdn.carsome.my/B2C/f56b6756-ec79-4298-8487-75275a14ce6f.png'),
('Naza', 'https://b2c-cdn.carsome.my/B2C/c578067f-371b-43b7-b1db-b2078a9e7506.png'),
('Neta', ''),
('Nissan', 'https://b2c-cdn.carsome.my/B2C/591a5015-9edc-4ce7-93a2-040905f1c629.png'),
('Perodua', 'https://b2c-cdn.carsome.my/B2C/1fddb7f2-086e-4ea2-9f67-278ef57a4f1f.png'),
('Peugeot', 'https://b2c-cdn.carsome.my/B2C/e177d30d-b6c5-4dc9-84e8-fd08a4207c2a.png'),
('Proton', 'https://b2c-cdn.carsome.my/B2C/6966cca4-533c-4cf8-b3fb-3dd060742a5f.png'),
('Renault', 'https://b2c-cdn.carsome.my/B2C/5a84a05b-70ed-48ec-92bf-cf0b55076350.png'),
('Subaru', 'https://b2c-cdn.carsome.my/B2C/371b9234-e617-475d-a97b-39831e3a929d.png'),
('Suzuki', 'https://b2c-cdn.carsome.my/B2C/b4441570-3f11-45a8-871d-afea80564b96.png'),
('Toyota', 'https://b2c-cdn.carsome.my/B2C/d6fd36a1-7f18-464b-83fe-21843dd5cd4e.png'),
('Volkswagen', 'https://b2c-cdn.carsome.my/B2C/134513de-3cf8-4336-9ca1-c12faab10877.png'),
('Volvo', 'https://b2c-cdn.carsome.my/B2C/a1614dcb-e537-44d7-921e-0585992e87d2.png');

-- Insert data into models table
INSERT INTO models (name, brand_id) VALUES
-- Audi Models
('Q3', 1),
('TT', 1),
-- BMW Models
('218i', 2),
('318i', 2),
('320i', 2),
('330i', 2),
('523i', 2),
('530i', 2),
('740Le', 2),
('X1', 2),
('X3', 2),
-- Citroen Models
('DS4', 3),
-- Daihatsu Models
('Gran Max', 4),
-- Ford Models
('EcoSport', 5),
('Fiesta', 5),
-- Honda Models
('Accord', 6),
('BR-V', 6),
('CR-V', 6),
('CR-Z', 6),
('City', 6),
('Civic', 6),
('HR-V', 6),
('Insight', 6),
('Jade', 6),
('Jazz', 6),
('Odyssey', 6),
-- Hyundai Models
('Sonata', 7),
('Tucson', 7),
-- Inokom Models
('Elantra', 8),
('i10', 8),
-- Isuzu Models
('D-Max', 9),
-- Kia Models
('Cerato', 10),
('Optima K5', 10),
('Picanto', 10),
('Rio', 10),
('Sorento', 10),
('Sportage', 10),
-- Land Rover Models
('Range Rover Evoque', 11),
-- Lexus Models
('NX200t', 12),
('RX300', 12),
('RX350', 12),
-- MINI Models
('Cooper', 13),
-- Mazda Models
('2', 14),
('3', 14),
('6', 14),
('BT-50', 14),
('Biante', 14),
('CX-3', 14),
('CX-30', 14),
('CX-5', 14),
('CX-8', 14),
-- Mercedes-Benz Models
('A200', 15),
('A250', 15),
('C200', 15),
('C200 CGI', 15),
('C250', 15),
('CLA200', 15),
('E200', 15),
('E200 CGI', 15),
('E250', 15),
('E250 CGI', 15),
('GLA200', 15),
('GLA250', 15),
('GLC250', 15),
-- Mitsubishi Models
('ASX', 16),
('Attrage', 16),
('Lancer', 16),
('Mirage', 16),
('Outlander', 16),
('Triton', 16),
('Xpander', 16),
-- Naza Models
('Forte', 17),
-- Neta Models
('V', 18),
-- Nissan Models
('Almera', 19),
('Grand Livina', 19),
('NV350 Urvan', 19),
('Navara', 19),
('Serena', 19),
('Sylphy', 19),
('Teana', 19),
('Urvan', 19),
('X-Trail', 19),
-- Perodua Models
('AXIA', 20),
('Alza', 20),
('Aruz', 20),
('Ativa', 20),
('Bezza', 20),
('Kelisa', 20),
('Kenari', 20),
('Myvi', 20),
('Viva', 20),
-- Peugeot Models
('2008', 21),
('208', 21),
('3008', 21),
('308', 21),
('408', 21),
('5008', 21),
-- Proton Models
('Arena', 22)
('Ertiga', 22)
('Exora', 22)
('Inspira', 22)
('Iriz', 22)
('Perdana', 22)
('Persona', 22)
('Preve', 22)
('Saga', 22)
('Satria', 22)
('Suprima S', 22)
('X50', 22)
('X70', 22)
-- Renault Models
('Captur', 22),
-- Subaru Models
('Forester', 23),
('XV', 23),
-- Suzuki Models
('Grand Vitara', 24),
('SX4', 24),
('Swift', 24),
-- Toyota Models
('Alphard', 25),
('Avanza', 25),
('C-HR', 25),
('Camry', 25),
('Corolla Altis', 25),
('Corolla Cross', 25),
('Estima', 25),
('Fortuner', 25),
('Harrier', 25),
('Hiace', 25),
('Hilux', 25),
('Innova', 25),
('Prius', 25),
('Sienta', 25),
('Vellfire', 25),
('Vios', 25),
('Voxy', 25),
('Wish', 25),
('Yaris', 25),
-- Volkswagen Models
('Arteon', 26),
('Golf', 26),
('Jetta', 26),
('Passat', 26),
('Polo', 26),
('Scirocco', 26),
('Tiguan', 26),
('Vento', 26),
-- Volvo Models
('XC40', 27);