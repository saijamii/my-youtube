const GOOGLE_API_KEY = "AIzaSyDo6l411i4StVx3BugFdqjOWVKIEJdEG0c";
export const LIVE_CHAT_LIMIT = 20;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const AUTOCOMPLETE_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${GOOGLE_API_KEY}`;
