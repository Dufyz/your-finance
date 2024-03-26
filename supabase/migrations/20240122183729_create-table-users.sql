CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    authId UUID REFERENCES auth.users (id),
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    plan_id INT REFERENCES plans (id),
    plan_expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
