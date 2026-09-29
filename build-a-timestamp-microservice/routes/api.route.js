import express from "express"

const router = express.Router()

router.get(["/", "/:data"], (req, res) => {
  const input = req.params.data;
  let date;

  if (input === undefined) {
    date = new Date();
  } else if (/^\d+$/.test(input)) {
    date = new Date(Number(input));
  } else {
    date = new Date(input);
  }

  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

export default router