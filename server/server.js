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

app.listen(port, () => {
    console.log(`Sever listening on port http://localhost:${port}`)
})