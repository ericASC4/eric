// ID: eb771cb7
//KEY: f311bce95ecac9113089954044f765a7

var MY_ID = "eb771cb7";
var MY_KEY = " f311bce95ecac9113089954044f765a7"

var bigMacURL = "https://api.nutritionix.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=[YOURID]&appKey=[YOURKEY]"

$.ajax({

    url:bigMacURL,
    success:function(data){
        //console.log(data);
        var foo = data.hits[1n ];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;

        $("body").append("<h2>This"+name+" has "+cals+" cals!</h2>");
    }
});