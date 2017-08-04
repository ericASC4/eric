var apiURL = "https://randomuser.me/api";
var countryURL = "https://restcountries.eu/rest/v2/alpha?codes=nl"
$.ajax({
    url:apiURL,
    success:function(data){
        myFunction(data);
    }
});

function myFunction(data){
 var firstName = data.results[0].name.first;
 var lastName = data.results[0].name.last;
 var nationality = data.results[0].nat;
 console.log(nationality);
 $.ajax({
     url : countryURL+nationality,
     success:function(data){
         countryname=data[0].name;
         console.log (countryname);
         $("body").append("h2>"+countryname+"</h2>");
     }
 })
 $("body").append("<h2>"+firstName+" "+lastName+"</h2>");

}
