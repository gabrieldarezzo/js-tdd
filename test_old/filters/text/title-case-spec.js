describe("titleCase", function(){
	var $filter, filter;

	beforeEach(function(){
		module('app');
		inject(function($injector){
			$filter = $injector.get('$filter');
			filter = $filter('titleCase');
		});
	}); 

	it("Should return undefined when undefined is passed in ", function(){
		//expect(filter(undefined)).toBeUndefined();	

	});

	
	it("Should return undefined when undefined is passed in ", function(){
		expect(filter(undefined)).toBeUndefined();	
	});

	it("Should return null when null is passed in ", function(){
		expect(filter(null)).toBeNull();	
	});

	it("Should return a blank string when blank string is passed in  ", function(){
		expect(filter("")).toEqual("");	 
	});

	it("Should changed the casing of lower case world", function(){
		expect(filter("george harrisson")).toEqual("George Garrisson");	
	});

	it("Should changed the casing of upper case world", function(){
	
	});

	it("Should changed the casing of random ", function(){
		
	});

	it("Should play nice with a normal phrase ", function(){
		
	});
	
});