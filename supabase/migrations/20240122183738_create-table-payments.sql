CREATE TABLE Payments (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users (id),
    plan_id INT REFERENCES Plans (id),
    amount FLOAT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
