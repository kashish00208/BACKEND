const express = require("express");
const app = express();
const port = 3000;

const users = require("./DATA.json");

app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.end("Restfull API");
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users", (req, res) => {
  const data = `<ul>${users
    .map((user) => `<li>${user.first_name}<li/>`)
    .join("")}<ul/>`;
  return res.send(data);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => id === user.id);
  return res.send(user);
});

app.listen(port, () => {
  console.log("port rendering");
});
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => id === user.id);
    return res.send(user);
  })
  .put((req, res) => {
    return res.json({ status: "pending" });
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

app.post('/api/users',(req,res)=>{
    const body = req.body;
    return res.json({ status: "pending" });
    console.log(body)
})
