const fakeUser = {
  username: "Jungho",
  loggedIn: true,
};

export const trending = (req, res) => {
  const videos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  res.render("home", { pageTitle: "Home", fakeUser, videos });
};
export const see = (req, res) => {
  console.log(req.params);
  res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => res.render("Edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
