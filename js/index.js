var script = document.createElement('SCRIPT');
script.src = "https://api.vk.com/method/photos.get?owner_id=-37512548&album_id=164359161&access_token=b90de1bdb90de1bdb90de1bdf8b96aa58abb90db90de1bde50e1574bb91f26336ad6d70&v=5.92&count=108&callback=callbackFunc";
document.getElementsByTagName("head")[0].appendChild(script);

function callbackFunc(result){ 
  for (let i = 0; i < result.response.count; i++){ 
  let img = document.createElement('img'); 
  img.src = result.response.items[i].sizes[6].url; 
  img.id = i; 
  img.width = '320';
  img.height = '200';
  img.className = 'gallery__img';
  document.getElementById('all_photos').appendChild(img);
  img.onclick = function(){
    modal.style.display = "block";
    id = +this.id;
    let photo = document.createElement('img');
    photo.className = 'modal-content';
    photo.src = result.response.items[id].sizes[6].url;
    document.getElementById('box').appendChild(photo);
    } 

document.getElementById('right').onclick = function(){
  if (id+1 < result.response.count) {
    id+=1;
  }else {
    id = -1;
    id++;
  }
  let modalBox = document.getElementById('box');
  let main = modalBox.firstChild;

  while (main){
    modalBox.removeChild(main);
    main = modalBox.firstChild;
  }

  let photo = document.createElement('img');
  photo.className = 'modal-content';
  photo.src = result.response.items[id].sizes[6].url;
  document.getElementById('box').appendChild(photo);
}

document.getElementById('left').onclick = function() {
  if (id-1 >= 0) {
    id-=1
  }else {
    id = +result.response.count - 1;
  }

  let modalBox = document.getElementById('box');
  let main = modalBox.firstChild;
  while(main) {
    modalBox.removeChild(main);
    main = modalBox.firstChild;
  }

  let photo = document.createElement('img');
  photo.className = 'modal-content';
  photo.src = result.response.items[id].sizes[6].url;
  document.getElementById('box').appendChild(photo);
}

  let bottomPhoto = document.createElement('img');
  bottomPhoto.src = result.response.items[i].sizes[6].url;
  bottomPhoto.height = '130';
  bottomPhoto.width = '250';
  bottomPhoto.count = 2;
  bottomPhoto.id = i;
  bottomPhoto.position = 0;
  let li = document.createElement('li');
  li.src = result.response.items[i].sizes[6].url;
  li.appendChild(bottomPhoto);
  document.getElementById('modal-carusel__img').appendChild(li);

  let modalCarusel = document.getElementById('modal-carusel');
  let list = modalCarusel.querySelector('ul');
  let listElems = modalCarusel.querySelectorAll('li'); 

  document.getElementById('btn_next').onclick = function() {
    bottomPhoto.position = Math.max(bottomPhoto.position - bottomPhoto.width * bottomPhoto.count);
    list.style.marginLeft = bottomPhoto.position + 'px';
  };

  document.getElementById('btn_prev').onclick = function() {
    bottomPhoto.position = Math.min(bottomPhoto.position + bottomPhoto.width*bottomPhoto.count,0);
    list.style.marginLeft = bottomPhoto.position + "px";
  };

    bottomPhoto.onclick = function() {
      modal.style.display = "block";
    id = +this.id;
      let modalBox = document.getElementById('box');
      let main = modalBox.firstChild;
      while(main) {
      modalBox.removeChild(main);
      main = modalBox.firstChild;
      }
      let photo = document.createElement('img');
    photo.className = 'modal-content';
    photo.src = result.response.items[id].sizes[6].url;
    document.getElementById('box').appendChild(photo);
    }
  } 
} 

window.onload = function(){
  setTimeout(function(){
    document.getElementById("preload").style.display = "none";
  });
};

window.onscroll = function() {
   let scrollElem = document.getElementById("scrollToTop");
   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
      document.getElementById("scrollToTop").style.opacity = "1";
   }
   else{
      document.getElementById("scrollToTop").style.opacity = "0";
   }
}

let timeOut;
function goUp() {
  var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0, -100);
    timeOut = setTimeout('goUp()', 20);
  }else clearTimeout(timeOut);
}
document.getElementById("scrollToTop").onclick = goUp;


let modal = document.getElementById('myModal');
let closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function() { 
  modal.style.display = "none";
  let modalBox = document.getElementById('box');
  let main = modalBox.firstChild;
  while(main) {
    modalBox.removeChild(main);
    main = modalBox.firstChild;
  }
}


