let videos = [
  {
    title: "First Video",
    rating: 10,
    comments: 5,
    createAt: "3 minutees ago",
    views: 60,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 8,
    comments: 10,
    createAt: "1 minutees ago",
    views: 55,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createAt: "2 minutees ago",
    views: 59,
    id: 3,
  },
];

const fakeUser = {
  username: "Jungho",
  loggedIn: true,
};

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("watch", {
    pageTitle: `Watching ${video.title}`,
    fakeUser,
    video,
  });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("Edit", {
    pageTitle: `Editing : ${video.title}`,
    video,
    fakeUser,
  });
};
export const postEdit = (req, res) => {};
