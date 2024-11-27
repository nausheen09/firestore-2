import{collection, addDoc, db, 
  // doc, setDoc, updateDoc, 
  arrayUnion, 
  // arrayRemove,
  query, where,   onSnapshot, limit, 
  // getDocs, getDoc, serverTimestamp, orderBy,  
  //getDoc, 
} from "./firebase.js";


// -----------cloudinay----------
const cloudName = "dgtsbc43h";
const unsignedUploadPreset = "mclp2wp0";

let fileInput = document.getElementById("fileInput");
console.log(fileInput + "ok mil gai")
let gallery = document.getElementById("gallery");

fileInput.addEventListener("change", () => {
  let files = fileInput.files; // This will be a FileList object
  if (files.length > 0) {
    // Using for...of loop to iterate over files
    for (let file of files) {
      let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

      let fd = new FormData();
      fd.append("upload_preset", unsignedUploadPreset);
      fd.append("file", file);

      fetch(url, {
        method: "POST",
        body: fd,
      })
        .then((response) => response.json())
        .then((data) => {
          let resourceURl = data.secure_url;
          
          // Fix: Correct URL transformation for cropping and face detection
          let transformedUrl = resourceURl.replace(
            "upload/",
            "upload/c_thumb,g_auto,h_200,w_200/r_max/"
          );

          console.log("Uploaded successfully", resourceURl);

          // Handle different file types (image, video, pdf)
          if (data.format == "pdf" || data.format == "mp4" || data.format == "jpej") {
            let iframe = document.createElement("iframe");
            iframe.src = resourceURl;
            iframe.width = "500px";
            iframe.height = "500px";
            gallery.appendChild(iframe);
            console.log(iframe);
          } else {
            let img = new Image();
            img.src = transformedUrl;

            // Event listeners for loading and error
            // img.onload = () => {
            //   gallery.appendChild(img);//error da rha hai
            // };

            img.onerror = (error) => {
              console.error("Error loading image: ", error);
            };
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
});




let dropArea = document.getElementById("dropArea");

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  console.log("Dragging over");
});

dropArea.addEventListener("drop", (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log("Dropped");

  let files = event.dataTransfer.files;
  console.log(files);

  // Using for...of loop to iterate over files dropped in the drop area
  for (let file of files) {
    let url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    let fd = new FormData();
    fd.append("upload_preset", unsignedUploadPreset);
    fd.append("file", file);

    fetch(url, {
      method: "POST",
      body: fd,
    })
      .then((response) => response.json())
      .then((data) => {
        let resourceURl = data.secure_url;
        
        // Fix: Correct URL transformation for cropping and face detection
        let transformedUrl = resourceURl.replace(
          "upload/",
          "upload/c_thumb,g_auto,h_200,w_200/r_max/"
        );

        console.log("Uploaded successfully", resourceURl);

        // Handle different file types (image, video, pdf)
        if (data.format == "pdf" || data.format == "mp4") {
          let iframe = document.createElement("iframe");
          iframe.src = resourceURl;
          iframe.width = "500px";
          iframe.height = "500px";
          gallery.appendChild(iframe);
          console.log(iframe);
        } else {
          let img = new Image();
          img.src = transformedUrl;

          // Event listeners for loading and error
          img.onload = () => {
            gallery.appendChild(img);
          };

          img.onerror = (error) => {
            console.error("Error loading image: ", error);
          };
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
});




// // -------------firebase--------
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", async () => {
  console.log("working")
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let address = document.getElementById("address");
    let cnic = document.getElementById("cnic"); // Correct ID
    let age = document.getElementById("age");
    let hobbies = document.getElementById("hobbies");
    hobbies = hobbies.value.split(" "); // Split hobbies into an array
    let image = document.getElementById("fileInput");
    console.log(name.value, phone.value, address.value, cnic.value, age.value, hobbies.value,image.files[0]); // Fix typo here


    // -------- add data with random id-------
    try {
        const docRef = await addDoc(collection(db, "users"), {
        name: name.value,
        phone: phone.value,
        address: address.value,
        cnic: cnic.value,
        age: age.value,
        // image: image.value,
        hobbies: arrayUnion(...hobbies),
        // time: serverTimestamp(),
        image: image.files[0]?.name || "No image uploaded", 
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
 

    // ----------add data with decided id-----
  //   try{
  //     await setDoc(doc(db, "users", "79864"), {
  //       name: name.value,
  //       phone: phone.value,
  //       address: address.value,
  //       cnic: cnic.value,
  //      age:age.value,
  //      hobbies:arrayUnion(...hobbies),
  //      time:serverTimestamp()
  //   });
  //   console.log("Document written with ID: ");
  //   } 
  //   catch (e) {
  // console.error("Error adding document: ", e);
  //   } 


    //    ---------update all documents-------
    // const userRef = doc(db, "users", "8743"); 
    // try {
    // await updateDoc(userRef, {
    //     // capital: true
    //     "favorites.subject":"Maths",
    //   });
    //   console.log("data updated");
    // }catch (e) {
    //   console.log(e);
    // }


    // --------Update elements in an array-------
    // const washingtonRef = doc(db, "users", "D6788");
    // try{
    //     await updateDoc(washingtonRef, {
    //         // regions: arrayUnion("greater_virginia")
    //         colors: arrayUnion("red","blue","yellow")
    //     });
    //     console.log("array included");
    // }catch(e) {
    //     console.log(e);
    // }
    // Atomically remove a region from the "regions" array field.
    // try{
    //     await updateDoc(washingtonRef, {
    //         // regions: arrayRemove("east_coast")
    //         colors: arrayUnion("red")
    //     });
    //     console.log("array remove")
    // }catch (e){
    //     console.log(e)
    // }


    // ----------Get multiple documents(read all data)-----
    // try{
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //    querySnapshot.forEach((doc) => {
    //    console.log(`${doc.id} =>` , doc.data());
    //    });
    // }catch (e) {
    //       console.log(e);
    // }
      
 
    //---------get a single doc---------
    // const docRef = doc(db, "users", "6533");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    // let time = docSnap.data().time
    // console.log("Document data:", `${time.toString()}`);
    // console.log(time);
    // } else {
    // // docSnap.data() will be undefined in this case
    // console.log("No such document!");
    // }

    location.href = "profile.html";

});





