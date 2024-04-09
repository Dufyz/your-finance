CREATE TABLE subscriptions (
    id SERIAL PRIMARY KEY,
    isActive BOOLEAN NOT NULL,
    user_id INT REFERENCES users (id),
    plan_id INT REFERENCES plans (id),
    payment_id INT REFERENCES payments (id),
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
