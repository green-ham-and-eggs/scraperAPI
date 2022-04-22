const express = require('express');
const recipeScraper = require("recipe-scraper");
const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.static("public"))
app.post('/link', async (req,res) => {
  const {link} = req.body;
  let recipe = await recipeScraper(link);
  console.log(recipe)
  res.status(200).send({
    message: 'yooo',
    recipe: recipe
  })
})

app.listen(
  process.env.PORT || 3000,
  () => console.log(`it's alive on port ${PORT}`)
)
