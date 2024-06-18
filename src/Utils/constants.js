const GOOGLE_API_KEY = "AIzaSyCcdTRerjIE6OPD-SDI490elTlXeJNGBMo";
export const LIVE_CHAT_LIMIT = 20;

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const AUTOCOMPLETE_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${GOOGLE_API_KEY}`;
