var form = document.getElementById("my-form");
form.addEventListener('submit', function(e) {
    e.preventDefault();
   

let email = document.getElementById('email').value;
let number = document.getElementById('number').value;
let quant = document.getElementById('quantity').value;
let addr = document.getElementById('address').value;
let size = document.getElementById('size').value;
let clr = document.getElementById('colour').value;
let tagl = document.getElementById('tag').value;



   
   
   
   
    if (email === "") {
        alert("Enter email");
        return;
    }

    if (number === "") {
        alert("Enter number");
        return;
    }

    var phoneno = /^\d{10}$/;
    if (!number.match(phoneno)) {
        alert('Phone number must have 10 digits only');
        return;
        
    }
    
   
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    recipt = `Thankyou!.. \n Order placed Successfully  Here is Your RECEIPT : \nTagline: ${tagl}  \nPhoneNumber: ${number} \nEmail: ${email} \nAddress: ${addr}  \nSize: ${size} \nColor: ${clr} \nQuantity: ${quant}\n Receipt issued on Date ${date}`;
    alert(recipt);
 });