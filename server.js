const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to SQLite database
const db = new sqlite3.Database('chart_data.db', (err) => {
  if (err) {
    console.error('Error connecting to SQLite:', err.message);
  } else {
    console.log('Connected to SQLite database.');
  }
});

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to get data for a specific currency
app.get('/api/data/:currency', (req, res) => {
  const currency = req.params.currency;
  db.all(
    'SELECT year, month, day, left_value, right_value FROM chart_data WHERE currency = ? ORDER BY year, month, day',
    [currency],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      const data = {
        left: rows.map(row => ({
          time: { year: row.year, month: row.month, day: row.day },
          value: row.left_value
        })),
        right: rows.map(row => ({
          time: { year: row.year, month: row.month, day: row.day },
          value: row.right_value
        }))
      };
      res.json(data);
    }
  );
});

// API to add new data
app.post('/api/data', (req, res) => {
  const { currency, year, month, day, left_value, right_value } = req.body;
  db.run(
    'INSERT INTO chart_data (currency, year, month, day, left_value, right_value) VALUES (?, ?, ?, ?, ?, ?)',
    [currency, year, month, day, left_value, right_value],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ success: true, id: this.lastID });
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});