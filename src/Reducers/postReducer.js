var posts = [
  {
    _id: 25650697,
    title: "Gene Wolfe Turned Science Fiction into High Art (2019)",
    points: 103,
    user: "samclemens",
    time: 1609879106,
    time_ago: "13 hours ago",
    comments_count: 94,
    type: "link",
    url: "https://www.theringer.com/2019/4/25/18515675/gene-wolfe-science-fiction-author",
    domain: "theringer.com",
  },
  {
    _id: 25649740,
    title: "Clip: Connecting Text and Images",
    points: 105,
    user: "sama",
    time: 1609874375,
    time_ago: "14 hours ago",
    comments_count: 8,
    type: "link",
    url: "https://openai.com/blog/clip/",
    domain: "openai.com",
  },

  {
    _id: 25649557,
    title: "DALL·E: Creating Images from Text",
    points: 906,
    user: "todsacerdoti",
    time: 1609873701,
    time_ago: "14 hours ago",
    comments_count: 179,
    type: "link",
    url: "https://openai.com/blog/dall-e/",
    domain: "openai.com",
  },

  {
    _id: 25655066,
    title: "US doctor forgives $650k in medical bills for cancer patients",
    points: 114,
    user: "williamsharris",
    time: 1609913616,
    time_ago: "3 hours ago",
    comments_count: 103,
    type: "link",
    url: "https://www.bbc.com/news/world-us-canada-55544496",
    domain: "bbc.com",
  },
];

const postReducer = (state = posts, action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat(action.newpost);
    case "REMOVE_POST":
      return state.filter((el) => el._id !== action._id);
    case "UPDATE_POSTS":
      return (state = action.posts);
    default:
      return state;
  }
};
export default postReducer;
