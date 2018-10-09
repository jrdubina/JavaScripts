// Get URL Parameters
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// Link Appends
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
function appendROR(ror){
	var querystring = 'ror='+ror+'';
	$('a').each(function() {
	    var href = $(this).attr('href');

	    if (href) {
	        href += (href.match(/\?/) ? '&' : '?') + querystring;
	        $(this).attr('href', href);
	    }
	});
}
function appendSRID(srid){
	var querystring = 'srid='+srid+'';
	$('a').each(function() {
	    var href = $(this).attr('href');

	    if (href) {
	        href += (href.match(/\?/) ? '&' : '?') + querystring;
	        $(this).attr('href', href);
	    }
	});
}
function appendUTMSource(utm_source){
	var querystring = 'utm_source='+utm_source+'';
	$('a').each(function() {
	    var href = $(this).attr('href');

	    if (href) {
	        href += (href.match(/\?/) ? '&' : '?') + querystring;
	        $(this).attr('href', href);
	    }
	});
}
function appendUTMMedium(utm_medium){
	var querystring = 'utm_medium='+utm_medium+'';
	$('a').each(function() {
	    var href = $(this).attr('href');

	    if (href) {
	        href += (href.match(/\?/) ? '&' : '?') + querystring;
	        $(this).attr('href', href);
	    }
	});
}
function appendUTMCampaign(utm_campaign){
	var querystring = 'utm_campaign='+utm_campaign+'';
	$('a').each(function() {
	    var href = $(this).attr('href');

	    if (href) {
	        href += (href.match(/\?/) ? '&' : '?') + querystring;
	        $(this).attr('href', href);
	    }
	});
}
function appendUTMTerm(utm_term){
	var querystring = 'utm_term='+utm_term+'';
	$('a').each(function() {
	    var href = $(this).attr('href');

	    if (href) {
	        href += (href.match(/\?/) ? '&' : '?') + querystring;
	        $(this).attr('href', href);
	    }
	});
}
function appendUTMContent(utm_content){
	var querystring = 'utm_content='+utm_content+'';
	$('a').each(function() {
	    var href = $(this).attr('href');

	    if (href) {
	        href += (href.match(/\?/) ? '&' : '?') + querystring;
	        $(this).attr('href', href);
	    }
	});
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
	// ROR
	var storedROR = localStorage.getItem('ror');
	if (!storedROR){
		let ror = getParameterByName('ror');
		if(!ror){
			console.log('No ROR');
		}
		else{
			localStorage.setItem('ror',ror);
			appendROR(ror);
			// Debug
			console.log('ROR '+ror);
		}
	}
	else{
		appendROR(storedROR);
		// Debug
		console.log('Store '+storedROR);
	}
	// SRID
	var storedSRID = localStorage.getItem('srid');
	if (!storedSRID){
		let srid = getParameterByName('srid');
		if(!srid){
			console.log('No SRID');
		}
		else{
			localStorage.setItem('srid',srid);
			appendSRID(srid);
			// Debug
			console.log('SRID '+srid);
		}
	}
	else{
		appendSRID(storedSRID);
		// Debug
		console.log('Store '+storedSRID);
	}
	// UTM Source
	var storedUTMSource = localStorage.getItem('utm_source');
	if (!storedUTMSource){
		let utm_source = getParameterByName('utm_source');
		if(!utm_source){
			console.log('No UTM Source');
		}
		else{
			localStorage.setItem('utm_source',utm_source);
			appendUTMSource(utm_source);
			// Debug
			console.log('UTM Source: '+utm_source);
		}
	}
	else{
		appendUTMSource(storedUTMSource);
		// Debug
		console.log('Store '+storedUTMSource);
	}
	// UTM Medium
	var storedUTMMedium = localStorage.getItem('utm_medium');
	if (!storedUTMMedium){
		let utm_medium = getParameterByName('utm_medium');
		if(!utm_medium){
			console.log('No UTM Medium');
		}
		else{
			localStorage.setItem('utm_medium',utm_medium);
			appendUTMMedium(utm_medium);
			// Debug
			console.log('UTM Medium: '+utm_medium);
		}
	}
	else{
		appendUTMMedium(storedUTMMedium);
		// Debug
		console.log('Store '+storedUTMMedium);
	}
	// UTM Campaign
	var storedUTMCampaign = localStorage.getItem('utm_campaign');
	if (!storedUTMCampaign){
		let utm_campaign = getParameterByName('utm_campaign');
		if(!utm_campaign){
			console.log('No UTM Campaign');
		}
		else{
			localStorage.setItem('utm_campaign',utm_campaign);
			appendUTMCampaign(utm_campaign);
			// Debug
			console.log('UTM Campaign: '+utm_campaign);
		}
	}
	else{
		appendUTMCampaign(storedUTMCampaign);
		// Debug
		console.log('Store '+storedUTMCampaign);
	}
	// UTM Term
	var storedUTMTerm = localStorage.getItem('utm_term');
	if (!storedUTMTerm){
		let utm_term = getParameterByName('utm_term');
		if(!utm_term){
			console.log('No UTM Term');
		}
		else{
			localStorage.setItem('utm_term',utm_term);
			appendUTMTerm(utm_term);
			// Debug
			console.log('UTM Term: '+utm_term);
		}
	}
	else{
		appendUTMTerm(storedUTMTerm);
		// Debug
		console.log('Store '+storedUTMTerm);
	}
	// UTM Content
	var storedUTMContent = localStorage.getItem('utm_content');
	if (!storedUTMContent){
		let utm_content = getParameterByName('utm_content');
		if(!utm_content){
			console.log('No UTM Content');
		}
		else{
			localStorage.setItem('utm_content',utm_content);
			appendUTMContent(utm_content);
			// Debug
			console.log('UTM Content: '+utm_content);
		}
	}
	else{
		appendUTMContent(storedUTMContent);
		// Debug
		console.log('Store '+storedUTMContent);
	}
});
