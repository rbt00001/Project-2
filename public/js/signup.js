<<<<<<< HEAD
$(document).ready(() => {
=======
$(document).ready(()=> {
>>>>>>> 689b8a0477427670e5eb28e43c3dc0d5d5291b16
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("insput#password-input");

  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
<<<<<<< HEAD
    if (!userData.email || !userData.password) {
      return;
    }
=======
    if (!userData.email || !userData.password){
      return;
    } 
>>>>>>> 689b8a0477427670e5eb28e43c3dc0d5d5291b16
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/members");
            
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
