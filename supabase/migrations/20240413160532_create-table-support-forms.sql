CREATE TABLE SupportForms (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users (id) NOT NULL,
    category_id INT NOT NULL,
    message TEXT NOT NULL,
    is_resolved BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);