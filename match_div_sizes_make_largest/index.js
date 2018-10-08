// Match sizes of Title and Text in each section to line up horizontally
var matchSize = function() {

	$('section').each(function() {
    	var maxHeightTitles = 0;
	    var maxHeightText = 0;
	    var maxHeightPriceBox = 0;

	    // Each Section col-titles match
    	$(this).find('.col-titles').each(function() {
    		$(this).height('100%');
    		maxHeightTitles = maxHeightTitles > $(this).height() ? maxHeightTitles : $(this).height();
	    });
	    $(this).find('.col-titles').each(function() {
	    	$(this).height(maxHeightTitles);
	    });

	    // Each Section col-text match
	    $(this).find('.col-text').each(function() {
	    	$(this).height('100%');
	    	maxHeightText = maxHeightText > $(this).height() ? maxHeightText : $(this).height();
	    });
	    $(this).find('.col-text').each(function() {
	    	$(this).height(maxHeightText);
	    });

	    // Each Section with price-copy inside pricing-box
	    $(this).find('.pricing-box .price-copy').each(function() {
	    	$(this).height('100%');
	    	maxHeightPriceBox = maxHeightPriceBox > $(this).height() ? maxHeightPriceBox : $(this).height();
	    });
	    $(this).find('.pricing-box .price-copy').each(function() {
	    	$(this).height(maxHeightPriceBox);
	    });
	});
}
$(document).ready(function(){
	matchSize();
	// If window resizes fire
	$(window).resize(matchSize);
});
