---
description: What does the use of APIs look like in a website.
---

# War!

### Teacher Notes

[NOTE: NOT COMPLETED! --- To Be edited!]

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

Use the following steps to plan out how you will change the personality quiz to be your own.

**Directions**

1. With your partner, do some research and exploring and think up what kind of personality quiz you'd like to set up. It can be **silly** like "What fruit are you?" or **serious** like "What vacation is best for you?". _If you're not sure, go with the vacation spot!_

2. Then, write down all the possible results your quiz can end in. Will there be **only 2** (ex. "Your more left brain than right brain" or "Your more right brain than left brain")? Or, will you have **several results** (ex. "Out of all the fruits your most likely a watermelon!")? _If you're not sure, we recommend picking 3-4 vastly different results like "Space", "Cabin in Alaska", "Staycation", and "New Orleans"._

3. **Inputs**: For the walk through above, radio buttons were the inputs for the quiz. Will you use radio buttons with words or pictures to select from, will you use drop down menus, will you have checkboxes as to allow multiple selections? Also, think about how you will store the user's responses. _Most common is using radio buttons and an object. That's what we'd recommend if you're unsure._

4. **Calculating Results**: Here are some ideas for how you can narrow down the user's inputs into some results. Choose 1:
    - **[MILD]** - Each answer in the quiz can award positive **points** to a category or personality type. At the end of the quiz, which ever personality type has the most points is the one the user will get.
    - **[MEDIUM]** - If your results can be put on **a scale**, start a score at 50 and have each question add or subtract points to the score. At the end, use the number to give the user a different personality type. _(ex. "Netflix and PJs" would be a 0-35% => always likes to be alone, "Party Animal" would be a 65-100% => never likes to be alone, and maybe even "Hard to Get" would be a 35-65% => likes a balance of both)_ You can split this in 2, have 3 zones, or how ever many zones you need.
    - **[SPICY]** - You can use **multiple scales**! Each question can add or remove points to one or more scales. For example:
        - Scale1 = likes to be outside vs. likes to be inside
        - Scale2 = likes to be along vs likes to be with others
        Based on the combination of the 2 scales, you can give the user a different personality type _(ex. outside & alone = "Vacation in Space!")_ If it helps, think of this one like an XY graph.

5. **Outputs**: Finally, what will you show the user once they hit submit?
    - [MILD] - Will it be a single output?
    - [MEDIUM] - Will you show a few or all possible outcomes and their percentage in each category? (ex. "Your 70% lion and 30% mouse")
    - [SPICY] - Will it have a more detailed description or a unique picture to go with it?

6. Now that you have your plan, get your quiz up and running! Refrain from focussing on font, images, color and other styling for now. Also, (IMPORTANT) start with **1** question, and add more once you have it working.

7. Once, you can complete the quiz and get a unique result, go back and add styling, images, and more questions. 

**Reflection Questions:**

- What are you most proud of? What did you struggle the most with?
- How much preplanning did you do before you coded? How did it help? How would doing more or less preplanning help or hurt final outcome of your personality quiz?
- With more time, what else would you have added or changed?