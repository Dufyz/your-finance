CREATE TABLE Banks (
    id SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    code TEXT NOT NULL,
    logo TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
)