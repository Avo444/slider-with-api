let getSliderContentWrapper = document.querySelector(".blog-slider__wrp.swiper-wrapper");
fetch("https://jsonplaceholder.typicode.com/posts").then(response => response.json())
.then((result) => {
	for(let x = 1; x <= result.length; x++) {
    let random = parseInt(Math.random() * result.length);
    let item = document.createElement("div")
    item.classList.add("blog-slider__item", "swiper-slide")

    let imgContent = document.createElement("div")
    imgContent.classList.add("blog-slider__img");

    let img = document.createElement("img");
    
    fetch("https://randomuser.me/api/").then((r) => r.json()).then((res) => img.src = res.results[0].picture.large);
    let content = document.createElement("div");
    content.classList.add("blog-slider__content");


    let blogTitle = document.createElement("div");
    blogTitle.innerText = result[random].title;
    blogTitle.classList.add("blog-slider__title");

    let blogText = document.createElement("div");
    blogText.classList.add("blog-slider__text");
    blogText.innerHTML = result[random].body

    
    content.appendChild(blogTitle);
    content.appendChild(blogText);
    imgContent.appendChild(img);
    item.appendChild(imgContent)
    item.appendChild(content)
    getSliderContentWrapper.appendChild(item)
  }

}).then(() => {
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 2000,
      },
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
})