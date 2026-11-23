import express from "express";

const PORT = 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Üdvözöllek az oldalamon!",
    faszi: "Pasi",
    who_do_you_think_you_are: "It's me, it's verity",
  });
});
app.listen(PORT, () => {
  console.log(`Fut a szerver a porton : ${PORT} yeeee`);
});
