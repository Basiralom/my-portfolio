const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
const currentPage = (location.pathname.split("/").pop() || "index.html").toLowerCase();
const navItems = [
  ["index.html","Home"],["about.html","About"],["skills.html","Skills"],["projects.html","Projects"],["services.html","Services"]
];
if (header) {
  header.innerHTML = `<header class="site-header"><div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="Basir Alom home"><span class="brand-mark">BA.</span><span>Basir Alom<small>FULL STACK DEVELOPER</small></span></a>
    <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
    <nav class="nav-links" aria-label="Main navigation">${navItems.map(([href,label])=>`<a href="${href}" class="${currentPage===href?'active':''}">${label}</a>`).join("")}<a class="nav-contact ${currentPage==='contact.html'?'active':''}" href="contact.html">Contact ↗</a></nav>
  </div></header>`;
  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".nav-links");
  toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰";});
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰";}));
}
if (footer) {
  footer.innerHTML = `<footer class="site-footer"><div class="container footer-inner"><div class="footer-copy">© <span id="year"></span> Basir Alom · Designed with curiosity.</div><div class="footer-links"><a href="about.html">About</a><a href="skills.html">Skills</a><a href="projects.html">Projects</a><a href="contact.html">Contact ↗</a></div></div></footer>`;
  document.getElementById("year").textContent = new Date().getFullYear();
}
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    // Replace this address with your real email before publishing.
    const recipient = "YOUR_EMAIL@example.com";
    if (recipient === "YOUR_EMAIL@example.com") {
      const help = document.getElementById("formHelp");
      help.textContent = "Almost ready! Open script.js and replace YOUR_EMAIL@example.com with your real email address to enable email preparation.";
      help.classList.add("success");
      return;
    }
    const subject = encodeURIComponent(`[Portfolio] ${data.get("subject")} — ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nTopic: ${data.get("subject")}\n\n${data.get("message")}`);
    document.getElementById("formHelp").textContent = "Opening your email app…";
    location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}