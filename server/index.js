// Подключение express, cors, mongoose
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
// Создаем объект приложения
const app = express();
// Dotenv — загружает переменные среды из файла в process.env, config прочитает ваш файл, разберет содержимое, назначит его process.env
require("dotenv").config();
console.log(1)
// Безопасность 
app.use(cors());
// Анализирует входящие запросы JSON
app.use(express.json());
// Эта функция выполняется для всех типов запросов HTTP в пути /api/auth

app.use("/api/auth", userRoutes);

// app.post("/api/auth/register", (req, res, next) => {
//   console.log(req.body)
// })

// Подключение бд
mongoose.connect(process.env.MONGO_URL, {
  // Устраняет предупреждения об устаревании
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("DB Connection Successful")
}).catch((err)=>{
  console.log(err.message);
})

// Для привязки и прослушивания подключений на указанном узле и порту
const server = app.listen(process.env.PORT, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", process.env.PORT);
});
