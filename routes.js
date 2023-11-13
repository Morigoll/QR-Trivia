const express = require("express");
const router = express.Router();

const questions = [
  {
    id: 1,
    question:
      "The person __________ always listens to me is my best friend.",
    answer: "Who",
    options: ["Who", "Whom", "Whose", "Which"].sort(() => Math.random() - 0.5),
    nextQR: "2",
  },
  {
    id: 2,
    question: "We should believe in _________ when facing challenges.",
    answer: "Ourselves",
    options: ["Ourselves", "Themselves", "Herself", "Himself"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "3",
  },
  {
    id: 3,
    question:
      "My sister and I help ___________ with homework every evening.",
    answer: "Each other",
    options: ["Each other", "Ourselves", "One another", "Themselves"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "4",
  },
  {
    id: 4,
    question:
      "Someone who always tells the truth is considered to be very ________.",
    answer: "Honest",
    options: ["Loyal", "Honest", "Sociable", "Tolerant"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "5",
  },
  {
    id: 5,
    question: "A __________ person is someone who is easy to talk to and approachable.",
    answer: "Friendly",
    options: ["Mature", "Friendly", "Reliable", "Honest"].sort(() => Math.random() - 0.5),
    nextQR: "6",
  },
  {
    id: 6,
    question:
      "A __________ friend will stand by you in good times and bad.",
    answer: "Loyal",
    options: ["Mature", "Loyal", "Patient", "Kind"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "7",
  },
  {
    id: 7,
    question:
      "A __________ person often goes out of their way to help others.",
    answer: "Kind",
    options: ["Sociable", "Kind", "Responsible", "Tolerant"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "8",
  },
  {
    id: 8,
    question:
      "Someone who acts in a grown-up and thoughtful way is considered __________.",
    answer: "Mature",
    options: ["Mature", "Reliable", "Friendly", "Honest"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "9",
  },
  {
    id: 9,
    question:
      "A __________ person doesn't get easily upset or annoyed.",
    answer: "Patient",
    options: [
      "Sociable",
      "Responsible",
      "Loyal",
      "Patient",
    ].sort(() => Math.random() - 0.5),
    nextQR: "10",
  },
  {
    id: 10,
    question:
      "If you can count on someone to do what they say, they are __________.",
    answer: "Reliable",
    options: ["Reliable", "Mature", "Honest", "Sociable"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "11",
  },
  {
    id: 11,
    question:
      "A __________ person takes care of their duties and obligations.",
    answer: "Responsible",
    options: ["Tolerant", "Responsible", "Kind", "Loyal"].sort(
      () => Math.random() - 0.5
    ),
  },
  {
    id: 12,
    question:
      "Being __________ means being accepting of others' differences.",
    answer: "Tolerant",
    options: ["Tolerant", "Loyal", "Reliable", "Kind"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "13",
  },
  {
    id: 13,
    question:
      "An __________ is someone you know but not very well.",
    answer: "Acquaintance",
    options: ["Acquaintance", "Enemy", "Best friend", "Sibling"].sort(() => Math.random() - 0.5),
    nextQR: "14",
  },
  {
    id: 14,
    question:
      "A __________ is someone you trust and share your deepest secrets with.",
    answer: "Best friend",
    options: ["Best friend", "Colleague", "Classmate", "Flatmate"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "15",
  },
  {
    id: 15,
    question:
      "In informal language, a __________ can refer to a friend.",
    answer: "Mate",
    options: ["Mate", "Teammate", "Rival", "Roommate"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "16",
  },
  {
    id: 16,
    question:
      "A __________ is someone you work with.",
    answer: "Colleague",
    options: ["Colleague", "Classmate", "Close friend", "Enemy"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "17",
  },
  {
    id: 17,
    question:
      "A __________ is someone with whom you have a strong and intimate relationship.",
    answer: "Close friend",
    options: ["Close friend", "Enemy", "Rival", "Opponent"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "18",
  },
  {
    id: 18,
    question:
      "An __________ is a person who is actively opposed to someone.",
    answer: "Enemy",
    options: ["Enemy", "Acquaintance", "Best friend", "Teammate"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "19",
  },
  {
    id: 19,
    question: "A __________ is a person competing with another for the same objective.",
    answer: "Rival",
    options: ["Rival", "Flatmate", "Roommate", "Next door neighbour"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "20",
  },
  {
    id: 20,
    question:
      "A __________ is someone you share an apartment with.",
    answer: "Flatmate",
    options: ["Flatmate", "Travel buddy", "Classmate", "Teammate"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "21",
  },
  {
    id: 21,
    question:
      "A __________ lives in the residence next to yours.",
    answer: "Next door neighbour",
    options: ["Next door neighbour", "Opponent", "Colleague", "Mate"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "22",
  },
  {
    id: 22,
    question: "A __________ is a member of your family.",
    answer: "Relative",
    options: ["Relative", "Teammate", "Stranger", "Travel buddy"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "23",
  },
  {
    id: 23,
    question:
      "A __________ is your brother or sister.",
    answer: "Sibling",
    options: ["Sibling", "Stranger", "Teammate", "Travel buddy"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "23",
  },
  {
    id: 24,
    question: "To spend time in a relaxed way with someone is to __________ them.",
    answer: "Hang out with",
    options: ["Hang out with", "Cheer up", "Make you laugh", "Get on with"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "25",
  },
  {
    id: 25,
    question: "When you make someone feel better, you __________ them.",
    answer: "Support",
    options: ["Support", "Forgive", "Judge", "Cheer up"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "26",
  },
  {
    id: 26,
    question:
      "The teacher __________ helped me understand math is Mr. Smith.",
    answer: "Who",
    options: ["Who", "Whose", "When", "Which"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "27",
  },
  {
    id: 27,
    question:
      "I visited the museum __________ has the famous Van Gogh painting.",
    answer: "Which",
    options: [
      "Which",
      "Where",
      "Who",
      "Whose",
    ].sort(() => Math.random() - 0.5),
    nextQR: "28",
  },
  {
    id: 28,
    question:
      "She's the author __________ latest book won an award.",
    answer: "Whose",
    options: ["Whose", "Who", "That", "When"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "29",
  },
  {
    id: 29,
    question:
      "We went to the restaurant __________ serves Italian cuisine.",
    answer: "Which",
    options: ["Which", "Where", "Who", "Whose"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "30",
  },
  {
    id: 30,
    question:
      "I made this cake by __________.",
    answer: "Myself",
    options: ["Myself", "Ourselves", "Themselves", "Yourself"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "31",
  },
  {
    id: 31,
    question:
      "They built their house __________.",
    answer: "Themselves",
    options: ["Themselves", "Ourselves", "Himself", "Itself"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "32",
  },
  {
    id: 32,
    question:
      "She taught __________ to play the piano.",
    answer: "Herself",
    options: ["Herself", "Myself", "Himself", "Ourselves"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "33",
  },
  {
    id: 33,
    question:
      "You should be proud of __________ for doing so well.",
    answer: "Yourself",
    options: [
      "Yourself",
      "Themselves",
      "Himself",
      "Herself",
    ].sort(() => Math.random() - 0.5),
    nextQR: "end",
  },
];

router.get("/start", (req, res) => {
  req.session.lastQuestionId = 0;
  res.render("start", { title: "QR Escape Room" });
});

router.get("/question/:id", function (req, res) {
  const questionId = parseInt(req.params.id, 10) - 1;

  const nextQuestionId = (req.session.lastQuestionId || 0) + 1;
  if (parseInt(req.params.id, 10) !== nextQuestionId) {
    return res.redirect("/scan");
  }

  if (isNaN(questionId) || questionId < 0 || questionId >= questions.length) {
    return res.redirect("/start");
  }

  const currentQuestion = questions[questionId];

  res.render("question", {
    title: "QR Escape Room",
    question: currentQuestion,
  });
});

router.post("/answer/:id", (req, res) => {
  const currentQuestion = questions.find(
    (q) => q.id === parseInt(req.params.id)
  );
  if (req.body.answer === currentQuestion.answer) {
    req.session.lastQuestionId = parseInt(req.params.id, 10);

    if (currentQuestion.nextQR === "end") {
      return res.redirect("/completed");
    }

    res.redirect("/correct/" + req.params.id);
  } else {
    res.redirect("/incorrect/" + req.params.id);
  }
});

router.get("/incorrect/:id", (req, res) => {
  res.render("incorrect", { questionId: req.params.id });
});

router.get("/correct/:id", (req, res) => {
  res.render("correct", { questionId: req.params.id });
});

router.get("/completed", (req, res) => {
  if (req.session.lastQuestionId !== questions.length) {
    return res.redirect("/start");
  }
  res.render("completed");
});

router.get("/scan", (req, res) => {
  const nextQuestionId = req.session.lastQuestionId + 1;

  const totalQuestions = questions.length;
  const nextQuestionNumber = nextQuestionId; // Sumamos 1 para que sea 1-indexed en lugar de 0-indexed

  res.render("scan", {
    totalQuestions: totalQuestions,
    nextQuestionNumber: nextQuestionNumber,
  });
});

module.exports = router;
