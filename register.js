// var regURL = 'https://api.rehive.com/3/auth/register/';


var username = document.querySelector(".username");
var pwords = document.querySelector(".password");
var company = document.querySelector(".company");

var targetReg = document.querySelector(".regBtn");
var regName = document.querySelector(".name");
var regLname = document.querySelector(".Lname");
var regCmpany = document.querySelector(".cmpany");
var regMail = document.querySelector(".emails");
var regPassword = document.querySelector(".pssword");
var regP2 = document.querySelector(".p2");



targetReg.addEventListener('click', function(){
        var regCreds = {
            first_name : regName.value,
            last_name : regLname.value,
            company: regCmpany.value,
            email: regMail.value,
            password1: regPassword.value,
            password2: regP2.value
            };
            console.log(regCreds);

            $.ajax({
                url: 'https://api.rehive.com/3/auth/register/', 
                type: 'post', // <<- the method that we using
                data: JSON.stringify(regCreds), // <<- JSON of our request obj
                contentType: 'application/json', // <<- telling server how we are going to communicate
               // authorization: 'bearer',
                fail: function(xhr, textStatus, errorThrown) {
            
                  console.log(errorThrown, textStatus, xhr); //  <<- log any http errors to the console
                    return false;  
                }
              }).done(function(results, textStatus, xhr, auth) {
        
            //     if (results.status == "success") {
            //         window.location.replace('http://127.0.0.1:8080/payment-page.html');
            //     } else {
            //    console.log(results);
               
            //     }
            //    console.log(results);
            });
            

            
    });

    //Login Functionality
var targetLog = document.querySelector('.loginBtn');
targetLog.addEventListener('click', function () {
    console.log(JSON.stringify(creds))
    console.log(creds)
    var creds = {
        user: username.value,
        company: company.value,    
        password: pwords.value
    };
     $.ajax({
        url: 'https://api.rehive.com/3/auth/login/', 
        type: 'post', // <<- the method that we using
        data: JSON.stringify(creds), // <<- JSON of our request obj
        contentType: 'application/json', // <<- telling server how we are going to communicate
       // authorization: 'bearer',
        fail: function(xhr, textStatus, errorThrown) {
    
          console.log(errorThrown, textStatus, xhr); //  <<- log any http errors to the console
            return false;  
        }
      }).done(function(results, textStatus, xhr, auth) {

        if (results.status == "success") {
            window.location.replace('http://127.0.0.1:8080/payment-page.html');
        } else {
       console.log(results);
       
        }
    //    console.log(results);
    });

})

/*;*/