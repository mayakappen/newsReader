export const getTopStories = (section) => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=AfGKdMGUgBgZR0G3xFPX0wCrG2SggrTH`)
}