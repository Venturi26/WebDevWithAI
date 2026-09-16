const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const publicDir = path.join(__dirname, "..", "public");
const htmlDir = path.join(publicDir, "html");

app.use("/css", express.static(path.join(publicDir, "css")));
app.use("/js", express.static(path.join(publicDir, "js")));
app.use(express.static(htmlDir));

app.get("/", (req, res) => {
  res.sendFile(path.join(htmlDir, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Your website is running! Open http://localhost:${PORT}`);
});
