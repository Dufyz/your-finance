CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users (id),
    name TEXT NOT NULL,
    plan_id INT REFERENCES plans (id),
    plan_expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
