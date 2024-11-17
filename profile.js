import{collection,  db, 
    query, where,   onSnapshot, limit, 
  } from "./firebase.js";
 

  const usersRef = collection(db, "users");
  
  // const q = query(usersRef,orderBy("name","desc")) 
  const q = query(usersRef,where("age",">","18")) 
  
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
     console.count("calling");
    let userDiv = document.getElementById("userName");
    userDiv.innerHTML = "";
    querySnapshot.forEach((doc) => {
     
  
      userDiv.innerHTML += `<div class="row row1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <div class="picture">
                        <img class="img-fluid" src="https://picsum.photos/130/130?image=1027">
                    </div>
                    <div class="team-content">
                        <h3 class="name">${doc.data().name}</h3>
                        <h4 class="title">${doc.data().phone}</h4>
                        <h5 class="title">${doc.data().cnic}</h5>
                        <h5 class="title">${doc.data().address}</h5>
                        <h5 class="title">${doc.data().age}</h5>
                        <h5 class="title">${doc.data().hobbies}</h5>
                    </div>
                    <ul class="social">
                        <li><a href="#" aria-hidden="true"><i class="fa-brands fa-square-facebook fa-lg" style="color: #ffffff;"></i></a></li>
                        <li><a href="#" aria-hidden="true"> <i class="fa-brands fa-instagram fa-lg" style="color: #ffffff;"></i></a></li>

                        <li><a href="#"  aria-hidden="true"><i class="fa-brands fa-linkedin fa-lg" style="color: #ffffff;"></i></a></li>

                        <li><a href="#" aria-hidden="true"><i class="fa-brands fa-x-twitter fa-lg" style="color: #ffffff;"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>`;
      console.log(doc.data().name);
    });
   });

   
// ---------------
/* <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook"
                                aria-hidden="true"><i class="fa-brands fa-facebook fa-sm" style="color: #ffffff;"></i></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter"
                                aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus"
                                aria-hidden="true"></a></li>
                        <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin"
                                aria-hidden="true"></a></li> */
// --------------------------------------