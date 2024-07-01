
  document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

}); 

count=0
img_list=["https://ucarecdn.com/57f9c617-78ca-408d-b80a-3f41fb66d5a9/gallery11.jpg",
  "https://ucarecdn.com/abb6a023-9c66-4252-88a5-1664dab56520/gallery15.jpg",
  "https://ucarecdn.com/31f3f5b9-14f7-4f59-ad84-fbe7ce434bf6/gallery3.jpg",
  "https://ucarecdn.com/8decad5b-1284-4661-9581-f1f381f6b246/gallery7.jpg",
  "https://ucarecdn.com/9980e5e8-52a4-4db3-841e-071e466b801b/gallery2.jpg",
  "https://ucarecdn.com/c941c4ec-74f5-407a-84ab-d09f0a6eda3f/gallery19.jpg",
  "https://ucarecdn.com/1ed494d5-bd8e-45eb-8032-466d88a972a7/gallery18.jpg",
  "https://ucarecdn.com/0d627229-c185-4261-86f1-2adc0495dc4b/gallery10.jpg",
  "https://ucarecdn.com/4c3dbd87-63ef-4632-a596-c18af99d6aa1/gallery6.jpg",
  "https://ucarecdn.com/a334cd40-a1d8-44e0-8a1b-672336834c25/gallery12.jpg",
  "https://ucarecdn.com/2a352fb6-7ba4-4a02-abd1-a7a9773707ac/gallery14.jpg",
  "https://ucarecdn.com/76f44697-5c1e-4817-8e57-6468aa9b4598/gallery20.jpg",
  "https://ucarecdn.com/1a4fcda4-6399-4c68-9a2a-58688fdb5ec9/gallery5.jpg",
  "https://ucarecdn.com/42976b89-febe-415a-b78c-7f35394cc2f5/gallery17.jpg"
]
img=document.querySelector("img")
span=document.querySelector("#span")
function next(){
  if(count>=img_list.length-1){
    count=0 
    img.src=img_list[count]
    span.innerText=`${count+1}`
  }
  else{
    count+=1
    img.src=img_list[count]
    span.innerText=`${count+1}`
  }
}
function previous(){
  if(count==0){
    count=img_list.length-1
    img.src=img_list[count]
    span.innerText=`${count+1}`
  }
  else{
    count-=1
    img.src=img_list[count]
    span.innerText=`${count+1}`
  }
}
show=false
function slideshow(){
  if(!show){
    document.querySelectorAll("button")[2].innerText="stop"
  interval_id=setInterval(function(){
    next()
   } ,3000)
   show=true
  } else{
    clearInterval(interval_id)
    show=false
    document.querySelectorAll("button")[2].innerText="slideshow"
  }
}