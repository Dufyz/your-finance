CREATE TYPE appearance_type AS ENUM ('light', 'dark');

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    auth_id UUID REFERENCES auth.users (id),
    "name" TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    country TEXT NOT NULL DEFAULT 'Brazil',
    currency TEXT NOT NULL DEFAULT 'R$',
    "language" TEXT NOT NULL DEFAULT 'English',
    "time_zone" TEXT NOT NULL DEFAULT 'America/Sao_Paulo',
    appearance appearance_type NOT NULL DEFAULT 'light',
    phone TEXT,
    plan_id INT REFERENCES plans (id) DEFAULT 1,
    plan_expires_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
