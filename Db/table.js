const mssql = require('mssql');
const { sqlConfig } = require('../Config/config');

const NoteBookTable = async () => {
    try {
        const table = `
        BEGIN 
            TRY
                CREATE TABLE NoteBookTable(
                    id VARCHAR(200) PRIMARY KEY,
                    Title VARCHAR(500) NOT NULL,
                    Content VARCHAR(1000) NOT NULL,
                    CreatedAt DATE NOT NULL
                )
            END TRY
            BEGIN CATCH
                IF ERROR_NUMBER() = 2714
                BEGIN
                    -- Table already exists, handle it as you wish (e.g., log a message)
                    PRINT 'Table NoteBookTable already exists.'
                END
                ELSE
                    THROW;
            END CATCH`;

        const pool = await mssql.connect(sqlConfig);
        await pool.request().query(table);
        console.log('The table has been Created Successfully');
    } catch (error) {
        console.error('Error creating table:', error.message);
    }
};

module.exports = {
    NoteBookTable
};
