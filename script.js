let tableDetails = []
let gender = ""
let state = ""
function updateDetails(){
    event.preventDefault()
    let firstName = document.getElementById("first-name").value ;
    let lastName = document.getElementById("last-name").value ;
    if (document.getElementById("male-radio").checked){
        gender = "male"
    }else if (document.getElementById("female-radio").checked){
        gender = "female";
    }else {
        gender = "do not disclose"
    }
    let email = document.getElementById("email").value ;
    let address = document.getElementById("address").value ;
    let pincode = document.getElementById("pincode").value ;

    if (document.getElementById("tamil-nadu-state").checked){
        state = "Tamil nadu"
    }else if (document.getElementById("kerala-state").checked){
        state = "Kerala";
    }else {
        state = "Karnataka"
    }

    // console.log(firstName+' '+lastName+" "+gender+" "+address+" "+pincode+" "+state+" "+email)
    tableDetails.push({firstName:firstName,lastName:lastName,gender:gender,
        email:email,address:address,pincode:pincode,state:state})

    displayDetails(tableDetails)
}

function displayDetails(tableDetails){
    let tableBody=document.querySelector("#table-body");

    let tableRow = ""
    tableDetails.map( detail => {
        tableRow += `<tr>
        <td>${detail.firstName}</td>
        <td>${detail.lastName}</td>
        <td>${detail.gender}</td>
        <td>${detail.email}</td>
        <td>${detail.address}</td>
        <td>${detail.pincode}</td>
        <td>${detail.state}</td>
        </tr>`
        tableBody.innerHTML = tableRow
    })
}