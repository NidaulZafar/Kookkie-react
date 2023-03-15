import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
console.log("index.js", process.env.SECRET);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
