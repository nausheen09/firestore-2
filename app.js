import{collection, addDoc, db, 
  // doc, setDoc, updateDoc, 
  arrayUnion, 
  // arrayRemove,
  query, where,   onSnapshot, limit, 
  // getDocs, getDoc, serverTimestamp, orderBy,  
  //getDoc, 
} from "./firebase.js";



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
    console.log(name.value, phone.value, address.value, cnic.value, age.value, hobbies); // Fix typo here


    // -------- add data with random id-------
    try {
        const docRef = await addDoc(collection(db, "users"), {
        name: name.value,
        phone: phone.value,
        address: address.value,
        cnic: cnic.value,
        age: age.value,
        hobbies: arrayUnion(...hobbies),
        // time: serverTimestamp(),
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
