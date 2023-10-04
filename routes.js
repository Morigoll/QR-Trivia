const express = require("express");
const router = express.Router();

const questions = [
  {
    id: 1,
    question:
      "You do this when you need to enter data into your computer using the keyboard.",
    answer: "Type",
    options: ["Drag", "Paste", "Copy", "Type"].sort(() => Math.random() - 0.5),
    nextQR: "2",
  },
  {
    id: 2,
    question: "Which phrasal verb mean “understand”?",
    answer: "Make up",
    options: ["Blow up", "Keep on", "Turn into", "Make up"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "3",
  },
  {
    id: 3,
    question:
      "How does someone feel when they've just seen a really impressive magic trick?",
    answer: "Astonished",
    options: ["Bored", "Interesting", "Annoyed", "Astonished"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "4",
  },
  {
    id: 4,
    question:
      "If I'm continuously listening to a song on repeat, which phrasal verb describes my action?",
    answer: "Keep on",
    options: ["Blow up", "Make up", "Come out", "Keep on"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "5",
  },
  {
    id: 5,
    question: "Which of these is a state verb: eat, love, or swim?",
    answer: "Love",
    options: ["Eat", "Love", "Swim"].sort(() => Math.random() - 0.5),
    nextQR: "6",
  },
  {
    id: 6,
    question:
      "When a secret or new product becomes publicly known, which phrasal verb is used?",
    answer: "Come out",
    options: ["Turn into", "Make up", "Blow up", "Come out"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "7",
  },
  {
    id: 7,
    question:
      "Which adjective describes someone who is no longer excited because they've seen or done something too many times?",
    answer: "Bored",
    options: ["Amused", "Astonished", "Amazed", "Bored"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "8",
  },
  {
    id: 8,
    question:
      "Where would you find a list of websites you've recently visited?",
    answer: "Web browser",
    options: ["Cursor", "Window", "Attachment", "Web browser"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "9",
  },
  {
    id: 9,
    question:
      "Complete the sentence with the correct tense: 'Every day, she ______ (browse) the internet, but right now she ______ (download) a new software.'",
    answer: "browses, is downloading",
    options: [
      "browses, is downloading",
      "browse, download",
      "browse, downloads",
      "browses, downloads",
    ].sort(() => Math.random() - 0.5),
    nextQR: "10",
  },
  {
    id: 10,
    question:
      "How does one feel when they've heard a very scary noise in the night?",
    answer: "Frightened",
    options: ["Pleased", "Relaxed", "Interested", "Frightened"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "11",
  },
  {
    id: 11,
    question:
      "If a balloon fills with too much air and bursts, which phrasal verb is used?",
    answer: "Blow up",
    options: ["Make up", "Come out", "Keep on", "Blow up"].sort(
      () => Math.random() - 0.5
    ),
  },
  {
    id: 12,
    question:
      "What do you call the text or item that takes you to another webpage or file when clicked?",
    answer: "Link",
    options: ["Link", "Hashtag", "Folder", "Window"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "13",
  },
  {
    id: 13,
    question:
      "If you want to 'make it big' in the business world, you might eventually be _____ (rich beyond measure).",
    answer: "Roll in it",
    options: ["Make a living", "Roll in it"].sort(() => Math.random() - 0.5),
    nextQR: "14",
  },
  {
    id: 14,
    question:
      "What do you call the bar or arrow you use to select things on a computer screen?",
    answer: "Cursor",
    options: ["Cursor", "Password", "Hard drive", "Folder"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "15",
  },
  {
    id: 15,
    question:
      "Which adjective describes someone who's just heard a very funny joke?",
    answer: "Amused",
    options: ["Amused", "Scared", "Frightened", "Interesting"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "16",
  },
  {
    id: 16,
    question:
      "How would you feel if you accidentally fell in front of your classmates?",
    answer: "Embarrassed",
    options: ["Embarrassed", "Pleased", "Amused"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "17",
  },
  {
    id: 17,
    question:
      "What's the term for the symbol used to categorize or tag social media posts?",
    answer: "Hashtag",
    options: ["Hashtag", "Web browser", "Link", "Icon"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "18",
  },
  {
    id: 18,
    question:
      "If you were to earn money through your job, which phrase means the same as 'earning money'?",
    answer: "Make a living",
    options: ["Make a living", "Make it big", "Rolling in it"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "19",
  },
  {
    id: 19,
    question: "If an ice cube is left out in the sun it ____________ water?",
    answer: "turns into",
    options: ["turns into", "make up", "come out"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "20",
  },
  {
    id: 20,
    question:
      "When a document or file is attached to an email, what do we call that?",
    answer: "Attachment",
    options: ["Attachment", "Icon", "Install", "Blog"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "21",
  },
  {
    id: 21,
    question:
      "Which adjective best describes a film that's not only good but keeps you at the edge of your seat?",
    answer: "Entertaining",
    options: ["Entertaining", "Interested", "Frightening", "Bored"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "22",
  },
  {
    id: 22,
    question: "How might you feel if you saw a snake while hiking?",
    answer: "Alarmed",
    options: ["Alarmed", "Pleased", "Relaxed", "Amused"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "23",
  },
  {
    id: 23,
    question:
      "If you didn't want to use a piece of text or image anymore, what action would you take on your computer?",
    answer: "Delete",
    options: ["Delete", "Copy", "Paste", "Download"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "23",
  },
  {
    id: 24,
    question: "Which phrasal verb means to handle a situation or problem?",
    answer: "Deal with",
    options: ["Deal with", "Turn into", "Make up", "Blow up"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "25",
  },
  {
    id: 25,
    question: "You do this when you want to find something online.",
    answer: "Search",
    options: ["Search", "Install", "Download", "Paste"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "26",
  },
  {
    id: 26,
    question:
      "What is the action you take when you want to bring a file from the internet to your device?",
    answer: "Download",
    options: ["Download", "Upload", "Search", "Paste"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "27",
  },
  {
    id: 27,
    question:
      "Complete the sentence with the right tense: 'She usually _______ (write) in her blog, but today she _______ (make) a video post.'",
    answer: "writes, is making",
    options: [
      "is writing, is making",
      "writes, is making",
      "write, make",
      "writes, makes",
    ].sort(() => Math.random() - 0.5),
    nextQR: "28",
  },
  {
    id: 28,
    question:
      "When I remember my password, I always _______ (enter) it immediately. But right now, I _______ (try) to recall it.",
    answer: "enter, am trying",
    options: ["enters, tries", "enter, try", "enter, am trying"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "29",
  },
  {
    id: 29,
    question:
      "What action do you take when you want to make a duplicate of a file or a piece of text?",
    answer: "Copy",
    options: ["Copy", "Paste", "Drag", "Delete"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "30",
  },
  {
    id: 30,
    question:
      "If someone continuously speaks about the same topic, which phrasal verb can describe their action?",
    answer: "Keep on",
    options: ["Deal with", "Turn into", "Blow up", "Keep on"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "31",
  },
  {
    id: 31,
    question:
      "Which word describes the online diary where people share their personal experiences or opinions?",
    answer: "Blog",
    options: ["Blog", "Hashtag", "Folder", "Window"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "32",
  },
  {
    id: 32,
    question:
      "When you want to move an icon to another spot on your screen, you _______ it.",
    answer: "drag",
    options: ["drag", "install", "download", "upload"].sort(
      () => Math.random() - 0.5
    ),
    nextQR: "33",
  },
  {
    id: 33,
    question:
      "Complete the sentence: 'Usually, he _______ (share) photos, but now he _______ (post) an amusing story.'",
    answer: "shares, is posting",
    options: [
      "shares, is posting",
      "share, posts",
      "share, post",
      "is sharing, is posting",
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
