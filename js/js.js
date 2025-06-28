document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
    <nav class="navbar">
      <button class="menu-toggle">☰</button>
      <ul>
        <li><a href="index.html">HOME</a></li>
        <li><a href="about.html">ABOUT</a></li>
        <li><a href="contact.html">CONTACT</a></li>
      </ul>
    </nav>
  `;

  // Chèn navbar vào thẻ có id="navbar"
  document.getElementById("navbar").innerHTML = navbarHTML;

  // Thêm xử lý toggle menu
  const toggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".navbar ul");

  toggle.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});
