CREATE TABLE wallets (
    id SERIAL PRIMARY KEY,
    user_id ID REFERENCES users (id) NOT NULL,
    bank_id INT REFERENCES banks (id),
    nickaname TEXT NOT NULL,
    "type" ENUM ('Savings', 'Current', 'Wallet') NOT NULL,
    intial_balance NUMERIC NOT NULL,
    current_balance NUMERIC NOT NULL,
    isMain BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
