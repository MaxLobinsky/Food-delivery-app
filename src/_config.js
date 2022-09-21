export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? "http://localhost:8080/" : "http://lobinsky.by/",
};

export const app = {
  title: "Flash",
};

export const links = [
  {
    title: "Home",
    alias: "home",
    url: "/",
  },
  {
    title: "About",
    alias: "about",
    url: "/about",
  },
];
