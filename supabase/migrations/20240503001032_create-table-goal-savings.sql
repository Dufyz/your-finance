CREATE TABLE GoalSavings (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users (id) NOT NULL,
    goal_date DATE NOT NULL,
    target_value NUMERIC NOT NULL,
    current_value NUMERIC NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
)