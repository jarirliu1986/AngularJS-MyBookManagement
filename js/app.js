var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state("loginForm",{
			url:"/loginForm",
			templateUrl:"tpls/loginForm.html"
		})
		.state("register",{
			url:"/register",
			templateUrl : "tpls/register.html"
		})
		.state("booklist",{
			url:"/booklist",
			//templateUrl:"tpls/booklist.html"
			views:{
				"":{
					templateUrl:"tpls/bookList.html"
				},
				"booktype@booklist":{
					templateUrl:"tpls/bookType.html"
				},
				"bookgrid@booklist":{
					templateUrl:"tpls/bookGrid.html"
				}
			}
		})
		.state("addbook",{
			url:"/addbook",
			templateUrl:"tpls/addBook.html"
		})
		.state("bookdetail",{
			url:"/bookdetail",
			templateUrl:"tpls/bookDetail.html"
		});
	$urlRouterProvider.otherwise("/loginForm");
});