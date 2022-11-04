# News Reader
Created as a take-home challenge at Turing School of Software and Design
Sort and view articles from the [New York Times API](https://developer.nytimes.com/docs/top-stories-product/1/overview)!
Users can sort news by categories and expand articles to view more details and a link to the original article.

![News Reader](https://user-images.githubusercontent.com/102932448/200022156-ce3ded05-b4dc-4fa5-9082-e44ef9bb5fde.gif)

![News Reader (1)](https://user-images.githubusercontent.com/102932448/200025267-d4b33b69-0e03-4404-841c-8d75561dd7a9.gif)

## Planning Documents
* [Wireframe](https://imgur.com/a/5qwuqOV)
* [Project Board](https://github.com/users/mayakappen/projects/6/views/1)

## Tech Stack
* React

## Endpoint
https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=AfGKdMGUgBgZR0G3xFPX0wCrG2SggrTH


## Setup
1. Fork and clone this repo
2. Run <code>npm start</code> in the console
3. Go to http://localhost:3000/ in your browser

## Wins/Challenges
* The limitation placed upon me for this project was to complete it within 8 hours. This meant learning to prioritize MVP and managing my time efficiently. I think I accomplished this by utilizing the project board and taking time to pseudocode out the plan. It was definitley a win for me to complete this project in under 8 hours.
* One challenge I ran into was with the API key, at first I tried to set up a secret env file for it but it proved to be a hassle and I ended up hardcoding my key into the fetch request which isn't really best practice. I was worried about time and getting it to run when deployed. Not a huge deal since the api key is free.
* Another challenge was getting the date to display correctly. This could have been done with some Date methods but the response from the server for the published date was weird I had to break it down in kind of a convoluted function: 

<code>const dateHandler = (date) => {
  let dateArray = Array.from(date).splice(0, 10)
  let formatted = dateArray[6] + dateArray[5] + '-'+ dateArray[8] + dateArray[9] + '-' + dateArray[0] + dateArray[1] + dateArray[2] + dateArray[3]
  return formatted
}</code>

* Finally the most challenging thing about this was the instructions confused me and I thought that I was supposed to display the entire article from the NYT when you view the article details. I worked on this for two hours before talking to the instructor and recieving the feedback that all I needed was to display thbe information that I already had up. From here I refactored what was viewable from the main page and put the article abstract and the link to the article in the article details view.

## Future Improvements
-Adding another search function
-Impliment React Router
