const express =  require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to domain 1');
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
