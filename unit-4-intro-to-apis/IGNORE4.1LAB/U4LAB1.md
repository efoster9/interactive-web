---
description: What does the use of APIs look like in a website.
---

# Higher Lower

### Teacher Notes

In this lab, students will have the opportunity to build a personality quiz with some guidance. The teacher will walk students through a trivial version (the exemplar), and students will, similar to a unit project, brainstorm ways to personalize it adding different forms of inputs, creative outputs, and implementing concepts in the previous few lessons.

{tbc}

### Prompt

I DE-CLARE WAR. The front end for this website has been designed to simulate a game of war. 2 players flip their cards and the higher card wins. The winning player takes the 2 face up cards and adds them to their deck. This lab uses an open API [DeckOfCardsAPI.com](https://deckofcardsapi.com/) to manage the deck and the two players' hands. 

**Directions**: Finish the code so that the API is incorporated and the responses are properly displayed on the website.

1. In `api.js`, create the following async functions:
    - getNewDeck()

### Exemplar

Take a look at this [finished example](./U3LAB2-Exemplar/index.html) for the finished version of the site.

### Culturally Responsive Best Practice

Scope out the strategies students plan to use when creating the quiz to ensure they stay on track with the curriculum, but allow students to explore themes that they identify most with. Consider spending a few minutes asking the students to find the funniest or most interesting quizzes they can find. Allow them time to explore resources like [BuzzFeed](https://www.buzzfeed.com/quizzes), [PsyCatGames](https://psycatgames.com/quiz/), or [PlayBuzz](https://www.playbuzz.com/quizzes/personality)... [more](https://funpersonalityquizzes.net/)

_Note: scope out the resources provided. The quizzes change constantly, and it can not be assured that they are appropriate for school. You may instead want to compile several examples that you have pre-scanned and feel comfortable using in the classroom._

### Extra Help?

- Quizzes to get inspiration:
    - [What Fruit Are You? - Buzzfeed](https://www.buzzfeed.com/natalyalobanova/what-fruit-are-you)
    - [What's your road trip personality? - Truity](https://www.truity.com/test/travel-personality-test)
    - [Another Short Myers-Briggs Test](https://dynomight.net/mbti/)

- Long video on making [JS Buzzfeed-style Quiz](https://www.youtube.com/watch?v=7x2Zk1qwBBU)

### Extensions

**Mild**

- Add a `shuffleDeck(deckId)` function in the `api.js`. In the `script.js`
- Create a function `convertValue(value)` that takes in a value (eg. '9', 'ACE', 'KING') and returns the numeric representation of the value ('9' => 9, 'ACE' => 1, 'KING' => 13).
- In the `nextCard()` function, use `convertValue()` instead of doing it manually. 

**Medium**

- "Higher, Between, Lower" Make a second face up card and a third button. Change the game so that you can guess that the next card is either "Lower" than both cards, "Between" the 2 cards, or "Higher" than both cards. 
    - If it's lower, replace the low card, if its higher, replace the high card, and if its in between, alternate between the two.
- Add an input for an exact guess. Each turn, the user has the option to guess the exact value. If they guess correctly, they should get a bonus 5 points.

**Spicy**

- When there's a tie, 
- Use this deck of cards API to make a different game. I DE-CLARE War is a good simple rules game, but feel free to pick one that you've played before


**Reflection Questions:**

- What are you most proud of? What did you struggle the most with?
- How much preplanning did you do before you coded? How did it help? How would doing more or less preplanning help or hurt final outcome of your personality quiz?
- With more time, what else would you have added or changed?