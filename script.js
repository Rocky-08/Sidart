
'use strict'

// ------------------------------- Chnage by click on Navbar -------------------------------------

let works = document.querySelector('.works');
let prints = document.querySelector('.prints');
let abouts = document.querySelector('.about');
let _work = document.querySelector('.WORK');
let _price = document.querySelector('.PRICE');
let _about = document.querySelector('.ABOUT');
let Contact = document.querySelector('.CONTACT');

// --------------------------------------- Menu Hover --------------------------------------------

let menu = document.querySelector('.menu');

let nav_list = document.querySelector('.nav-list');

let count = 0;

menu.addEventListener('click',() => {

     if(count ==0)
     {
         count = 1;
     }

     else {
         count = 0;
     }
     
     nav_list.classList.toggle('deactive');
     
    })
    
    // ------------------------------------------ Change section ---------------------------------
    
    let allNavDeactive = () => {
        
        works.classList.add('active');
        prints.classList.add('active');
        abouts.classList.add('active');
        bigwork.classList.add('active');
        
    }
    
    _work.addEventListener('click',() => {
        allNavDeactive();
        console.log('Hi');
        works.classList.remove('active');
        
        if(count == 1)
        {
        nav_list.classList.toggle('deactive');
        count = 0;
        }
    
});

_price.addEventListener('click',() => {
    allNavDeactive();
    prints.classList.remove('active');
    if(count == 1)
    {
    nav_list.classList.toggle('deactive');
    count = 0;
    }
    
});

_about.addEventListener('click',() => {
    allNavDeactive();
    abouts.classList.remove('active');
    if(count == 1)
    {
    nav_list.classList.toggle('deactive');

    count = 0;

    }
})



// -------------------------------- Work ---------------------------------------

let workNameMode = [ {
    name : "Sparrow",
    mode : "Glass Painting on Glass"
}, {
    name : "Alone Fox",
    mode : "Water color and graphite Pencil on paper"
},  {
    name : "Dark Rose",
    mode : "Glass painting on Glass"
},  {
    name : "Lotus",
    mode : "Graphite Pencil on Paper"
},  {
    name : "Lord Krishna",
    mode : "Oil Painting on Canvas"
},  {
    name : "Mr.Robert",
    mode : "Graphite and charcol Pencil"
},  {
    name : "Queen of Atlantis",
    mode : "Oil painting on Canvas"
},  {
    name : "Alone",
    mode : "Water color on paper"
},  {
    name : "Autumn",
    mode : "Water color on paper"
},  {
    name : "Lord Narsingh Dev",
    mode : "Water color and graphite Pencil on paper"
},  {
    name : "Dragon",
    mode : "Glass painting on Glass"
} ,  {
    name : "Peacock",
    mode : "Glass painting on Glass"
},  {
    name : "Skeleton",
    mode : "Graphite and Charcol Pencil on paper"
},  {
    name : "Black Rainbow",
    mode : "Glass painting on Glass"
},  {
    name : "Rambo",
    mode : "Glass painting on Glass"
},  {
    name : "Witches",
    mode : "Graphite Pencil on Paper"
},  {
    name : "Sculpters",
    mode : "Gratified Pencil on paper"
},  {
    name : "Mother nature",
    mode : "Water color on paper"
},  {
    name : "Dark Forest",
    mode : "Acrylic color on Canvas"
},  {
    name : "Cloudy",
    mode : "Oil Paint on Canvas"
},  {
    name : "Early 18th",
    mode : "Glass painting on Glass"
},  {
    name : "Love",
    mode : "Acrylic Paint on Canvas"
},  {
    name : "Mr.Artist",
    mode : "Oil Paint on Canvas"
},  {
    name : "Mr.rancho",
    mode : " graphite Pencil on paper"
},  {
    name : "Rain",
    mode : "Glass painting on Glass"
},  {
    name : "Attitude",
    mode : "graphite Pencil on paper"
},  {
    name : "Butterfly",
    mode : "Water color on paper"
},  {
    name : "Eye",
    mode : " graphite Pencil on paper"
},  {
    name : "Mountain",
    mode : "Water color on paper"
},  {
    name : "Cutie",
    mode : " graphite Pencil on paper"
},  {
    name : "3DD",
    mode : " graphite Pencil on paper"
},  {
    name : "Beauty",
    mode : "graphite Pencil on paper"
},  {
    name : "Look",
    mode : " graphite Pencil on paper"
},  {
    name : "Empty",
    mode : "graphite Pencil on paper"
},  {
    name : "Angel",
    mode : "graphite Pencil on paper"
},  {
    name : "Veronica",
    mode : "graphite Pencil on paper"
},  {
    name : "Little",
    mode : "graphite Pencil on paper"
},  {
    name : "Happiness",
    mode : "graphite Pencil on paper"
}]

let workSize = [" 17cm * 27cm " , "42cm * 30cm" , " 17cm * 27cm " , " 30cm * 30cm " , "42cm * 30cm" , "42cm * 30cm" , "36inch * 30inch" , "42cm * 30cm" , " 15cm * 18cm " , "23inch * 33inch" , " 17cm * 27cm " , " 17cm * 27cm  " , "42cm * 30cm" , "17cm * 27cm " , "17cm * 27cm " , "42cm * 30cm " , "36cm * 30cm" , "42cm * 30cm" , "18inch * 24inch " , "30inch * 30inch" , "42cm * 30cm" , "44cm * 38cm" , "27cm * 20cm" , "42cm * 30cm " , " 17cm * 27cm" , " 42cm * 30 cm " , "42cm * 30cm" , " 15cm * 18cm " , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , " 15cm * 18cm " , " 15cm * 18cm " , " 42cm * 30cm ", "42cm * 30cm" , "42cm * 30cm" , " 42cm * 30cm " , "42cm * 30cm"];


let printSize = [" 17cm * 27cm " , "42cm * 30cm" , " 17cm * 27cm "  , "42cm * 30cm" , "42cm * 30cm" , "36inch * 30inch" , "42cm * 30cm" , " 15cm * 18cm " , "23inch * 33inch" , " 17cm * 27cm " , " 17cm * 27cm " , "42cm * 30cm" , " 17cm * 27cm " , " 17cm * 27cm " , "36cm * 30cm" , "42cm * 30cm" , "18inch * 24inch " , "30inch * 30inch" , "42cm * 30cm" , "44cm * 38cm" , "27cm * 20cm"  , " 17cm * 27cm "  , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm"];

let workYear = [" 2016 " , "2014" , " 2016 " , " 2020 " , "2019" , "2016" , "2019 (Time Period: 1 Month)" , "2014" , " 2019 " , "2020 (Time Period : 1 Month)" , " 2016 " , " 2016 " , "2014" , " 2016 " , " 2019 " , " 2019 " , "2014" , "2016" , "2019 (Time Period : 15 Days) " , "2019 (Time Period : 1 Month)" , "2019 " , "2019 (Time Period : 1 Month)" , "2019 (Time Period : 1 Month)" , " 2019 " , " 2019 " , "2019 " , "2014" , " 2019 " , "2019" , "2019" , "2021" , " 2020 " , " 2020 " , "2019 ", "2017" , "2014" , " 2019 " , "2021"];



let bigwork = document.querySelector('.bigwork')

let img = document.querySelectorAll('.img');
let showbigpic = document.querySelector('.showbigpic')
let backWork = document.querySelector('.moveback-btn');
let next = document.querySelector('.next-btn');
let prev = document.querySelector('.prev-btn');
let totalPics = img.length;


let showBig = (url) => {

    showbigpic.src = url;

}

let check;

let paintingName = document.querySelector('.painting-name');
let paintingType = document.querySelector('.painting-type');
let paintingDate = document.querySelector('.painting-date');
let paintingSize = document.querySelector('.painting-size');

img.forEach((ele,index) => {


    var rootElement = document.documentElement;
    
    ele.addEventListener('click',() => {
        check = index+1;
        showBig(ele.src);
        bigwork.classList.remove('active');
        paintingName.innerHTML = workNameMode[check-1].name;
        paintingType.innerHTML = workNameMode[check-1].mode;
        paintingDate.innerHTML = workYear[check-1];
        paintingSize.innerHTML = workSize[check-1];

     // ------------------- Scroll to top logic ----------------   
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
          })

       // ------------------ Logic end -------------------------   
    })

})

backWork.addEventListener('click',() => {
    bigwork.classList.add('active');
})

next.addEventListener('click',() => {
     
    console.log(check);
    if(check >= totalPics)
    {
        check = 0;
    }
    check++;
    showbigpic.src = `./Work/work-${check}.jpg`;
    paintingName.innerHTML = workNameMode[check-1].name;
    paintingType.innerHTML = workNameMode[check-1].mode;
    paintingDate.innerHTML = workYear[check-1];
    paintingSize.innerHTML = workSize[check-1];

    
})

prev.addEventListener('click',() => {
     
    if(check == 1)
    {
        check = totalPics+1;
    }
    check--;
    showbigpic.src = `./Work/work-${check}.jpg`;
    paintingName.innerHTML = workNameMode[check-1].name;
    paintingType.innerHTML = workNameMode[check-1].mode;
    paintingDate.innerHTML = workYear[check-1];
    paintingSize.innerHTML = workSize[check-1];
    
})


// --------------------------------------------- Prints ----------------------------------------------------------------

let backprint = document.querySelector('.backprint');
let sellbox = document.querySelector('.sellbox');
let imgsell = document.querySelectorAll('.imgsell');
let no;
let sellimage = document.querySelector('.sellImagePic');
let sellPics = document.querySelector('.sellPics');

// ----------------------------- Show image on box ----------------------
imgsell.forEach((ele,index) => {

    ele.addEventListener('click',()=>{
        no = index+1;
     
        sellimage.src = `./Print/print-${no}.jpg`;
        sellPics.classList.add('active');
        sellPics.classList.remove('grid-Container');
        sellbox.classList.remove('active');
        
    })
})

backprint.addEventListener('click',() => {
    
    sellbox.classList.add('active');
    sellPics.classList.remove('active');
    sellPics.classList.add('grid-Container');
})

let sellpic = document.querySelectorAll('.sellpic');
let sellName = document.querySelector('.sell-name')
let sellPrice = document.querySelector('.sell-price')

// ------------------------------ Show Details on box ----------------------
sellpic.forEach((ele,index) => {

    ele.addEventListener('click',() => {
    sellName.innerHTML = ele.lastElementChild.firstElementChild.innerHTML;
    sellPrice.innerHTML = ele.lastElementChild.lastElementChild.innerHTML
    })
})











// let workSize = [" " , "42cm * 30cm" , " " , " " , "42cm * 30cm" , "42cm * 30cm" , "36inch * 30inch" , "42cm * 30cm" , " " , "23inch * 33inch" , " " , " " , "42cm * 30cm" , " " , " " , " " , "36cm * 30cm" , "42cm * 30cm" , "18inch * 24inch " , "30inch * 30inch" , "42cm * 30cm" , "44cm * 38cm" , "27cm * 20cm" , " " , " " , " " , "42cm * 30cm" , " " , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , " " , " " , " ", "42cm * 30cm" , "42cm * 30cm" , " " , "42cm * 30cm"];


// let printSize = [" " , "42cm * 30cm" , " "  , "42cm * 30cm" , "42cm * 30cm" , "36inch * 30inch" , "42cm * 30cm" , " " , "23inch * 33inch" , " " , " " , "42cm * 30cm" , " " , " " , "36cm * 30cm" , "42cm * 30cm" , "18inch * 24inch " , "30inch * 30inch" , "42cm * 30cm" , "44cm * 38cm" , "27cm * 20cm"  , " "  , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm" , "42cm * 30cm"];

// let workYear = [" " , "2014" , " " , " " , "2019" , "2016" , "2019 (Time Period: 1 Month)" , "2014" , " " , "2020 (Time Period : 1 Month)" , " " , " " , "2014" , " " , " " , " " , "2014" , "2016" , "2019 (Time Period : 15 Days) " , "2019 (Time Period : 1 Month)" , "2019 " , "2019 (Time Period : 1 Month)" , "2019 (Time Period : 1 Month)" , " " , " " , " " , "2014" , " " , "2019" , "2019" , "2021" , " " , " " , " ", "2017" , "2014" , " " , "2021"];

// let workNameMode = [ {
//     name : "Sparrow",
//     mode : "Glass Painting on Glass"
// }, {
//     name : "Alone Fox",
//     mode : "Water color and graphite Pencil on paper"
// },  {
//     name : "Dark Rose",
//     mode : "Glass painting on Glass"
// },  {
//     name : "Lotus",
//     mode : "Graphite Pencil on Paper"
// },  {
//     name : "Lord Krishna",
//     mode : "Oil Painting on Canvas"
// },  {
//     name : "Mr.Robert",
//     mode : "Graphite and charcol Pencil"
// },  {
//     name : "Queen of Atlantis",
//     mode : "Oil painting on Canvas"
// },  {
//     name : "Alone",
//     mode : "Water color on paper"
// },  {
//     name : "Autumn",
//     mode : "Water color on paper"
// },  {
//     name : "Lord Narsingh Dev",
//     mode : "Water color and graphite Pencil on paper"
// },  {
//     name : "Dragon",
//     mode : "Glass painting on Glass"
// } ,  {
//     name : "Peacock",
//     mode : "Glass painting on Glass"
// },  {
//     name : "Skeleton",
//     mode : "Graphite and Charcol Pencil on paper"
// },  {
//     name : "Black Rainbow",
//     mode : "Glass painting on Glass"
// },  {
//     name : "Rambo",
//     mode : "Glass painting on Glass"
// },  {
//     name : "Witches",
//     mode : "Graphite Pencil on Paper"
// },  {
//     name : "Sculpters",
//     mode : "Gratified Pencil on paper"
// },  {
//     name : "Mother nature",
//     mode : "Water color on paper"
// },  {
//     name : "Dark Forest",
//     mode : "Acrylic color on Canvas"
// },  {
//     name : "Cloudy",
//     mode : "Oil Paint on Canvas"
// },  {
//     name : "Early 18th",
//     mode : "Glass painting on Glass"
// },  {
//     name : "Love",
//     mode : "Acrylic Paint on Canvas"
// },  {
//     name : "Mr.Artist",
//     mode : "Oil Paint on Canvas"
// },  {
//     name : "Mr.rancho",
//     mode : " graphite Pencil on paper"
// },  {
//     name : "Rain",
//     mode : "Glass painting on Glass"
// },  {
//     name : "Attitude",
//     mode : "graphite Pencil on paper"
// },  {
//     name : "Butterfly",
//     mode : "Water color on paper"
// },  {
//     name : "Eye",
//     mode : " graphite Pencil on paper"
// },  {
//     name : "Mountain",
//     mode : "Water color on paper"
// },  {
//     name : "Cutie",
//     mode : " graphite Pencil on paper"
// },  {
//     name : "3DD",
//     mode : " graphite Pencil on paper"
// },  {
//     name : "Beauty",
//     mode : "graphite Pencil on paper"
// },  {
//     name : "Look",
//     mode : " graphite Pencil on paper"
// },  {
//     name : "Empty",
//     mode : "graphite Pencil on paper"
// },  {
//     name : "Angel",
//     mode : "graphite Pencil on paper"
// },  {
//     name : "Veronica",
//     mode : "graphite Pencil on paper"
// },  {
//     name : "Little",
//     mode : "graphite Pencil on paper"
// },  {
//     name : "Happiness",
//     mode : "graphite Pencil on paper"
// }]