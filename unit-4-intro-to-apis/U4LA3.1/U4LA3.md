---
description: How do you integrate other people's software into yours?
---

# U4LA3: APIs vs. SDKs

## Preface && Context

### Teacher Notes && Overview

In this lesson, students will integrate the Giphy SDK into a web app. You should familiarize yourself with the SDK through the exemplar and the documentation. Pay special attention to the API key sign-up process, which is likely to evolve over time and trip up students. If you've already done the closed API lesson, you can either reuse the key for simplicity or have them create an additional key to demonstrate keeping keys for different apps separate.

Note that the sample code is _not_ raw HTML/CSS/JS, but needs to be bundled with Parcel to run. All of this is already scripted; the `npm start` command will bundle and host the app automatically, as well as live-reload on changes. The need for Parcel (and the unusual code in the `index.html` file) comes from the Giphy SDK being delivered as a Node module. It's not important to the lesson to understand how this works, so feel free to skim over it with the students. Note that the platform should automatically run `npm install` to install the dependencies, but if you're running the repo independently you'll need to do that first.

You have the option of putting the API key directly in the code for simplicity or using environment variables to demonstrate keeping the key out of the code. Either way, make sure you highlight the importance of keeping sensitive data like keys out of source code. Discuss the dangers of a key being leaked.

### Objectives

Students will be able to:

* Define APIs and SDKs
* Identify the benefits of using APIs and SDKs
* Use the Giphy Web SDK to retrieve and display GIFs on a web page

### Suggested Duration

\~1 Period (\~45 min)

### NYS Standards

### Vocabulary

* **API:** Application Programming Interface; A set of rules and protocols that allow different software applications to communicate and interact with each other
* **API Key:** A string that securely identifies you to an API
* **SDK:** Software Development Kit; a collection of software tools, libraries, and documentation that simplifies the process of building software applications for a specific platform or service

### Planning Notes && Materials

|  Planning Notes  |  Materials  |
| :--------------: | :---------: |
| Familiarize yourself with the Giphy Web SDK documentation (https://developers.giphy.com/docs/sdk) and sample code. | [Starter Code](./U4LA3-Starter) |
| Review the exemplar | [Exemplar Code](./U4LA3-Exemplar) |
| Practice signing up for an API key so you'll be able to walk students through it | |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :------------------------------: | :--------------------------: | :--------------------------: |
| Students may need additional examples for understanding what a GIF is. In particular, pay attention to how they're commonly used as an expressive way to communicate online. | Students may have trouble with the abstract concept of an API. It may help to find ways to make it more concrete, such as mailing a letter asking for something or playing a game sending each other instructions in a specific format. | The discussions can be done async or virtual, the hands-on parts can be done individually, in groups, or as a class |

### Suggestions for Differentiation

* You have some flexibility in how much this lesson is independent research vs. following along directly with you.
* Likewise, you can flex how much of the lesson is spent discussing the concepts vs. playing with different SDK features
* You can try having students incorporate what they know about forms to build a like app with the SDK, such as passing on a search term and displaying the top 10 results

### Resources

* [Giphy SDK docs](https://developers.giphy.com/docs/sdk/#web)

### Assessments

**Formative:**

* Observe student engagement and participation during the hands-on activity
* Evaluate the completeness and functionality of the web pages created by each group
* Encourage students to ask questions and participate in group discussions

**Summative:**

API Final Project (End of Unit Project)

## Lesson

### Do Now/Warm Up (\~3 - 5 min)

Have students read [What Is A Gif](https://www.howtogeek.com/441185/what-is-a-gif-and-how-do-you-use-them/).

### Intro (\~5 min)

* Have students share their takeaways from the reading
* Discuss the popularity and widespread use of GIFs in digital communication.
* Explain that behind the scenes, these applications often use APIs and SDKs to integrate GIF functionalities into their own apps. It may help to diagram this. You may also ask the students to make their own diagram or metaphor as a check for understanding.

### Understanding APIs (\~15 min)

* Define API (Application Programming Interface) as a set of rules and protocols that allow different software applications to communicate and interact with each other.
* Discuss how APIs provide a standardized way for developers to access and use specific functionalities or data from external services, such as social media platforms, weather data providers, or image databases.
* Give examples of common APIs, such as the Twitter API, Google Maps API, or the Giphy API.
* Explain that APIs typically provide developers with a set of documentation, endpoints, and request/response formats to interact with their services.

### Understanding SDKs (\~15 min)

* Introduce SDK (Software Development Kit) as a collection of software tools, libraries, and documentation that simplifies the process of building software applications for a specific platform or service.
* Differentiate APIs from SDKs. APIs are usually more flexible and follow more standardized patterns. SDKs are more tailored to this specific tool and usually require less code to work with. You may compare this to using a `for` loop vs using a `forEach()` loop.
* Discuss how SDKs are often provided by companies or developers to allow others to integrate their services more easily. You may wish to lead a discussion on what kinds of motivations companies could have to provide SDKS, such as broadening their reach and increasing their functionality for free.
* Explain that SDKs often include pre-built functions, code samples, and other resources to assist developers in incorporating specific functionalities into their applications.
* Give examples of popular SDKs, such as the Facebook SDK, the Amazon Web Services SDK, or the Giphy Web SDK.
* Discuss SDKs that are protected with tokens and discuss why someone might want to limit an API with one. Examples include: Limiting malicious behavior, selling access or capacity, and monitoring usage. This can be done as a written submission or a think/pair/share.

### Exploring the Giphy Web SDK (\~15 minutes)

* Introduce the Giphy Web SDK as a tool that enables developers to integrate the Giphy service into their web applications.
* Discuss the key features and functionalities of the Giphy Web SDK, such as searching for GIFs, displaying trending GIFs, or creating custom GIF stickers.
* Show the students the Giphy Web SDK documentation and highlight the available methods and parameters.
* Demonstrate how to obtain an API key from the Giphy Developer Portal.
* Provide a brief overview of the sample code provided in the exemplar.

```js
// script.js

// Your API key here instead of this one
const gf = new GiphyFetch("4VKguYeR2btOeGHQK13652HEZK0AdO2Y")
// Search the SDK for the term "cats". Note that the SDK makes the request over a network, meaning it's asynchronous and must be awaited
const result = await gf.search("cats")
// This path contains a URL to the first matching Gif
$gif.src = result.data[0].images.original.url
```

### Hands-on Activity: Integrating Giphy Web SDK (\~10 minutes)

* Divide the students into pairs or small groups, and instruct each group to fill out the starter code using the same format as your demonstration. All of the code they need to interact with is in the `script.js` file. You have the option of having them copy your example, follow an outline you provide, or use the documentation directly as you see appropriate for your class.
* Have one member of the group sign up for an API key with Giphy. Be prepared to troubleshoot this with students.
* Circulate among the groups, offering guidance and support as needed.

### Group Presentations and Discussion (\~10 minutes)

* Have each group present their web page and demonstrate the integration of the Giphy Web SDK.
* Discuss the challenges faced by students during the activity and how they overcame them.
* Lead a brief discussion on the advantages and limitations of using SDKs. The primary benefit is simplicity, the primary limitations are non-standard interfaces and not as flexible.

### Wrap Up (\~5 min)

* Recap the main points discussed in the lesson: APIs, SDKs, and the Giphy Web SDK.
* Ask students to reflect on how APIs and SDKs can enhance the functionality of their own applications or projects.
* Having worked with APIs and SDKs, which did you prefer? Are there things that you think one is better suited for over the other?
* Encourage students to explore other APIs and SDKs in their future projects or areas of interest.

### Extensions

#### Mild

Incorporate additional features from the Giphy Web SDK, such as stickers or GIF reactions. Start by incorporating the [Search feature](https://github.com/Giphy/giphy-js/blob/master/packages/fetch-api/README.md).

#### Medium

Explore other popular SDKs, such as the [GitHub SDK](https://github.com/octokit/app.js/#readme) and discuss their use cases and benefits.

#### Spicy

Do a brief research project on the history and evolution of APIs and SDKs in software development.
