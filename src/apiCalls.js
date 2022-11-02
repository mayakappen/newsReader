export const getTopStories = (section) => {
   return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=AfGKdMGUgBgZR0G3xFPX0wCrG2SggrTH`)
   .then((res => res.json()))
}