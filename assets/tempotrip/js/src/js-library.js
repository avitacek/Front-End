
    function selectBoxCreator(div,label, jsonData, externalClass ){
        //Create the Parent select//
        $(div).append('<label>'+ label +'</label><select class="form-control ' + externalClass + '"><option values="base"> Pick Your ' + label + '</options></select>');
        //request the JSON data and parse into the select element

        var select = (div + ' select.' + externalClass)
        $.getJSON(jsonData, function(data){
          //iterate over the data and append a select option
          $.each(data.data, function(key, val){ 
            if (val.selected === true){
                $(select).append('<option id="' + val.id + '" class="' + val.class + '" selected>' + val.name + '</option>');
            }
            else{
                $(select).append('<option id="' + val.id + '" class="' + val.class + '">' + val.name + '</option>');
            }
          })
        });
    }

    function addTravelerFormCretor(div, externalClass){
        $(div).append('<label>Add a Traveler</label><form action="" class=""><div class="row"><div class="col-sm-6"><div class="form-group"><input type="text" class="form-control" placeholder="First name"></div></div><div class="col-sm-6"><div class="form-group"><input type="text" class="form-control" placeholder="Last name"></div></div></div><div class="row"><div class="col-sm-12"><div class="form-group"><input type="email" class="form-control" placeholder="email address"/></div></div></div><div class="row"><div class="col-sm-12"><input type="submit" placeholder="Add Traveler"/></div></div></form>')

    }
    addTravelerFormCretor("#add_traveler", "");

    //Make api call//
    function optionsAPI(baseURL, service, params){
        var affiliateget = "&affiliate_id=";
        var json = "&json=" + encodeURIComponent(JSON.stringify(params));
        var logintoken = "&logintoken=" + $.cookie("logintoken");
        var finalURL = baseURL + service + "?token=" + $.cookie("otapi_token") + json + logintoken + affiliateget;
        console.log( finalURL);
        return finalURL
    }
    var apiURL = "http://az.dev.andy.apimilitarytogo.optionstravel.com/api/";

    function apiCall(URL){
        $.getJSON( URL, function(data) {
            console.log(data);
            return data;
        })
        .fail(function(data) {
            alert('Sorry we have a connection issues, Please try again!')
        })
    }
    function getHostToken(){
        var hostTokenData = apiCall(optionsAPI(apiURL, "Authentication/Hosttoken/", {}));
        return hostTokenData.authenticationToken;
    }

