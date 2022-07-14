import getElement from "./getElement.js";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const icons = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  img.src = person.image;
  value.textContent = person.name;
  title.textContent = `My name is`;
  icons.forEach((icon) => icon.classList.remove("active"));
  icons[0].classList.add("active");
  icons.forEach((icon) => {
    const label = icon.dataset.label;
    icon.addEventListener("click", () => {
      //   console.log(person[label]);
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      icons.forEach((icon) => icon.classList.remove("active"));
      icon.classList.add("active");
    });
  });
};
export default displayUser;
