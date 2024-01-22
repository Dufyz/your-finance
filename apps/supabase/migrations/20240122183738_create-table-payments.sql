CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    user_id UUID REFERENCES users (id),
    plan_id INT REFERENCES plans (id),
    amount FLOAT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
