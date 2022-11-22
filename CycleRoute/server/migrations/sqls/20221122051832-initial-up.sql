/* Replace with your SQL commands */
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    sub character varying(255) NOT NULL,
    start_location character varying(255) NOT NULL,
    end_location character varying(255) NOT NULL,
    distance character varying(255),
    duration character varying(255),
    start_lat double precision NOT NULL,
    start_long double precision NOT NULL,
    end_lat double precision NOT NULL,
    end_long double precision NOT NULL,
    notes character varying(500)
);

CREATE TABLE users (
    id integer NOT NULL,
    fistname character varying(255),
    username character varying(255),
    email character varying(255) NOT NULL,
    sub character varying(255),
    image character varying(255)
);

CREATE SEQUENCE users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


SELECT pg_catalog.set_config('search_path', '', false);

SELECT pg_catalog.setval('favorites_id_seq', 12, true);

SELECT pg_catalog.setval('users_id_seq', 3, true);