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

INSERT INTO items (name, price, category_id, type, expiry_date, date_created) VALUES
    ('Knife Set', 29.99, 1, 'object', NULL, CURRENT_TIMESTAMP),
    ('Cutting Board', 14.99, 1, 'object', NULL, CURRENT_TIMESTAMP),
    ('Microwave', 99.99, 1, 'object', NULL, CURRENT_TIMESTAMP),

    ('Cushion', 9.99, 2, 'object', NULL, CURRENT_TIMESTAMP),
    ('Lamp', 24.99, 2, 'object', NULL, CURRENT_TIMESTAMP),
    ('Coffee Table', 49.99, 2, 'object', NULL, CURRENT_TIMESTAMP),

    ('Shampoo', 5.99, 3, 'object', NULL, CURRENT_TIMESTAMP),
    ('Towel Set', 19.99, 3, 'object', NULL, CURRENT_TIMESTAMP),
    ('Toilet Paper', 6.99, 3, 'object', NULL, CURRENT_TIMESTAMP),

    ('Pillow', 15.99, 4, 'object', NULL, CURRENT_TIMESTAMP),
    ('Blanket', 39.99, 4, 'object', NULL, CURRENT_TIMESTAMP),
    ('Bed Frame', 150.00, 4, 'object', NULL, CURRENT_TIMESTAMP),

    ('Milk', 2.49, 5, 'food', '2024-12-01', CURRENT_TIMESTAMP),
    ('Eggs', 3.99, 5, 'food', '2024-11-30', CURRENT_TIMESTAMP),
    ('Bread', 1.99, 5, 'food', '2024-12-05', CURRENT_TIMESTAMP),
    ('Cheese', 4.99, 5, 'food', '2024-12-10', CURRENT_TIMESTAMP),

    ('Detergent', 8.99, 6, 'object', NULL, CURRENT_TIMESTAMP),
    ('Dish Soap', 2.99, 6, 'object', NULL, CURRENT_TIMESTAMP),
    ('Mop', 14.99, 6, 'object', NULL, CURRENT_TIMESTAMP);
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