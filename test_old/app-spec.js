describe("Routes-Testing", function(){

	
	// start at root before every test is run
	beforeEach(function() {
		browser().navigateTo('/');
	});


	
	// test default route
	it('should jump to the /home path when / is accessed', function() {
		browser().navigateTo('#!/show');
    	expect(browser().location().path()).toBe("/login");
    	'Show The World'
  	});
  	
	
	/*
	it("Should play nice with a normal phrase ", function(){
		
	});
	*/
});