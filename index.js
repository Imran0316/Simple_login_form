document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById("Form").addEventListener("submit" , function(event){
       let U_Name = document.getElementById("username").value;
       let PassWord = document.getElementById("Pass").value;
       let U_Email = document.getElementById("Email").value;
       let U_Phone = document.getElementById("phone").value;

       let nameRegex = /^[A-Za-z]+$/;
       let passRegex = /^[A-Za-z\d\W]+$/;
       let EmailRegex = /^[A-Za-z\d\_]+@[a-z]+\.[a-z]{2,4}$/;
       let phoneRegex = /^[\d]{11}$/;

       if(U_Name == '' || PassWord == '' || U_Email == '' || U_Phone == '' || !nameRegex.test(U_Name) || !passRegex.test(PassWord) || !EmailRegex.test(U_Email) || !phoneRegex.test(U_Phone)){
            alert("please fil form correctly");
       }else{
           alert("Name:" + U_Name + "\nPassword:" + PassWord  + "\nEmail:" + U_Email  + "\nPhone:"+ U_Phone );
        
       }
    });
});


