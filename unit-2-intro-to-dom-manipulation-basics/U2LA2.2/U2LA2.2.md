---
description: How can I make it easier for someone using a screen reader to interact through a webpage?
---

# U2LA2.2: Accessible Shopping Cart

### Teacher Notes & Overview

In this lesson, students will begin by working with basic HTML tags and reading documentation. The focus will not be on making something pretty, but on making pages that allow them to practice writing HTML tags and using their resources in a meaningful way.

If you did not complete a Unit 0, please allow extra time in the lesson to make sure students are set up on repl.it. Students who completed the pre-requisite ICM course likely have accounts but may need to ensure they can still get logged in. If you have a vision for student organization, you may also want to take time to help them set up folders in the 'My Repls' section.

### Objectives

Students will be able to:

* Use a screen reader, _ChromeVox_, to navigate a webpage similar to how someone with visual deficiencies would.
* Recognize opportunities in HTML code to use semantic element tags and other attributes like ARIA to make a website more accessible
* Use `keydown` events in javascript code to manually trigger images to behave like buttons.
* Empathize with the visually impaired and consider their perspectives when creating websites.

### Suggested Duration

1 periods (\~45 minutes)

### NYS Computing Standards

* **9-12.DL.1** Type proficiently on a keyboard.
* **9-12.DL.2** Communicate and work collaboratively with others using digital tools to support individual learning and contribute to the learning of others.
* **9-12.DL.5** Transfer knowledge of technology in order to use new and emerging technologies on multiple platforms.

### Vocabulary

* **Screen Reader:** [Define here]
* **Semantic Element Tag:** [Define here]
* **ARIA:** [Define here]
* **Keydown Event:** [Define here]


### Planning Notes && Materials

|                                                                          Planning Notes                                                                          |                                                     Materials                                                    |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| When using repl.it, please determine if you would like students to clone directly from GitHub, or if you will be setting up assignments via Teams for Education. | _No special materials are required, but as it's the first day, make sure computers are charged and ready to go!_ |

### Suggestions for UDL

|                             Multiple Means of Representation                            |                                       Multiple Means of Engagement                                       |                                    Multiple Means of Expression                                    |
| :-------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| _How are you going to present your content so that it meets the needs of ALL students?_ | _How are you going to provide multiple pathways for students to actually learn the material presented?_  | _How will students demonstrate what they have learned?  How will you assess progress and mastery?_ |

### Suggestions for Differentiation

To differentiate across different levels, we recommend keeping instruction short and having students work in pairs when getting practice. The Lesson & Demo section is written with this in mind.

The activities below are in an order that progresses in difficulty. The advanced students will work quickly through the first couple of challenges giving you time to support the struggling students. Once they get a grasp on things, you can support the more advanced students who by that time are probably stuck on the more advanced challenges. 

Be sure to stop early enough that everyone has reached but not necessarily started the extensions. It is okay if most students don't complete any or all extensions. They exist mainly for differentiation and an engaging challenge. 

### Resources

* ****[**Repl.it** ](https://replit.com/\~)- online IDE
* ****[**W3 Schools**](https://www.w3schools.com/html/) **** - readable documentation
* **(OPTIONAL)** [**MDN**](https://developer.mozilla.org/en-US/) **-** a robust but sometimes less student-friendly documentation
* ****[**What is HTML, CSS, JavaScript?** ](https://youtu.be/gT0Lh1eYk78)(Youtube Video)
* ****[**Practice: Recreating Template**](https://replit.com/@qrtnycs4all/Interactive-Web-U1LA11-Recreation-Website-Template#index.html) **** (repl.it) NEED TO PUT CODE ON GITHUB

### Assessments

**Formative:**

During **mini-lesson:** spot check to ensure students are adding HTML tags to their code, ask quick check-for-understanding questions and ask students to provide code when possible.

**Activity Code** can be collected and assessed as needed

**Wrap Up** reflection questions and shares can serve as formative assessments.

**Summative:**

Unit 1, HTML Lab 1 (Upcoming Lab)

HTML FInal Project (End of Unit Project)

### Do Now/Warm Up (\~10 min)

For the warmup, students will have an opportunity to play with a screen reader to simulate an experience that a blind person might go through. Students will spend a few minutes using a screen reader with a paper (or similar) covering their screen. Then, they will uncover their screen and continue using a screen reader for a few more minutes before discussing their observations as a group.

> NOTE: the screen readers are very yappy. It is recommended that you have students use their own headphones and do this warm up independently. Alternatively, in pairs you can have one student listen and navigate while the other student peaks at the screen.
> This can also be done without headphones (the text is displayed at the top of the screen), but will result in a less impactful effect.

Have students run up the main webpage of the starter code, and ask them to immediately cover their screen and plug in their headphones. Guide them on how to turn the screen reader on and how to navigate by heading and using arrow keys, and ask them to challenge themselves to navigate through the webpage as a blind person would.

To activate a screen reader on the Chromebook (_ChromeVox_) click `CTRL+ALT+Z`. Use the `SearchBar + H` to navigate the page by headings, and use the `SearchBar + →` and other arrows to navigate more granularly. Once the students play with these controls while the screen is covered, have them remove the cover and incorporate `SHIFT` and `CTRL` in combinations with `H` and the `arrow keys` to discover other controls.

Use the last couple of minutes to reflect and mainly talk about what flaws there are on this website. Use the following points to guide your discussion:
- The _Mango_ button doesn't read as a button
- The _Mango_ button doesn't add "Mango" to the cart
- It's hard to know what is in your cart & what the total cost is.
- The _"Empty Your Cart"_ button is inaccessible & un-clickable without a mouse.
- The _Apple_ and _Banana_ button work great!

### Mini Lesson: Fixing Accessibility Issues (\~20 min)

**Fixing the Mango Button**
1. First, have students look in the `index.html` and give you a prediction as to why the mango button is different than the other 2 buttons. _The mango button is a `<div>` element, and the other 2 are `<button>` elements._ 

2. Have students change the element type with you, demo the change via the screen reader, and stress the importance of using element tags (as stressed in Unit 1 Lesson 1) especially for someone with visual deficiencies. 

**Announcing Cart Updates**

3. Next, it would be useful if the cart total was announced every time a button was pressed. [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) (Accessible Rich Internet Applications) is a set of roles and attributes that define ways to make web content and web applications more accessible to people with disabilities. 

4. We can include ARIA attributes right in our `index.html` as follows.
    ```html
    <h4 aria-live="polite">Your total: ...
    ```
    The `aria-live` attribute allows us to tell the screen reader to make an announcement anytime changes are made to the contents of this element. "polite" is used when we want to wait for the screen reader to stop talking to make the announcement, and assertive interrupts the screen reader. [Learn more here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live).

5. Take a moment to demo this change with the screen reader.

**The "Empty Your Cart" Button**

6. Lastly, we should make sure this empty cart button is fully accessible. As you saw with the _"Mango"_ button, using the proper semantic element tag makes being accessible easy, and this should always be prioritized. However, what if you have an image that you need to behave like a button? The CSS and Javascript has been mostly coded to have this act like a button, but the screen reader has not. 

7. We're going to use the following 3 attributes so that the button has a label, and so that we can get to it using a screen reader. We'll include these attributes in the `div id="clear-button"`:
    - use `tabindex="0"` to ensure that the `div` can be accessed by a screen reader,
    - use `role="button"` to indicate to the screen reader and user that it is a button, and
    - use `aria-label="Empty your cart"` to tell the user what the button does.
    ```html
    <div id="clear-button" tabindex="0" role="button" aria-label="Empty your cart">
    ```
    Demo these changes using the screen reader before moving on to javascript functionality.

8. Notice that once we land on the button with the screen reader, there is nothing that can be pressed to "click" the button without using the mouse, but with the other 3 buttons, you can click the `SpaceBar` or the `ENTER` button. 

9. In the `script.js` there already is an event listener for the a **"click"** on the `div`, but we're going to add a new event listener for key strokes (**"keydown"**) as well. When a key is pressed while hovering over this div, we want to check that the key is the `SpaceBar` or the `ENTER` button. 
    ```js
    clearButton.addEventListener("keydown", checkKey)
    ```
10. Now that we have the event listener, let's create the `checkKey` function. When ever a key is pressed, that triggers a keydown "event". The code for that event will tell us what type of key was pressed. Finally, once we check the key, we can manually trigger a "click" event that has already been written.
    ```js
    const checkKey = (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
            clearButton.click();
        }
    }
    clearButton.addEventListener("keydown", checkKey)
    ```

### Exploration Activity (\~10 minutes)

- Go to some of your favorite websites and navigate them with a screen reader 
- Find 3 things that don't look right, copy the link and describe how they're inaccessible.
- How would you imagine those things being fixed?

### Wrap Up (\~5 minutes)
If you'd like time to collect their work, this would also be a good time. If you are not using Repl.it Teams for Education, a great way to collect projects quickly is a Google Form where they submit any links as well as any reflection questions.

Before students leave, ask them to select a question to answer on a post-it or other easily collectable paper:

1. What is something you learned about website accessibility that you did not know before?
2. What challenges might people with visual deficiencies face when trying to interact with a website?
3. Do you have any lingering questions you need answered?
