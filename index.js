import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var posts = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/new", (req, res) => {
  posts.push(req.body);
  res.redirect("/");
});

app.post("/delete/:index", (req, res) => {
  posts.splice(req.params.index, 1);
  res.redirect("/");
});

app.get("/edit/:index", (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < posts.length) {
    const post = posts[index];
    res.render("edit.ejs", {
      post: post,
      index: index,
    });
  } else {
    res.status(404).send("Post not found");
  }
});

app.post("/edit/:index", (req, res) => {
  posts[req.params.index] = req.body;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
