CREATE OR ALTER PROCEDURE deleteNoteBook (@id VARCHAR(200))
AS
BEGIN 
    DELETE FROM NoteBookTable WHERE id=@id
END