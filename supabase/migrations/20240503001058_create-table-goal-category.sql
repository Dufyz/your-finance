CREATE TABLE goal_category (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users (id) ON DELETE CASCADE,
    category_id INT NOT NULL,
    target_value NUMERIC NOT NULL,
    current_value NUMERIC NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
)