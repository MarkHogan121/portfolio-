function sendMail(){
    let parms ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    emailjs.send('service_5i2h96e','template_6l1lohh',parms).then(alert('Email Sent!!'))
}