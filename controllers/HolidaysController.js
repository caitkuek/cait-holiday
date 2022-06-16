const express = require("express");
const Holidays = require("../models/Holidays");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();


router.post("/", async (req, res) => {
//   if (req.body.likes < 0) {
//       res.status(404).send("likes can't be negative")
//   }
    try {
        const holiday = await Holidays.create(req.body);
        res.status(StatusCodes.CREATED).send(holiday);
    } catch (error) {
        res.send(error)
    }
});

//? Request + Cookie -> Session -> req.session
router.get("/:id", async (req, res) => {
    if (!req.session.user) {
        res.status(StatusCodes.UNAUTHORIZED).send({ status: "fail", data: "no access"});
    } else {
    const id = req.params.id;
    try {
        const holiday = await Holidays.findById(id);
        if (holiday === null) {
            res
            .status(StatusCodes.NOT_FOUND)
            .send({ status: "fail", data: "Holiday Not Found"});
        } else {
            res.status(StatusCodes.OK).send(holiday);
        }
      } catch (error) {
        // console.log("error", error);
        res.send(error);
      }
    }
});

module.exports = router;

// const express = require("express");
// const Holidays = require("../models/Holidays");
// const { StatusCodes } = require("http-status-codes")

// const router = express.Router();

// router.post("/", async (req, res) => {
//   if (req.body.likes < 0) {
//     res.status(400).send("Likes can't be negative");
//   }
//   try {
//     const holiday = await Holidays.create(req.body);
//     res.status(StatusCodes.CREATED).send(holiday);
//   } catch (error) {
//     res.send(error);
//   }
// });

// module.exports = router;
