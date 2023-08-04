const express = require('express');
const NoteBookrouter = require('./Router/route');

const app = express();

app.use(express.json());
app.use('/notebooks', NoteBookrouter);

app.use((err, req, res, next) => {
    res.json({ Error: err });
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});
