// Highlight active nav link based on current page
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = (a.getAttribute("href") || "").toLowerCase();
    if(href === path) a.classList.add("active");
  });
})();

// Accordion for Delegate Material page
(function(){
  const items = document.querySelectorAll("[data-accordion='item']");
  if(!items.length) return;

  items.forEach(item=>{
    const btn = item.querySelector("[data-accordion='btn']");
    btn?.addEventListener("click", ()=>{
      const isOpen = item.classList.contains("open");
      // close others (optional - comment this out if you want multiple open)
      items.forEach(i=> i.classList.remove("open"));
      // toggle this one
      if(!isOpen) item.classList.add("open");
    });
  });
})();
