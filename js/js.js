document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <nav class="navbar">
      <button class="menu-toggle">☰</button>
      <ul>
        <li><a href="home.html">HOME</a></li>
        <li><a href="about.html">ABOUT</a></li>
        <li><a href="contact.html">CONTACT</a></li>
      </ul>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navbarHTML;

  // Gán class active theo URL
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".navbar ul li a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Toggle menu cho mobile
  const toggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".navbar ul");

  toggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
