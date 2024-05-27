CREATE TYPE wallets_type AS ENUM ('saving', 'current', 'wallet');

CREATE TABLE Wallets (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users (id) ON DELETE CASCADE,
    bank_id INT DEFAULT NULL,
    nickname TEXT NOT NULL,
    "type" wallets_type NOT NULL DEFAULT 'wallet',
    initial_balance NUMERIC NOT NULL,
    current_balance NUMERIC NOT NULL,
    is_main BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
