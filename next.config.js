module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwn_LrLf0ZgeI8iE-qlZW6mDeZ5HC7lYO8dA&usqp=CAU",
    ],
  },
};

const withImages = require("next-images");
module.exports = withImages();
