const scrollTo = (id: string) => {
  const navbarHeight = 96;
  const section = document.getElementById(id);

  if (section) {
    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }
};

export default scrollTo;
