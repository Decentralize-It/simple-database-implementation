CREATE TABLE tasks(
  id SERIAL,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255),
  is_complete BOOLEAN DEFAULT false
);
