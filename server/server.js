const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:5173',
}

app.use(express.json())
app.use(cors(corsOptions))

app.get("/api", (req, res) => {
    res.json({
        fruits: [
            "Item 1",
            "Item 2",
            "Item 3"
        ]
    })
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})