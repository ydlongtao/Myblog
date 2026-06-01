const toggle = document.querySelector(".lang-toggle");
const year = document.querySelector("#year");
const root = document.documentElement;
const body = document.body;

const setLanguage = (language) => {
  const english = language === "en";
  body.classList.toggle("lang-en", english);
  root.lang = english ? "en" : "zh-CN";
  toggle.innerHTML = english
    ? "<span>中</span><span>/</span><span class=\"lang-active\">EN</span>"
    : "<span class=\"lang-active\">中</span><span>/</span><span>EN</span>";
  window.localStorage.setItem("ydlongtao-language", language);
};

toggle.addEventListener("click", () => {
  setLanguage(body.classList.contains("lang-en") ? "zh" : "en");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
year.textContent = new Date().getFullYear();
setLanguage(window.localStorage.getItem("ydlongtao-language") || "zh");
