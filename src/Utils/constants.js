const GOOGLE_API_KEY = "AIzaSyDo6l411i4StVx3BugFdqjOWVKIEJdEG0c";

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${[
  GOOGLE_API_KEY,
]}`;

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
