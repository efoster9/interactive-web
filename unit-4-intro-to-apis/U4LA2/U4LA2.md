---
description: How do you work with APIs that require authentication?
---

# U4LA2: Connecting to Closed APIs using the Giphy API

## Preface && Context

### Teacher Notes && Overview

In this lesson, students will integrate the Giphy API into a web app. You should familiarize yourself with the API through the exemplar and the API documentation. Pay special attention to the API key sign-up process, which is likely to evolve over time and trip up students. This lesson is paired with the lesson on SDKs and is intended to highlight the differences between APIs and SDKs by mirroring the lesson structure.

You have the option of putting the API key directly in the code for simplicity or using environment variables to demonstrate keeping the key out of the code. Either way, make sure you highlight the importance of keeping sensitive data like keys out of source code. Discuss the dangers of a key being leaked.

### Objectives

Students will be able to:

* Explain the concept of connecting to closed APIs
* Use the Giphy API to retrieve and display GIFs in their applications
* Handle errors using `try`/`catch`

### Suggested Duration

\~2 Periods (\~45 - 90 min)

### NYS Standards

### Vocabulary

* **Query Parameter**: Data added to the end of a URL. Separated from the rest of the URL with `?`, key value pairs matched with `=` and separated by `&`.
* **HTTP:** HyperText Transfer Protocol; A format for sending and receiving messages over the internet
* **API:** Application Programming Interface; A set of rules and protocols that allow different software applications to communicate and interact with each other
* **API Key:** A string that securely identifies you to an API

### Planning Notes && Materials

|  Planning Notes  |  Materials  |
| :--------------: | :---------: |
| Familiarize yourself with the Giphy API documentation (https://developers.giphy.com/docs/api/#quick-start-guide) and sample code. | [Starter Code](./U4LA2-Starter) |
| Review the exemplar | [Exemplar Code](./U4LA2-Exemplar) |
| Practice signing up for an API key so you'll be able to walk students through it | |

### Suggestions for UDL

| Multiple Means of Representation | Multiple Means of Engagement | Multiple Means of Expression |
| :------------------------------: | :--------------------------: | :--------------------------: |
| Students may need additional examples for understanding what a GIF is. In particular, pay attention to how they're commonly used as an expressive way to communicate online. | Students may have trouble with the abstract concept of an API. It may help to find ways to make it more concrete, such as mailing a letter asking for something or playing a game sending each other instructions in a specific format. | The discussions can be done async or virtual, the hands-on parts can be done individually, in groups, or as a class |

### Suggestions for Differentiation

* You have some flexibility in how much this lesson is independent research vs. following along directly with you.
* Likewise, you can flex how much of the lesson is spent discussing the concepts vs. playing with different API features
* You can try having students incorporate what they know about forms to build a like app with the API, such as passing on a search term and displaying the top 10 results

### Resources

* [Giphy API docs](https://developers.giphy.com/docs/api/#quick-start-guide)
* [Fetch Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Try/Catch Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

### Assessments

**Formative:**

* Observe students' engagement and participation during class discussions and hands-on activities
* Evaluate the completeness and functionality of the web pages created by each group
* Evaluate students' understanding through a short quiz or written reflection on the concepts covered during the lesson

**Summative:**

API Final Project (End of Unit Project)

## Lesson

### Do Now/Warm Up (\~3 - 5 min)

Have students research online and find a public web API they think sounds interesting. They can look through the [Public API List](https://github.com/public-apis/public-apis) or use their own resources.

### Intro (\~5 min)

* Discuss the APIs the students found. As a group, pick one of them and come up with a list of potential applications that could be built with them.
* Explain the concept of HTTP APIs and how they allow developers to access and use certain functionality or data provided by a service
* Introduce the Giphy API as an example of a closed API that provides a vast collection of GIFs. You may wish to explain what a GIF is or ask students to share some of their favorites.

### API Keys (\~10 min)

* Discuss the differences between open and closed APIs. Open APIs can be accessed by anyone, closed APIs require getting a token or other means of access.
* Ask the students to write a list of reasons why someone who provides data through a public API would want to limit access by requiring a key. You can have them share these out, as well as submit them for review. You may wish to use some technique for finding shared and unique entries. Make sure you highlight things like selling access, selling additional usage, throttling usage to stop from overwhelming the server, and to limit malicious access.

### Making an API Request (\~15 min)

* Explain the concept of making HTTP requests, particularly GET requests, to retrieve data from the Giphy API. Mention that a client (like a browser) makes a request to a server (like an API server). The server decides what to send back as a response.
* Demonstrate how to construct a basic API request URL path, briefly discussing the idea of using paths to represent resources. For example, `GET /users/23/favorites` probably means "Show me a list of user 23's favorites".
* Show the Giphy API documentation and briefly explain its structure, including API endpoints, request parameters, and response formats.
* Discuss the concept of API keys and how they are used to authenticate API requests. Show how to add an API key to a query parameter:

```javascript
const response = await fetch(`https://some-api.com/some-resource?api_key=${your-api-key-goes-here}`)
const { data } = await response.json()
```

### Obtain an API Key (\~10 min)

* Direct students to the [Giphy Developers website](https://developers.giphy.com/) and guide them through the process of creating an account and obtaining an API key.
* Emphasize the importance of keeping the API key secure and not sharing it publicly. Mention that someone who has your API key can impersonate you, steal your data, run up huge bills, or worse.

### Displaying GIFs (\~15 min)

Using the [starter code](U4LA2-Starter/script.js), assist students in integrating the retrieved GIF data into their applications. Encourage creativity in designing the user interface to showcase the GIFs effectively.

In `script.js`:

1. Set the API key
2. Make a fetch request to `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
3. Parse the response and set its `data[0].images.original.url` to `$gif.src`

<details>
<summary>Solution</summary>

```js

const $gif = document.querySelector("#gif")
const $error = document.querySelector("#error")

// Your API key here instead of this one
const API_KEY = "4VKguYeR2btOeGHQK13652HEZK0AdO2Y"

const app = async () => {
	try {
		// Request a list of trending gifs
		const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`)

		// Await parsing the response
		const { data } = await response.json()

		// Attach a URL from the response to the $gif DOM element
		$gif.src = data[0].images.original.url
	} catch (error) {
		// Display any errors
		$error.textContent = `Request failed: ${error.message}`
	}
}

app()
```
</details>

### Try/Catch and Error Handling (\~15 min)

Explain the try/catch workflow:

```javascript
try {
	// Something that might error
} catch (error) {
	// How the error should be handled
}
```

Flow control goes to the `try` block. If anything in it throws an error, control goes to the `catch` block. The `catch` block has access to an `error` object containing details about what errored.

Discuss the kinds of things that can error, such as user input or things that depend on networks. Lead into integrating this into an API integration. Ask students to draw a diagram or flow chart of how the logic flows in this example:

```javascript
const $message = document.querySelector(".message")

try {
	const response = await fetch("http://example-api.com/some-endpoint")
	const data = await response.json()
	$message.textContent = `Successfully fetched ${data.message}`
} catch (error) {
	$message.textContent = `Request failed: ${error.message}`
}
```

`$message` is saved. Then in the `try` block, the browser attempts to get an HTTP response from that URL. If it fails, control will go to the `catch` block. Then the browser will attempt to parse the response. If it fails, control will go to the `catch` block. Then the browser will set the `$message`'s text to the parsed data's message. If any of the processes errored, the `$message`'s text will display the error's message.

* Discuss potential errors or exceptions that can occur when connecting to APIs and how to handle them gracefully. For example, if the response HTTP code is 404, that means that you requested something that doesn't exist. Rather than have logic that expects a result to be present, you can gracefully display and error message and redirect the user to try something else.
* Discuss using `try`/`catch` blocks for other purposes, like debugging.

### Wrap Up (\~5 min)

* Have students share their applications or experiences with connecting to the Giphy API.
* Discuss the importance and practical applications of connecting to closed APIs in real-world scenarios. For example, talk about how the most powerful APIs will always require some kind of token so they can handle paid access limits.
* Optionally, have students write their reflections and turn them in.
* Encourage students to continue exploring and experimenting with APIs to expand their programming skills.

### Extensions

#### Mild

Use the [Random Endpoint](https://developers.giphy.com/docs/api/endpoint/#random) in your app instead of trending.

#### Medium

Incorporate the [Search Endpoint](https://developers.giphy.com/docs/api/endpoint/#search) into your app. Build a form to capture user input for the search.

#### Spicy

Combine the output from the [Random Endpoint](https://developers.giphy.com/docs/api/endpoint/#random) and the [Search Endpoint](https://developers.giphy.com/docs/api/endpoint/#search) to create a new feature.
