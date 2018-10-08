function getIP() {
  //Check first site for IP Country Code
  var locUrlOne = "https://ipapi.co/json/";
  $.get(locUrlOne, function(dataOne) {
    var codeOne = dataOne.country;
    if(codeOne != null && codeOne != undefined && codeOne != ""){
      var cCode = dataOne.country;
      redirectHome(cCode);
    } else{
      //Check second site for IP Country Code if first fails
      var locUrlTwo = "https://ip.nf/me.json";
      $.get(locUrlTwo, function(dataTwo) {
        if(dataTwo.ip){
          var codeTwo = dataTwo.ip.country_code;
          if(codeTwo != null && codeTwo != undefined && codeTwo != ""){
            var cCode = dataTwo.ip.country_code;
            redirectHome(cCode);
          }
        } else {
          //Check third site for IP Country Code if first and second fails
          var locUrlThree = "https://geoip-db.com/jsonp/";
          $.ajax({
            url: locUrlThree,
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function(dataThree) {
              var cCode = dataThree.country_code;
              if(cCode != null && cCode != undefined && cCode != ""){
                 redirectHome(cCode);
              }
            }
          });
        }
      });
    }
  });
};
function redirectHome(cCode) {
  // UK
  if (
      (cCode == 'GB')
  ) {
    console.log("GB");
  }
  else if (
      (cCode == 'US') ||
      (cCode == 'CA') ||
      (cCode == 'MX')
  ){
      console.log("NA");
  }
}
