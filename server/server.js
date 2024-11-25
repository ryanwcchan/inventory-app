const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:5173',
}

app.use(express.json())
app.use(cors(corsOptions))

const categoryRoutes = require("./routes/categoryRoutes")
const itemRoutes = require("./routes/itemRoutes")

app.use("/api/categories", categoryRoutes)
app.use("/api/items", itemRoutes)

app.get("/api", (req, res) => {
    res.json({
        inventory: [
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
    console.log(`Sever listening on port http://localhost:${port}`)
})