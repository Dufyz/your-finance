CREATE TABLE Subscriptions (
    id SERIAL PRIMARY KEY,
    is_active BOOLEAN NOT NULL,
    user_id INT REFERENCES Users (id),
    plan_id INT REFERENCES Plans (id),
    payment_id INT REFERENCES Payments (id),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
