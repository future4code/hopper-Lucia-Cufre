CREATE TABLE
    IF NOT EXISTS labook_friends(
        user_id VARCHAR(255) NOT NULL,
        friend_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES labook_users (id),
        FOREIGN KEY (friend_id) REFERENCES labook_users (id)
    )

    
    