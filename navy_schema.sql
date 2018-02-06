



CREATE TABLE fleets (
  id SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) NOT NULL
);
CREATE TABLE ships (
  id SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  date_built DATE
);
CREATE TABLE duites (
  id SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  sailor_id INTEGER,
  ranks INTEGER,
  ship_id INTEGER,
  start_date DATE,
  end_date DATE
);
CREATE TABLE sailors (
  id SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  date_of_birth DATE
);


