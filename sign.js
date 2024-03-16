const form =document.getElementById("form");
const username= document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
var x=document.getElementById("password");
var y=document.getElementById("view");
var z=document.getElementById("hide");
var w=document.getElementById("password2");
var a=document.getElementById("submit");

String.prototype.isEmail=function()
{
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};

String.prototype.isAlpha=function()
{
    return !!this.match(/^[a-zA-Z]*$/);
};
// ---------------------check-------------------
function checkRequired(inputs)
{
    inputs.forEach((input) =>
        {
            if(input.value.trim()==="")
            {
                //Error
                errorInput(input, `${getName(input)} is Required`);
            }
            else
            {
                //success
                successInput(input);
            }
        });
}
function getName(input)
{
    // return input.id;
    return  input.getAttribute("data-name");
}
function errorInput(input,message)
{
    const formBox=input.parentElement;
    formBox.className="form-box error";
    const p=formBox.querySelector("p");
    p.innerHTML=message;
}
function successInput(input)
{
    const formBox=input.parentElement;
    formBox.className="form-box success";
    const p=formBox.querySelector("p");
    p.innerHTML="";
}
// --------------------------user name,pass--------------------
function checkLength(input,min,max)
{
    const data=input.value.trim().length;
    if(data==0)
    {
        errorInput(input,`${getName(input)} is Required`);
    }
    else if(data<min)
    {
        errorInput(input,`${getName(input)} must be 
        atleast greater than ${min} characters`);
    }else if(data>max)
    {
        errorInput(input,`${getName(input)} must be
        atleast lesser than ${max} characters`);
    }
    else
    {
        successInput(input);
    }
}

// --------------------error end---------------------------

// ------------------confirm password----------------------
function checkConfirmPassword(password,password2)
{
    if(password.value!=password2.value)
    {
        errorInput(password2,`${getName(password2)} does 
        not match ${getName(password)}`);
    }
}
// ------------------------confirm password end-------------------
function checkEmail(input)
{
    if(!input.value.trim().isEmail())
    {
        errorInput(input,`${getName(input)} is  invalid`);
    }
}

function checkAlpha(input)
{
    if(!input.value.trim().isAlpha())
    {
        errorInput(input,`${getName(input)} must be
         alphabets`);
    }
}

// 
function myForm(a)
{
            if(username.value === '' || email.value === '' || password.value === ''||password2.value==='')
            {
                alert("Must fill all the feilds")
            }
            else
            {
                alert("You have successfully sign in to Amor's Catering");
                
            }
}
// 

// -----------------------call function--------------------
form.addEventListener("submit",function(e)
{
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,5,10,0);
    checkLength(password,4,6,0);
    checkConfirmPassword(password,password2,4,6);
    checkEmail(email);
    checkAlpha(username);
    myForm(a);
});
// -------------------------call function end-------------------

// ---------------------------------password--------------------
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
// /----------------------------password2-----------------------
function myFunction1() {
    var x = document.getElementById("password2");
    if (x.type === "password2") {
      x.type = "text";
    } else {
      x.type = "password2";
    }
  }

// -----------login-------//


// firebase
        
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
        import { getDatabase, ref, set,get ,child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
        // import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAH3e0auOVo4TcyBvF4bCEjn1Ag66DHs4w",
            authDomain: "contactform-e3df9.firebaseapp.com",
            projectId: "contactform-e3df9",
            storageBucket: "contactform-e3df9.appspot.com",
            messagingSenderId: "636761885885",
            appId: "1:636761885885:web:c2de9584e3a19fae33bbd4"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        // const auth=getAuth(app);

        const db=getDatabase(app);
        document.getElementById("submit").addEventListener('click',function(e)
        {
            // e.preventDefault();
            set(ref(db ,'user/' + document.getElementById("username").value),
            {
            username:document.getElementById("username").value,
            email:document.getElementById("email").value,
            password:document.getElementById("password").value,
            confirmPass:document.getElementById("password2").value,
            });
        })

        // authendication
