CREATE TABLE cards (
    id SERIAL PRIMARY KEY,
    user_id ID REFERENCES users (id) NOT NULL,
    bank_id INT REFERENCES banks (id),
    nickaname TEXT NOT NULL,
    isMain BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
