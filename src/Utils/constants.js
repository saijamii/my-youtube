const GOOGLE_API_KEY = "AIzaSyDo6l411i4StVx3BugFdqjOWVKIEJdEG0c";

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${GOOGLE_API_KEY}`;
export const AUTOCOMPLETE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_SUGGESTIONS_URL =
  "http://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";
