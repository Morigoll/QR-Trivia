const express = require("express");
const router = express.Router();

const questions = [
  {
    id: 1,
    question: "¿Cuál es la capital de Inglaterra?",
    answer: "Londres",
    options: ["Londres", "Madrid", "Paris", "Berlín"],
    nextQR: "2",
  },
  {
    id: 2,
    question: "¿Cuál es la capital de España?",
    answer: "Madrid",
    options: ["Londres", "Madrid", "Paris", "Berlín"],
    nextQR: "end",
  },
];

const incrementProgress = (currentProgress) => {
  const progressIncrement = 100 / questions.length;
  return currentProgress + progressIncrement;
};

router.get("/start", (req, res) => {
  req.session.lastQuestionId = 0;
  res.render("start", { title: "QR Escape Room" });
});

router.get("/question/:id", function (req, res) {
  const questionId = parseInt(req.params.id, 10) - 1;

  const nextQuestionId = (req.session.lastQuestionId || 0) + 1;
  if (parseInt(req.params.id, 10) !== nextQuestionId) {
      return res.redirect(`/question/${nextQuestionId}`);
  }

  if (isNaN(questionId) || questionId < 0 || questionId >= questions.length) {
    return res.redirect("/start");
  }

  const currentQuestion = questions[questionId];
  const progress = incrementProgress(questionId);

  res.render("question", {
    title: "QR Escape Room",
    question: currentQuestion,
    progress: progress,
  });
});

router.post("/answer/:id", (req, res) => {
  const currentQuestion = questions.find(
    (q) => q.id === parseInt(req.params.id)
  );
  if (req.body.answer === currentQuestion.answer) {
    req.session.lastQuestionId = parseInt(req.params.id, 10);
    req.session.progress = incrementProgress(req.session.progress || 0);

    if (currentQuestion.nextQR === "end") {
        return res.redirect("/completed");
    }

    res.redirect("/correct/" + req.params.id);
  } else {
    res.redirect("/incorrect/" + req.params.id);
  }
});

router.get("/incorrect/:id", (req, res) => {
  const progress = req.session.progress || 0;
  res.render("incorrect", { questionId: req.params.id, progress: progress });
});

router.get("/correct/:id", (req, res) => {
  const progress = req.session.progress || 0;
  res.render("correct", { questionId: req.params.id, progress: progress });
});

router.get("/completed", (req, res) => {
  if (req.session.lastQuestionId !== questions.length) {
    return res.redirect("/start");
  }
  res.render("completed");
});

router.get("/scan", (req, res) => {
  const progress = req.session.progress || 0;
  res.render("scan", { progress: progress });
});

module.exports = router;
