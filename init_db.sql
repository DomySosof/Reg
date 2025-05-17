CREATE TABLE IF NOT EXISTS chart_data (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  currency TEXT NOT NULL,
  year INTEGER NOT NULL,
  month INTEGER NOT NULL,
  day INTEGER NOT NULL,
  left_value REAL NOT NULL,
  right_value REAL NOT NULL
);

-- Insert initial Bitcoin data
INSERT INTO chart_data (currency, year, month, day, left_value, right_value) VALUES
  ('bitcoin', 2025, 1, 1,0, 0);


-- Insert initial Quetzales data
INSERT INTO chart_data (currency, year, month, day, left_value, right_value) VALUES
  ('quetzales', 2025, 1, 1,0, 0);