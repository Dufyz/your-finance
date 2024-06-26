CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    auth_id UUID REFERENCES auth.users (id) ON DELETE CASCADE,
    "name" TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    currency TEXT NOT NULL DEFAULT 'BRL',
    "language" TEXT NOT NULL DEFAULT 'English',
    plan_id INT REFERENCES plans (id) DEFAULT 1,
    plan_expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
