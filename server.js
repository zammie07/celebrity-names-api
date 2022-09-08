const express = require("express");
const app = express();
const PORT = 8000;

const celebrities = {
  "charlie sheen": {
    age: 56,
    birthName: "Carlos Irwin Estevez",
    birthLocation: "New York",
  },
  "ryan gosling": {
    age: 41,
    birthName: "Ryan Thomas Gosling",
    birthLocation: "London, Canada",
  },
  unknown: {
    age: 0,
    birthName: "Unknown",
    birthLocation: "Unknown",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (request, response) => {
  const celebrityName = request.params.name.toLowerCase();
  if (celebrities[celebrityName]) {
    response.json(celebrities[celebrityName]);
  } else {
    response.json(celebrities["unknown"]);
  }
  response.json(celebrities);
});

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}! Better go catch it!`);
});
