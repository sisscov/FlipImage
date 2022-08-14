function getImage() {
  let link = document.getElementById("search_input").value;

  if (link == "") {
    alert("Enter the address of image in the search field");
    getImage.preventDefault();
  }

  document.getElementById("img_top_right").src = link;
  document.getElementById("img_top_left").src = link;
  document.getElementById("img_bot_right").src = link;
  document.getElementById("img_bot_left").src = link;
}
function setTopLeft() {
  if (document.getElementById("top_left").onclick) {
    variant = document.getElementById("img_top_left");
    checkKey(variant);
    deleteBorder();
    document.getElementById("img_top_left").style.border =
      "5px solid rgb(18, 3, 77)";
  }
}
function setTopRight() {
  if (document.getElementById("top_right").onclick) {
    variant = document.getElementById("img_top_right");
    checkKey(variant);
    deleteBorder();
    document.getElementById("img_top_right").style.border =
      "5px solid rgb(18, 3, 77)";
  }
}
function setBotLeft() {
  if (document.getElementById("bot_left").onclick) {
    variant = document.getElementById("img_bot_left");
    checkKey(variant);
    deleteBorder();
    document.getElementById("img_bot_left").style.border =
      "5px solid rgb(18, 3, 77)";
  }
}
function setBotRight() {
  if (document.getElementById("bot_right").onclick) {
    variant = document.getElementById("img_bot_right");
    checkKey(variant);
    deleteBorder();
    document.getElementById("img_bot_right").style.border =
      "5px solid rgb(18, 3, 77)";
  }
}
function checkKey(variant) {
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      //left
      case 37:
        variant.style.transform = "scaleX(-1)";
        break;
      //up
      case 38:
        variant.style.transform = "scaleY(1)";
        break;
      //right
      case 39:
        variant.style.transform = "scaleX(1)";
        break;
      //down
      case 40:
        variant.style.transform = "scaleY(-1)";
        break;
    }
  };
}
function deleteBorder() {
  document.getElementById("img_top_left").style.border = "none";
  document.getElementById("img_top_right").style.border = "none";
  document.getElementById("img_bot_left").style.border = "none";
  document.getElementById("img_bot_right").style.border = "none";
}
function imageError() {
  document.getElementById("img_top_right").src = "./css/images/basic_image.jpg";
  document.getElementById("img_top_left").src = "./css/images/basic_image.jpg";
  document.getElementById("img_bot_right").src = "./css/images/basic_image.jpg";
  document.getElementById("img_bot_left").src = "./css/images/basic_image.jpg";
  alert("We can't find your picture. Please check that the link is correct");
}