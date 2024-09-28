// https://www.youtube.com/watch?v=NGe5tb9uMnY&list=PLLz3Av7ANpMHT-zI_GnoeoQ5ajRw4TJCW&index=39
  // var inputEl = document.getElementById("input");
  // var btn = document.getElementById("add");
  // var ulEl = document.getElementById("ul");
  // var delete_btn = document.getElementById("delete");
  //  btn.onclick = function(){
  //     addItem();
  //   };
  //   function addItem(){
  //     var vl = inputEl.value;
  //       if(vl != ""){
  //         ulEl.innerHTML += "<li>" + vl +  `<button id="delete">Delete</button>` + "</li>"
  //          inputEl.value = "";
  //          err.innerHTML = "";
  //       }else{
  //          document.getElementById("err").innerHTML = "you should fill this field";
  //       }
  //   }
  //  var car = {
  //     name : "toyota",
  //     model : 2001,
  //  }
  //  for (const x in car) {
  //     document.write(car[x]);
  //  }
  //  var arr = [ 1 , 2 , "islam" , {x : 1 , y : 2 , name : "islam"}];
  //  document.write(arr[3].name);
  //   var arr2 = [
  //     {
  //       name : "islam",
  //       age : "21"
  //     },
  //     {
  //       name : "youssef",
  //       age : "20"
  //     }
  //   ];
  //   for(var i = 0 ;  i < arr2.length ; i++){
  //       console.log(arr2[i].name + " " +arr2[i].age);
  //   }
  // var arr = [
  //     [{name : "islam" , address : "Alexandria"} , {age : "21"}],
  //     [{name : "ayman"} , {age : "31"}],
  //     [{name : "farid"} , {age : "41"}]
  // ];
  // document.write(arr[1][0].name);
  // Array method
  // var arr = ["islam" , "ayman" , "farid"];
  // arr.splice(arr.length  , 0 , "waad");
  // console.log(arr);


  // Variable
//   var first = document.getElementById("first");
//   var second = document.getElementById("second");
//   var sub = document.getElementById("sub");
//   var demo = document.getElementById("demo");
//   var ul_list = document.getElementById("ull");
   

//    sub.onclick = function(){
//       addItem();
// }
// function addItem(){
//   var f = first.value;
//   var s = second.value;
//   if(f != "" && s != ""){

//      ul_list.innerHTML += "<li>" + f +"</li>";
//      ul_list.innerHTML += "<li>" + s +"</li>";

//      first.value = "";
//      second.value = "";
    
//      demo.innerHTML = "";
//   }else{
//      document.getElementById("demo").innerHTML = "enter any thing please";
//   }
// }
//   var txt = ["isdfds" , "dsfds" , "lsdfds" , "adsfs" , "sdfsdfm"];
//   console.log(txt.join(""));
//   var txt2 = "Hello";
//   console.log(txt2.split("").reverse().join(""));
//  var i = 0;

//   var myImage = document.getElementById("slideshow");
  
//   var images = ["../photo/back1.jpg" , "../photo/back2.jpg" , "../photo/image5.jpg"];
//   function slideshow(){
//   myImage.setAttribute("src" , images[i]);
//    if(i == 2){
//      i =0;
//    }else{
//      i++  
//    }
//   }
//   setInterval(slideshow , 2000);
//   slideshow();
 

// start crud app

// var usern = document.getElementById("user");
// var phone = document.getElementById("phone");
// var email = document.getElementById("email");
// var button = document.getElementById("add_user");
// var ul_listing = document.getElementById("listing_user");
// var delete_all =document.getElementById("delete_all");
// var demo_delete =document.getElementById("demo_delete");
// var return_ = document.getElementById("return");
// var users = [];
// var count = 1;
// button.addEventListener('click' , addUser);
// function addUser(){
//   if(usern.value != '' &&  phone.value != '' && email.value != '' ){
//     var user = {
//       id : count++,
//       thename : usern.value,
//       phone : phone.value,
//       email : email.value
//     }
//     users.push(user);
//     drawUserUI();
//     emptyInput();
//   }
// }       
// addUser();

// function drawUserUI(){
//   ul_listing.innerHTML = "";
//   for(var i = 0 ; i < users.length ; i++){
//     ul_listing.innerHTML += "<li>" + " ID :"+users[i].id + "Name :" + users[i].thename  + 
//     + " Phone :" +users[i].phone + " Email :" + users[i].email +
//       "<button onclick='editUser("+users[i].id+")'>Edit</button>" +   
//       "<button onclick = 'deleteUser("+users[i].id+")'> delete</button></li>";
//   }
// }


// function emptyInput(){
//   usern.value = "";
//   phone.value = "";
//   email.value = "";
// }
  
// function deleteUser(id){
//   for(var i = 0 ; i < users.length ; i++){
//      if(users[i].id == id){
//       for(var w = 0 ; w < users.length ; w++){
//         demo_delete.innerHTML += "<li>"+ `the ID ${id} is Deleted` + 
//         "<button onclick='return_function("+users[w].id+")'>return values</button>" + "</li>";
      
//       }
//        users.splice(i , 1);       
//        drawUserUI();
//   }
// }

// }
// return_.onclick = function(){
//   ul_listing.style.display = "block";
// }

// delete_all.onclick = function() {
//       ul_listing.style.display = "none";
//   }



// function editUser(id){
//   for(var f = 0 ; f < users.length ; f++){
//      // put value in input
//      count = users[f].id;
//      email.value = users[f].email;
//      usern.value = users[f].thename;
//      phone.value = users[f].phone;
//      console.log(usern.value , users[f].email);
       
//        if(users[f].id == id){
//           // Delete
//           users.splice(f , 1);
//           drawUserUI();
//        }
//   }
// }
// end crud app

// promise :  (resolve) حاجه بتاخد وقت عشان تشتغل طيب لو الحاجه دي اشتغلت بيبقى اسمها 
//            (reject) لو مشتغلتش بيبقى اسمها 

// 1- send Request
// 2- where is the data will be sent
// 3- Response data in array of object

// fetch("المكان اللي عايز اجيب منه داتا")
// .then(fucntion(هنا بيبقى في باراميتر بيشيل جواه معلومات عن الداتا مش الداتا نفسها){})          لو ال فيتش اتنفذت بيبقى هدخل ع ال ذن
//  اسم الباراميتر.json        الجسون دي بيبقى جواها الداتا بتاعتي

// جوا اول واحده return دي اول طريقه لو هيبقى كل ذن لوحدها ف هحط 
//  fetch("https://jsonplaceholder.typicode.com/posts")
//  .then(function(res){
//   return  res.json()
//  })
//  .then(function(res2){
//   console.log(res2);
// })

//  return تاني طريقه لو هحط ذن جوه ذن يبقى من غير 
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(function(res){
//  res.json()
// .then(function(res2){
//   console.log(res2);
// })
// })
//  var data = document.getElementById('data');
//  var data_btn = document.getElementById('data_btn');
//  data_btn.addEventListener('click' , getdata)

//  function getdata(cd){
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res)=>res.json())
//    .then((res2)=> cd(res2))
//   .catch((res3) => console.log(res3+"we have a problem"))
//  }
//  getdata(function(data2){
//   for(var i = 0 ; i < data2.length ; i++){
//     data.innerHTML += `
//       <div class = "box">
//         <p>ID:</p>
//         <h1>${data2[i].id}</h1>
//       </div>
//     `
//   }
//  })


// view(function(){ // callback function لو في فانكشن بتاخد باراميتر فانكشن تانيه جواها يبقى اللي جواها دي اسمه 
//   console.log("islam");
// });//callback function معناها حاجه هتشتغل لما حاجه تانيه تخلص بستخدمها ف ال ريكويستات 

//  async function getUsers(){
//    try{
//     let d = await fetch("https://jsonplaceholder.typicode.com/posts")
//    let res = await d.json();
//    drawUsers(res);
//    }catch(err){
//      console.log(err);
//    }
//  } 
//  getUsers();
//  let dataa = document.getElementById('data');
//  function drawUsers(users){
//   for(let i = 0 ; i < users.length ; i++){
//     dataa.innerHTML +=`
//     <h2>${users[i].name}</h2>
//     <p>${users[i].email}</p>
//    `;
//   }
//  }
// let divElement = document.getElementById("dataa");
// async function getdata(){
//   try{
//      let d = await fetch("https://jsonplaceholder.typicode.com/posts")
//      let res = await d.json();
//       draw(res);
//   } catch(err){
//     console.log(err);
//   }
// }
// function draw(users){
//   for(let i = 0 ; i < users.length ; i++){
//       divElement.innerHTML += `
//          <h2>${users[i].email}</h2>
//          <p>${users[i].name}</p>
//       `
//   }
// } 

	//let sum = 0;
	//newarray.forEach((items)=> sum+=items.age);
	//console.log(sum)
	
//let ages = newarray.reduce((sum , item)=> sum + item.age , 0)
//console.log(ages)
 
 // let search_input = document.getElementById("search_input");
 // let search_btn = document.getElementById("search_btn");
 // let search_list = document.getElementById("search_list");
 
 // let newarray = [
  // {id : 1 , name : "islam" , age : 20},
  // {id : 2 , name : "ayman" , age : 22},
  // {id : 3 , name : "farid" , age : 33},
  // {id : 4 , name : "waad" , age : 44},
  // {id : 5 , name : "mohammed" , age : 44},
  // {id : 6 , name : "mohammed" , age : 22},
  // {id : 7 , name : "mohammed" , age : 58},

// ];  


 // search_btn.addEventListener('click' , search);
 // function search(){
	 // let value = searchEditor(search_input.value);
	 // if(value != ""){
		 // let searchedUser = newarray.filter(function(item){
		 // return searchEditor(item.name).includes(value);
	 // })
        // listUsers(searchedUser)
	 // }
	
	 // }
 
 // function searchEditor(sentence){
	 // return sentence.toLowerCase().trim();
 // }
 
 // function listUsers(users){
	 // search_list.innerHTML = "";
	  // users.forEach(function(items){
		  // search_list.innerHTML += `
		     // <li>${items.name}-${items.age}<button onclick="deleteUser(${items.id})">Delete</button></li>
		  // `
	  // });
 // }
 // listUsers(newarray);
 
 // function deleteUser(id){
	// newarray = newarray.filter((use)=>use.id != id);
	// listUsers(newarray)
 // }
 
  // let myInput = document.getElementById("myInput");
  // myInput.addEventListener('keyup' , function(){
	  // console.log(this.value);
	  // console.log(myInput.value)
  // })
  
  // let person = {
	  // name : "islam",
	  // age: "20",
	  // data : function(){
		  // console.log(this.name  + this.age)
	  // }
  // }
  // person.data();
  // class car{
	  
	  // constructor(model , name , price){
		  // this.model = model;
		  // this.name = name;
		  // this.price = price;
		  // this.func = function(){
			  // console.log("how are you")
		  // }
	  // }
  // }
  	  // let c = new car(2022 , "Toyota" , 100000);
	  // c.name = "islam"
	  // c.func();  
  	  // console.log(c)
   // function Employee(name , age  , wieght){
	   // this.name = name;
	   // this.age = age;
	   // this.wieght = wieght;
   // }
   // let store = new Employee("islam" , 21 , 65);
   // console.log(store);
     
	 // class Car{
		 // constructor(name , model , price){
			  // this.name = name;
		  // this.model = model;
		  // this.price = price;
		 // }
	 // }
	 // class BMW extends Car{
		 // constructor(name , price  , model, color){
			 // super(name , price , model);
			 // this.color = color		 
		 // }
	 // }
	 // let car = new Car("islam" , 2001 , 50000);
	 // console.log(car);
	 
	 // let bmw =  new BMW("islam" , 2004 , 205000 , "blue");
	 // console.log(bmw);
	 
	 
	 
	 
	  // let users = [
	 // {id: 1 , name : "islam" , age : 22},
	 // {id: 2 , name : "ayman" , age : 25},
	 // {id: 3 , name : "farid" , age : 78},
	 // {id: 4 , name : "mohammed" , age : 250},
	 // {id: 5 , name : "dweer" , age : 92},
	 // ];
	 
	 // let myInput = document.getElementById('myInput');
	 // let search_btn = document.getElementById('search');
	 // let ul_listing = document.getElementById('ul_listing');
	 // search_btn.addEventListener('click' , search);
	 // function search(){
		   // let value = editor(myInput.value);
		   // if(value != ''){
			   // let searched = users.filter(function(looped){
				    // return  editor(looped.name).includes(value);
			   // })
                // drawUI(searched)
		   // }
	 // }
	 
	  
	  
	  
	  
	 // function drawUI(arr){
		    // ul_listing.innerHTML = "";
		    // arr.forEach(function(items){
				 // ul_listing.innerHTML += `
				// <li>${items.name}-${items.age}</li>`
			// })
		 
		 // console.log(ul_listing)
	 // }
	 // drawUI(users);
	 
	 
	  
	  
	  // function editor(sentence){
		  // return sentence.toLowerCase().trim();
	  // }
	 
	 // let change_arr = ["blue" , "red" , "black" , "yellow" , "green" , "azure"];
	 // let btn_change = document.getElementById('change');
	 
	 // btn_change.addEventListener('click' , change)
	 
	 // function change(){
		  // let randomColor = change_arr[Math.floor(Math.random()* change_arr.length)]
		  // document.body.style.background = random
		 // }Color
		 
		 // let counter = document.getElementById("counter");
		 // let increase = document.getElementById("increase");
		 // let dicrease = document.getElementById("dicrease");
		 // let inc = 0;
	// increase.onclick = function(){
		// counter.textContent++;
		// console.log(counter);
	// }
	
	// dicrease.onclick = function(){
		// counter.innerText--;
	// }
	  
	  
	  // let myInput = document.getElementById('myInput');
	  // let sub = document.getElementById('sub');
	  // let show = document.getElementById('show');
	  // let err = document.getElementById('err');
	 // let test = sub.addEventListener('click' , show_func);
	  
	  // function show_func(){
		  // if(myInput.value != ""){
			   // show.innerText = myInput.value;
		  		  // myInput.value = "";
		  // }else{
			  // show.innerHTML = "";
		      // err.innerHTML = "Please Enter A Value To Pass";
		  	  // setTimeout( time, 3000)
	
	  // }
		 
	  // }
	  
	  // function time(){
           
		  // err.innerHTML = "";
      // }

	  // var arr = [" how are you", "i am fine" , "welcome islam" , "where are you know"];
	  // var arr2 = [1 , 2 , 3 , 4];
	 
       // var x = 0;
	   // var y = 0;
	   // console.log(x , y)
	  // var btn_change = document.getElementById("change");
	  // var container = document.getElementById("container");
	 
	  
	   // btn_change.addEventListener('click' , change_func);
	   
	   // function change_func(){
		   // let result = arr.map((item)=>item);
		   // let result2 = arr2.map((item2)=>item2)
		   // if(x < 4 && y < 4){
		   
		  
		   // console.log(result[x++] , result2[y++])
		 
		  // }else{
			  // x = 0;
			  // y = 0;
		  // }
	   // }
		  
		  
		  // function Charchter(name , strength , hitpoint){
			  // this.name = name;
			  // this.strength = strength;
			  // this.hitpoint = hitpoint;
		  // }
		  // Charchter.prototype.state = function(){
			  // console.log(`${this.name} -- ${this.strength} -- ${this.hitpoint}`)
		  // }
		  // Charchter.prototype.attack = function(opponent){
			  // if(opponent.hitpoint > 0){
				  // console.log(`${this.name} attacked ${opponent.name}`)
			      // opponent.hitpoint -= this.strength
			  // }else{
				  // console.log(`${opponent.name} is died!`)
			  // }
			  
		  // }
		  
		  // let ahmed = new Charchter('ahmed' , 10 , 100);
		  // let islam = new Charchter('islam' , 20 , 100);
		  
		
		   // islam.attack(ahmed);
		    // islam.attack(ahmed);
			// islam.attack(ahmed);
			// islam.attack(ahmed);
			// islam.attack(ahmed);
			// islam.attack(ahmed);
			// islam.attack(ahmed);
		   // ahmed.state();
		   
		//    let searchbtn = document.getElementById('search-btn');
		//    let searchInput = document.getElementById('search-input');
		//    let resultArea = document.querySelector('.search-result');
		   
		 
		   
		//    let recipent_url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
		   
		//    function getrecipent(){
				
		// 	   fetch(recipent_url + localStorage.getItem("searchitem"))
		// 	   .then(function(res){
		// 		  return res.json();
		// 	   })
		// 	   .then(function(data){
		// 		   drawRecipentData(data); 
		// 	   });

		//    }
		//      getrecipent();
		   
		//    function drawRecipentData(recipent){
		// 	   console.log(recipent.meals)
		// 	   resultArea.innerHTML = "";
			   
		// 	   if(recipent.meals){
		// 		     recipent.meals.forEach(function(item){
		// 				resultArea.innerHTML +=`<div class='result-item'>
		// 				     <div class='search-img'>
		// 					   <img src='${item.strMealThumb}' alt='image'/>
		// 					 </div>
		// 				     <div class='search-info'>
		// 					    <h1>${item.strMeal}</h1>
		// 						<a href='#' class='desc-item-btn'>Get Description</a>
		// 					 </div>
		// 				  </div>`
		// 			 })
		// 		   }
		// 	   }
		   
	    //   let arr = ["islam" , "ayman" , "farid" , "mohammed"];
		  
		// let result =  arr.filter((item)=>{
		// 	  return  item != "islam";
		//   });
		  
		//   console.log(result)

		let toggleButton = document.getElementById('toggleButton')
		let toggleSection = document.getElementById('toggleSection')
        let closeButton = document.getElementById('closeButton')
		let dateSection = document.getElementById('dateSection')
		 
		toggleButton.onclick = function(){
			toggleSection.classList.toggle('active')
		}

		closeButton.onclick = function(){
			toggleSection.classList.add('active')		
		}

		dateSection.innerHTML =new Date().getSeconds();
         
		// window.onoffline = function(){
		// 	document.write('check internet please')
		// }
		// window.ononline = function(){
		// 	alert('internet is return')
		// }
    
        if (navigator.onLine) {
			alert('online');
		  } else {
			alert('offline');
		  }


		 