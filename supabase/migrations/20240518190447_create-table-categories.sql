CREATE TABLE transaction_categories {
    id INT SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users (id) NOT NULL,
    name TEXT NOT NULL,
    icon TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
}