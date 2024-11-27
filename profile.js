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
     
      
      userDiv.innerHTML += `<div class="row row1">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                    <div class="picture"  id="gallery">
                    <img src="${doc.data().resourceURl}" alt="">
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
    });
   });









// --------------file upload--------
// const cloudName = "dgtsbc43h";
// const unsignedUploadPreset = "mclp2wp0";

// let fileInput = document.getElementById("fileInput");
// console.log(fileInput + "ok mil gai")
// let gallery = document.getElementById("gallery");

// fileInput.addEventListener("change", () => {
//   let files = fileInput.files; // This will be a FileList object
//   if (files.length > 0) {
//     // Using for...of loop to iterate over files
//     for (let file of files) {
//       let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//       let fd = new FormData();
//       fd.append("upload_preset", unsignedUploadPreset);
//       fd.append("file", file);

//       fetch(url, {
//         method: "POST",
//         body: fd,
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           let resourceURl = data.secure_url;
          
//           // Fix: Correct URL transformation for cropping and face detection
//           let transformedUrl = resourceURl.replace(
//             "upload/",
//             "upload/c_thumb,g_auto,h_200,w_200/r_max/"
//           );

//           console.log("Uploaded successfully", resourceURl);

//           // Handle different file types (image, video, pdf)
//           if (data.format == "pdf" || data.format == "mp4" || data.format == "jpej") {
//             let iframe = document.createElement("iframe");
//             iframe.src = resourceURl;
//             iframe.width = "500px";
//             iframe.height = "500px";
//             gallery.appendChild(iframe);
//             console.log(iframe);
//           } else {
//             let img = new Image();
//             img.src = transformedUrl;

//             // Event listeners for loading and error
//             img.onload = () => {
//               gallery.appendChild(img);
//             };

//             img.onerror = (error) => {
//               console.error("Error loading image: ", error);
//             };
//           }
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     }
//   }
// });


// let dropArea = document.getElementById("dropArea");

// dropArea.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   console.log("Dragging over");
// });

// dropArea.addEventListener("drop", (event) => {
//   event.stopPropagation();
//   event.preventDefault();
//   console.log("Dropped");

//   let files = event.dataTransfer.files;
//   console.log(files);

//   // Using for...of loop to iterate over files dropped in the drop area
//   for (let file of files) {
//     let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//     let fd = new FormData();
//     fd.append("upload_preset", unsignedUploadPreset);
//     fd.append("file", file);

//     fetch(url, {
//       method: "POST",
//       body: fd,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         let resourceURl = data.secure_url;
        
//         // Fix: Correct URL transformation for cropping and face detection
//         let transformedUrl = resourceURl.replace(
//           "upload/",
//           "upload/c_thumb,g_auto,h_200,w_200/r_max/"
//         );

//         console.log("Uploaded successfully", resourceURl);

//         // Handle different file types (image, video, pdf)
//         if (data.format == "pdf" || data.format == "mp4") {
//           let iframe = document.createElement("iframe");
//           iframe.src = resourceURl;
//           iframe.width = "500px";
//           iframe.height = "500px";
//           gallery.appendChild(iframe);
//           console.log(iframe);
//         } else {
//           let img = new Image();
//           img.src = transformedUrl;

//           // Event listeners for loading and error
//           img.onload = () => {
//             gallery.appendChild(img);
//           };

//           img.onerror = (error) => {
//             console.error("Error loading image: ", error);
//           };
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }
// });

 