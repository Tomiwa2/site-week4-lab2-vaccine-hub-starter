const { PORT} = require("./config")
const authRoutes = require("./routes/auth")


app.use("/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`🚀Server running http://localhost:${PORT}`)

})