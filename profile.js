import{collection,  db, 
  query, where,   onSnapshot, limit, 
} from "./firebase.js";


  const usersRef = collection(db, "users");


  // const q = query(usersRef,orderBy("name","desc")) 
  const q = query(usersRef,where("age",">","18")) 
  
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    // fetch(url, {
    //   method: "POST",
    //   body: fd,
    // })
     console.count("calling");
    let userDiv = document.getElementById("userDiv");
    userDiv.innerHTML = "";
    // console.log(userDiv, "notnow")
    querySnapshot.forEach((doc) => {

      // Default image in case resourceURl is missing
       const userImage = doc.data().resourceURl || "default-image-url.jpg";
      
      userDiv.innerHTML += `<div class="row row1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <div class="picture"  id="gallery">
                    <img src="${userImage}" alt="im ok"></img>
                    </div>
                      <div  id="dropArea">
                     
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
      console.log("Fetched Data:", doc.data());

    });
   }); ////sahi code

















// --------------chatgpt---------
// import { collection, db, query, where, onSnapshot, doc, getDoc } from "./firebase.js";

// // Fetch Single Document
// const docRef = doc(db, "users", "VALID_DOCUMENT_ID"); // Replace with a valid document ID
// try {
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//         const data = docSnap.data();
//         console.log("User Data:", data);

//         document.querySelector("#userDiv").innerHTML = `
//             <h1>${data.name || "N/A"}</h1>
//             <p>${data.email || "N/A"}</p>
//             <img src="${data.imageURL || "default-image-url.jpg"}" alt="Profile Picture">
//         `;
//     } else {
//         console.log("No document found!");
//     }
// } catch (error) {
//     console.error("Error fetching document:", error);
// }

// // Real-Time Listener for Query
// const usersRef = collection(db, "users");
// const q = query(usersRef, where("age", ">", 18)); // Example query
// onSnapshot(q, (querySnapshot) => {
//     console.count("Live update triggered");
//     const userDiv = document.getElementById("userDiv");
//     userDiv.innerHTML = "";

//     querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         const userImage = userData.imageURL || "default-image-url.jpg"; // Default image

//         userDiv.innerHTML += `
//             <div class="row row1">
//                 <div class="col-12 col-sm-6 col-md-4 col-lg-3">
//                     <div class="our-team">
//                         <div class="picture">
//                             <img src="${userImage}" alt="User Image">
//                         </div>
//                         <div class="team-content">
//                             <h3 class="name">${userData.name || "N/A"}</h3>
//                             <h4 class="title">${userData.phone || "N/A"}</h4>
//                             <h5 class="title">${userData.cnic || "N/A"}</h5>
//                             <h5 class="title">${userData.address || "N/A"}</h5>
//                             <h5 class="title">${userData.age || "N/A"}</h5>
//                             <h5 class="title">${userData.hobbies || "N/A"}</h5>
//                         </div>
//                         <ul class="social">
//                             <li><a href="#"><i class="fa-brands fa-square-facebook fa-lg" style="color: #ffffff;"></i></a></li>
//                             <li><a href="#"><i class="fa-brands fa-instagram fa-lg" style="color: #ffffff;"></i></a></li>
//                             <li><a href="#"><i class="fa-brands fa-linkedin fa-lg" style="color: #ffffff;"></i></a></li>
//                             <li><a href="#"><i class="fa-brands fa-x-twitter fa-lg" style="color: #ffffff;"></i></a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         `;
//         console.log("Fetched Data:", userData);
//     });
// });
