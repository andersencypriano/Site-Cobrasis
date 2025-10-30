
export default function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);

    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          behavior: "smooth",
          top:
            targetElement.getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            81,
        });
      }
    }
  }
