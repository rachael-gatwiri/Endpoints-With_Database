BEGIN 
    TRY
          CREATE TABLE NoteBookTable(
                id VARCHAR(200) PRIMARY KEY,
                Title VARCHAR(500) NOT NULL,
                Content VARCHAR(1000) NOT NULL,
                CreatedAt DATE NOT NULL
        )
    END TRY
BEGIN   
    CATCH
        THROW 50001, 'Table already Exists!', 1;
    END CATCH
