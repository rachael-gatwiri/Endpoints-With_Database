CREATE OR ALTER PROCEDURE NoteBookPROC(@id VARCHAR(200), @Title  VARCHAR(500), @Content VARCHAR(1000), @CreatedAt DATE)
AS
BEGIN
    INSERT INTO NoteBookTable(id, Title, Content,CreatedAt) VALUES (@id, @Title, @Content, @CreatedAt)
END

SELECT * FROM NoteBookTable


