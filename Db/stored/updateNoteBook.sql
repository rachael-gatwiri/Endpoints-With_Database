CREATE OR ALTER PROCEDURE updateNotebook (@id VARCHAR(200), @Title  VARCHAR(500), @Content VARCHAR(1000), @CreatedAt DATE)
AS
    BEGIN
        UPDATE NoteBookTable SET id= @id, Title = @Title, Content = @Content, CreatedAt = @CreatedAt WHERE id= @id
    END