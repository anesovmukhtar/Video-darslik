const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".cat-btn");
const cards = document.querySelectorAll(".card");

// Qidiruv funksiyasi
searchInput.addEventListener("keyup", function() {
  let filter = searchInput.value.toLowerCase();
  cards.forEach(function(card){
    let title = card.querySelector("h3").textContent.toLowerCase();
    if(title.includes(filter)){
      card.style.display="block";
    } else{
      card.style.display="none";
    }
  });
});

// Kategoriya filtrlash
categoryButtons.forEach(btn => {
  btn.addEventListener("click", function(){
    categoryButtons.forEach(b => b.classList.remove("active"));
    this.classList.add("active");

    let cat = this.getAttribute("data-category");

    cards.forEach(card => {
      if(cat === "all" || card.getAttribute("data-category") === cat){
        card.style.display="block";
      } else{
        card.style.display="none";
      }
    });
  });
});
