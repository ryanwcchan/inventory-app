const pool = require("./pool")

const createTables = async () => {
  try {
    // Query to create categories table
    const createCategoriesTableQuery = `
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    // Query to create items table
    const createItemsTableQuery = `
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
        type VARCHAR(50) NOT NULL,
        expiry_date DATE,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;

    // Execute the queries
    await pool.query(createCategoriesTableQuery);
    console.log('Categories table created successfully.');

    await pool.query(createItemsTableQuery);
    console.log('Items table created successfully.');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    // Close the database connection
    pool.end();
  }
};

// Run the script
createTables();
