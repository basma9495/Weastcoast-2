
// admin validering//
function validateForm() {
   let adminID = document.getElementById("adminID").value;
   let password = document.getElementById("password").value;


   let expectedAdminID = "Basma";
   let expectedPassword = "9999";

   if (adminID.trim() !== expectedAdminID || password.trim() !== expectedPassword) {
    alert("Incorrect Admin ID or Password. Please make sure you have entered the correct information.");
    return false;
   }

   window.location.href = "admin.html";
   return false;

}