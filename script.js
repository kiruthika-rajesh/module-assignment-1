AOS.init({
duration:1000,
once:true
});

document.querySelector(".contact-form")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been sent.");

this.reset();

});