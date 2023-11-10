const express = require('express');
const cors = require('cors');
const { StatusCodes } = require('http-status-codes');

const profileOfUser = require('./routes/profileRoute');


app = express();


app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.status(StatusCodes.OK).json({
        success: true,
        message: 'backend api of "profile page" is up and running successfully.'
    })
});

app.use(profileOfUser);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on PORT: ${PORT}`);
});