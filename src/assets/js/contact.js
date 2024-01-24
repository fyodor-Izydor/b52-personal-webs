function submitData() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // console.log(name)
    // console.log(email)
    // console.log(phoneNumber)
    // console.log(subject)
    // console.log(message)

        if(name == ""){
            return alert("nama harus di isi")
        }
        else if(email == ""){
            return alert("email harus di isi")
        }
        else if(phoneNumber == "") {
            return alert("Phone number belum di isi")
        }
        else if(subject == ""){
            return alert("subject number harus di isi")
        }
        
        else if(message == ""){
            return alert("message harus di isi")
        }

            
        console.log(name)
        console.log(email)
        console.log(phoneNumber)
        console.log(subject)
        console.log(message)


        let a = document.createElement('a')
        a.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`;

        a.click()

}



