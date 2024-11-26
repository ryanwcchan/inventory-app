const { Client} = require("pg")
require("dotenv").config();

const SQL = `
-- Insert categories
INSERT INTO categories (name) VALUES
    ('Kitchen'),
    ('Living Room'),
    ('Bathroom'),
    ('Bedroom'),
    ('Groceries'),
    ('Cleaning Supplies');

-- Insert items
INSERT INTO items (name, price, category_id, type, expiry_date) VALUES
    -- Kitchen items (objects)
    ('Knife Set', 29.99, 1, 'object', NULL),
    ('Cutting Board', 14.99, 1, 'object', NULL),
    ('Microwave', 99.99, 1, 'object', NULL),

    -- Living Room items (objects)
    ('Cushion', 9.99, 2, 'object', NULL),
    ('Lamp', 24.99, 2, 'object', NULL),
    ('Coffee Table', 49.99, 2, 'object', NULL),

    -- Bathroom items (objects)
    ('Shampoo', 5.99, 3, 'object', NULL),
    ('Towel Set', 19.99, 3, 'object', NULL),
    ('Toilet Paper', 6.99, 3, 'object', NULL),

    -- Bedroom items (objects)
    ('Pillow', 15.99, 4, 'object', NULL),
    ('Blanket', 39.99, 4, 'object', NULL),
    ('Bed Frame', 150.00, 4, 'object', NULL),

    -- Groceries (food with expiry dates)
    ('Milk', 2.49, 5, 'food', '2024-12-01'),
    ('Eggs', 3.99, 5, 'food', '2024-11-30'),
    ('Bread', 1.99, 5, 'food', '2024-12-05'),
    ('Cheese', 4.99, 5, 'food', '2024-12-10'),

    -- Cleaning Supplies (objects)
    ('Detergent', 8.99, 6, 'object', NULL),
    ('Dish Soap', 2.99, 6, 'object', NULL),
    ('Mop', 14.99, 6, 'object', NULL);
`;

async function main() {
    console.log("seeding database...")
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    })
    try {
        await client.connect();
        await client.query(SQL);
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await client.end();
    }
}

main()