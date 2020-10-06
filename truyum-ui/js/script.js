function validateForm()
 {
    var itemtitle = document.getElementById("title").value;
    if (itemtitle == ""){
        alert("Title is required");
    
    }

    var itemprice = document.getElementById("price").value;
    if (itemprice == "") {
        alert("Price is required");
        
    }


    var itemdateOfLaunch = document.getElementById("dateOfLaunch").value;
    if (itemdateOfLaunch == ""){
        alert("Date of Launch is required");
       
    }
    var itemcategory =  document.getElementById("category").value;
    if (itemcategory == "0"){
     alert("Category id required");
     
    }
}