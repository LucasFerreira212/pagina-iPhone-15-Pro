const buttons = document.querySelectorAll("#img-picker li");
const img = document.querySelector("#product-img");

buttons.forEach((btn) => {
   btn.addEventListener("click", (e) => {
      console.log(e);

      buttons.forEach((btn) => {
         btn.querySelector(".color").classList.remove("selected");
      });

      const button = e.target;

      const id = button.getAttribute("id");

      button.querySelector(".color").classList.add("selected");

      img.classList.add("changing");
      img.setAttribute("src", `img/iphone-titanium-${id}.jpg`);

      setTimeout(() => {
         img.classList.toggle("changing");
      }, 200);
   });
});