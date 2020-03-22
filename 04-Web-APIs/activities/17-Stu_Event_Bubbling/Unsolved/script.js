var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var picIndex = 1


function changeNext(event) {
    event.stopPropagation();
    event.currentTarget.(picIndex += 
     
    );
  }
;

function changePrev(event) {
    event.stopPropagation();
    event.currentTarget.(picIndex -= 
     
    );
  }
;



next.addEventListener("click", changeNext);
prev.addEventListener("click", changePrev);