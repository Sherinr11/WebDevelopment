function validateUser(event) {
   
    event.preventDefault();

    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const smsg = document.getElementById("smsg");
    const sname = document.getElementById("sname");
    const semail = document.getElementById("semail");
    const ssub = document.getElementById("ssub");
 
    let f=0;
    
    

   
   
    if(name==''){
        sname.style.color='maroon';
        sname.textContent="Name is required.";
        
    }
    if(email=='' ){
        semail.style.color='maroon';
        semail.textContent="Email is  not proper."
        f=1;
    }
    if(subject==''){
        ssub.style.color='maroon';
        ssub.textContent="Subject cannot be empty.";
        f=1;
    }
    if(message==''){
        smsg.style.color='maroon';
        smsg.textContent="Please enter a message.";
        f=1;
    }
    if(f==0)
    {
        ssubmit.style.color='maroon';
        ssubmit.textContent='Message Submitted Successfully.';

    }
}

// Add event listener to form submit
document.getElementById('contactForm').addEventListener('submit', validateUser);
