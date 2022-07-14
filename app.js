import getElement from "./getElement.js";
import getUser from "./getUser.js";
import displayUser from "./displayUser.js";
//img,user title, user value, btn, icons

const btn = getElement(".btn");

const showUser = async () => {
  // get user form api
  const person = await getUser();

  // display user
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
