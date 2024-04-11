create table Plans (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    price FLOAT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
)