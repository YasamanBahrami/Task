


function saveBook() {
    const formData = new FormData(document.getElementById("save-form"));
    formData.append("api_token", "5whPujwod0ySAZmBG4B2h0TF0cZVDJt3bbvqsBnd8a6ACBRoX4l87UmvZYkyZhBQCuxzGagFwlO6ZyolGs2dJhHhr33XAutKEw8O");

    fetch("https://book.afarokhru.ir/api/v1/admin/books/changeStatus/ddd-4", {
        method: "Get",
        
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}




// let saveBook=document.querySelector(".saveBook");
// const book = {
//     numberBook: "",
//     book	: "",
//     englishName:"",
//     writer:"",
//     translator:"",
//     category:"",
//     summary:"",
//     status:"",
//     createdTime:"",
//     updateTime:""
  
//   };
  
//   saveBook.addEventListener("click",function(){
//     // book.numberBook= document.querySelector(".valueName").value;
//     book.book= document.querySelector(".valueName").value;
//     // book.englishName= document.querySelector(".valueName").value;
//     // book.writer= document.querySelector(".valueName").value;
//     // book.translator= document.querySelector(".valueName").value;
//     // book.category= document.querySelector(".valueName").value;
//     // book.createdTime= document.querySelector(".valueName").value;
//     // book.updateTime= document.querySelector(".valueName").value;
    
//     console.log(book);
  

//    fetch("http://book.afarokhru.ir/api/v1/admin/books/createhttp://book.afarokhru.ir/api/v1/admin/books/changeStatus/ddd-4?api_token=0oOJdmMHZEXN3E0VhQATYAoxx4QuDI3wch2GEDrQWEZfprSSt3gbctWbzDid9elB2fklLsWRTaFLpT58Six6lV1D0VkGBdHeFY1K", {
//        method: "Get",
      
//    })
//        .then(response => response.json())
//        .then(data => {
//            console.log(data);
//        })
//        .catch(error => {
//            console.error(error);
//        });

    
//  })


// let rate=document.querySelector(".rating-stars");
// stars();
// function stars(){
//     for(let i=0;i<4;i++){
//         rate.innerHTML+=`   <input type="radio" name="rating" id="rs0" checked><label for="rs0"></label>`
        
    
//     }
// }


