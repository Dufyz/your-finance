CREATE TYPE transaction_type AS ENUM ('income', 'expense');

CREATE TABLE Transactions (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users (id) NOT NULL,
    wallet_id INT REFERENCES wallets (id),
    card_id INT REFERENCES cards (id),
    category_id INT,
    "value" NUMERIC NOT NULL,
    "description" TEXT NOT NULL,
    "type" transaction_type NOT NULL,
    transaction_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);