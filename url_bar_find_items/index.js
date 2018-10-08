// Get URL Parameters
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// Link Appends If needint to Add items to hrefs
function appendID(referralId){
	var querystring = 'referralId='+referralId+'';
	$('a').each(function() {
	    var href = $(this).attr('href');

	    if (href) {
	        href += (href.match(/\?/) ? '&' : '?') + querystring;
	        $(this).attr('href', href);
	    }
	});
}
function clickReferralId(){
        var storedID = localStorage.getItem('referralId');
        if (!storedID){
            let referralId = getParameterByName('referralid');
            if(!referralId){
            }
            else{
                localStorage.setItem('referralId',referralId);
                appendID(referralId);
            }
        }
        else{
            appendID(storedID);
        }
    }
// Assign IDs
$(document).ready(function(){
	// Referral ID
	var storedID = localStorage.getItem('referralId');
	if (!storedID){
		let referralId = getParameterByName('referralid');
		if(!referralId){
			console.log('No ID');
		}
		else{
			localStorage.setItem('referralId',referralId);
			appendID(referralId);
			// Debug
			console.log('Ref '+referralId);
		}
	}
	else{
		appendID(storedID);
		// Debug
		console.log('Store '+storedID);
	}
});
