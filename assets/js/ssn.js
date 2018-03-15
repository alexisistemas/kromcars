 $('.value').on('keydown keyup mousedown mouseup', function() {
    	 var res = this.value, //grabs the value
    		 len = res.length, //grabs the length
    		 max = 9, //sets a max chars
    		 stars = len>0?len>1?len>2?len>3?len>4?'XXX-XX-':'XXX-X':'XXX-':'XX':'X':'', //this provides the masking and formatting
    		result = stars+res.substring(5); //this is the result
    	 $(this).attr('maxlength', max); //setting the max length
    	$(".number").val(result); //spits the value into the input
    });