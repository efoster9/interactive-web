---
description: How can I adjust my HTML to create websites that are accessible for all?
---

# U1LA5.2: Creating Accessible Websites

### Teacher Notes && Overview

In this lesson, students will learn how they can leverage the HTML they know as well as the purposeful use of some new tags to create webpages that are as accessible as possible to everyone using them. They will begin by thinking about visuals on the screen before moving into the challenges presented by screen readers and how they can alleviate some of those problems with semantic HTML and tabindex. &#x20;

Finally, students will be introduced to form building with a focus on making forms, which can often be an accessibilty nightmare, as accessible as possible.

### Objectives

Students will be able to:

* Understand the common challenges websites have to being accessible
* Utilize semantic HTML to build accessible websites
* Create basic pages with tab indexes and alt text when semantic HTML needs support
* Build HTML forms with accessibility in mind

### Suggested Duration

\~2-3 periods (90 - 135 minutes)

### NYS Standards

**9-12.IC.1** Evaluate the impact of computing technologies on equity, access, and influence in a global society.

**9-12.IC.5** Describe ways that complex computer systems can be designed for inclusivity and to mitigate unintended consequences.

**9-12.IC.6** Create accessible computational artifacts that meet standard compliance requirements or otherwise meet the needs of users with disabilities.

### Vocabulary

* **Accessibility:** being easy to use or obtain. In this case, it involves making sure websites can be used and access by _everyone_ who may want or need to use them.
* **Semantic HTML:** an HTML element that clearly describes its meaning to both the browser and the developer. Ex: `<form>` is semantic, while `<div>` is not because it does not reveal anything about its context.
* **tabindex:** a global HTML attribute that defines navigation order and sets elements as 'focusable' in a screen reader
* **fieldset:** an HTML tag used to group related elements of a form
* **legend:** an HTML tag used to assign names for elements of a form or other items on a page
* **ARIA:** accessible rich internet applications, a set of roles and attributes that define ways to make web content and applications more accessible

### Planning Notes && Materials

|                                                                   Planning Notes                                                                   | Materials Needed |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------: |
| Students may want to get the full experience of utilizing a screen reader; make sure you know how to access this on the devices of your classroom. |    Headphones    |

### Suggestions for UDL

_Coming Soon_

### Suggestions for Differentiation

_Coming Soon_

### Resources

* [Screen Reader Demo for Digital Access](https://www.google.com/url?q=https://www.youtube.com/watch?v%3DdEbl5jvLKGQ\&sa=D\&source=docs\&ust=1679412444889428\&usg=AOvVaw3v2iFv8oeGPVAIIukMvTan) (Video)
* [Emulating Vision Deficiencies in Dev Tools](https://addyosmani.com/blog/emulate-vision-deficiencies-devtools/) (Instructions/Resource)

### Assessments

**Formative:**

*

**Summative:**

*

### Do Now/ Warm Up (\~3-5 min)

Ask students to think about the websites they've created so far, and also the websites they use regularly. What makes these websites difficult, or maybe even just less than ideal, for them to use? What do you think other people may find difficult about using these websites?

### Viewing Websites Differently (\~5 - 10 minutes)

Allow students time to respond to the Do Now in small groups and/or whole class. Encourage them to think about anything that may be less than ideal - colors, small font, etc. Some students may pick up on ways in which people with vision impairments or who are not sighted may struggle with websites, or they may not.

Explain to students that today's objective is to learn how they can build better websites that are accessible - meaning easy to use - for _everyone_. This includes themselves and anyone else who may need or want to use the site, within reason. (_Ex: If you're creating a site about precalculus, you do not need to design it to appeal to kindergarteners - but anyone who has a desire to engage with precalculus concepts should be able to use your website to do so._)

To begin, students are going to think about some very basic ways that their websites may be inaccessible by thinking through how different sighted people may be seeing their websites. To do this, have students open a website of your choosing (the more colorful the better) in Chrome. They will then right click and hit 'Inspect' to open up the dev tools.

Next to where it says 'Console' (generally at the bottom of the dev tools) you will see three dots. Click on those!

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-21 at 10.52.37 AM.png" alt=""><figcaption><p>Three dots next to the world Console in the Chrome Dev Tools</p></figcaption></figure>

Next, select the 'Rendering' option, which will open a new st of tools next to Console.

<figure><img src="../.gitbook/assets/Screen Shot 2023-03-21 at 10.53.37 AM.png" alt=""><figcaption><p>Open panel of options with Rendering highlighted in blue.</p></figcaption></figure>

This panel gives a variety of options that will change the appearance of the page. The one we want is near the bottom, where it says **Emulate vision deficiencies:** _Forces vision deficiency emulation._ By default, it should say 'No emulation.' If we click the drop down, we will see a list of possible vision conditions. Blurred vision is fairly self explanatory, and many of the others are different forms of color blindness or color processing.

Give students time to play with each and visit different websites. You may ask every student to try every option, or select groups of students to focus on specific ones and share with the rest of the group. Things may look quite a bit different, so rather than asking students about which pages look 'good,' focus on asking them which pages are still _accessible_ and what makes them more or less accessible, or what changes could be made to make them better or worse.

Once students have had time to experiment, come together to discuss their findings.

### Webpages Unseen and Semantic HTML (\~10 - 15 minutes)

Not all&#x20;
