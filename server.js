const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3001;

let games = [];

app.get("/", (req, res) => {
  res.json({ message: "Game Waitlist API is running" });
});

app.post("/games", (req, res) => {

  if (!req.body.id || !req.body.name || !req.body.platform) {
    return res.status(400).json({
      message: "Invalid input"
    });
  }

  const game = {
  id: req.body.id,
  name: req.body.name.replace(/[<>]/g, ""),
  platform: req.body.platform.replace(/[<>]/g, "")
};

  games.push(game);
  console.log("[Analytics] User interacted with Game Waitlist CRUD API with Route Parameters");

  res.status(201).json({
    message: "Game added successfully",
    game: game
  });
});

app.get("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const game = games.find(g => g.id === id);

  if (!game) {
    return res.status(404).json({
      message: "Game not found"
    });
  }

  res.json(game);
});

app.put("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const game = games.find(g => g.id === id);

  if (!game) {
    return res.status(404).json({
      message: "Game not found"
    });
  }

  if (!req.body.name || !req.body.platform) {
  return res.status(400).json({
    message: "Invalid input"
  });
}

game.name = req.body.name.replace(/[<>]/g, "");
game.platform = req.body.platform.replace(/[<>]/g, "");

  console.log("[Analytics] User interacted with Game Waitlist CRUD API with Route Parameters");

  res.json({
    message: "Game updated successfully",
    game: game
  });
});

app.delete("/games/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = games.findIndex(game => game.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Game not found"
    });
  }

  const deletedGame = games.splice(index, 1);
  console.log("[Analytics] User interacted with Game Waitlist CRUD API with Route Parameters");

  res.json({
    message: "Game deleted successfully",
    game: deletedGame[0]
  });
});

app.get("/games", (req, res) => {

  if (games.length === 0) {
    return res.status(200).json({
      message: "No data found",
      games: []
    });
  }

  res.json(games);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});