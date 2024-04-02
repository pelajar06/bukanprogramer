var users = [
  {
    username: "rasyid",
    password: "",
    redirectUrl: "https://i.ibb.co/NVvdh7b/IMG-2498-110636.jpg",
  },

  {
    username: "jascha",
    password: "",
    redirectUrl: "https://i.ibb.co/dGb8FRt/IMG-20240314-WA0010.jpg",
  },

  {
    username: "aksansaepul",
    password: "",
    redirectUrl:
      "https://i.ibb.co/zSz9BGq/Screenshot-2024-04-02-00-50-01-212-com-miui-gallery.jpg",
  },
];

function login1() {
  var inputUsername = document.getElementById("user").value;
  var inputPassword = document.getElementById("pass").value;

  var validUser = users.find(function (user) {
    return user.username === inputUsername && user.password === inputPassword;
  });

  if (validUser) {
    alert("MANTAP LURR!");
    window.location.href = validUser.redirectUrl;
  } else {
    alert("SALAH kak !");
  }
}
