CREATE OR ALTER PROCEDURE getSingleNoteBook (@id VARCHAR(200))
AS  
    BEGIN 
        SELECT * FROM NoteBookTable WHERE id = @id
    END