const GOOGLE_API_KEY = "AIzaSyDo6l411i4StVx3BugFdqjOWVKIEJdEG0c";
export const LIVE_CHAT_LIMIT = 20;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const AUTOCOMPLETE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
