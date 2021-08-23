//ATTATCH

const emailBox = document.getElementById("emailBox");
const userNameBox = document.getElementById("userNameBox");
const passwordBox = document.getElementById("passwordBox");
const mainButton = document.getElementById("mainButton");
const errorMessageBox = document.getElementById("errorContainer");
const errorMessage = document.getElementById("errorMessage");
const signUpBox = document.getElementById("signupBox")
const signUpHeader = document.getElementById("signUpHeader")
const mainButtonDiv = document.getElementById("mainButtonDiv")
//ATTATCH END

//VARIABLES
let userName;
let email;
let password;
let fields;
let timeToLogIn = 0;

//VARIABLES END
//MAIN FUNCTION
const signUpToday = () =>{

if(emailBox.value.includes("@") &&  emailBox.value.includes(".com"))
//EMAIL
{
    email=emailBox.value; 
    
}else{
    errorMessageBox.classList.add("errorView")
    errorMessage.innerHTML= "Please enter a valid email"
}
//USERNAME
if(userNameBox.value != ""){

    userName = userNameBox.value;
   
}else{
errorMessage.innerHTML= "Please enter a Username"
}
//PASSWORD
if(passwordBox.value.length > 7){

    password= passwordBox.value;
   
}else{

    errorMessage.innerHTML= "Password must be at least 7 characters"
}



//ERROR MESSAGE NULL
setTimeout(function(){
    errorMessageBox.classList.remove("errorView")
}, 3000)
//LOG IN FUNCTIONALITY
if(password, userName, email) {
    
    emailBox.value = "";
    userNameBox.value = "";
    passwordBox.value = "";
    signUpHeader.innerHTML = "log In"
    signUpBox.removeChild(emailBox);
    mainButtonDiv.removeChild(mainButton);
    passwordBox.setAttribute("type","password")
    
// LETS CREATE LOG IN BUTTON 
    let logInButton = document.createElement("button"); 
    logInButton.innerHTML = "Log In";
    logInButton.setAttribute("id","logInButton")
    mainButtonDiv.appendChild(logInButton);
    logInButton.addEventListener("click", logIn);

	timeToLogIn = 1;
    console.log(userName)   
    }
}



function logIn() {
if(timeToLogIn === 1 && userNameBox.value === userName && passwordBox.value === password){
console.log("goodtogo")


}else{
    errorMessageBox.classList.add("errorView")
    errorMessage.innerHTML= "Password or username is incorrect" 
    setTimeout(function(){
        errorMessageBox.classList.remove("errorView")
    }, 3000)
}

}
//MAIN FUNCTION END



mainButton.addEventListener("click",signUpToday);


  