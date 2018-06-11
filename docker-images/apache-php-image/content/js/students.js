$(function(){
	function loadStudents(){
		$.getJSON ("/api/students/", function(students){
			console.log(students);
			var message = "null";
			if(students.length > 0){
				message = students[0].firstName + " " + students[0].lastName;
			}
			// ceci est faite a base de jquery 
			$(".myclass").text(message); // recupérer un element de la page html et on remplace sa valeur avec le message 
		});
		
	};
	loadStudents();
	setInterval(loadStudents, 2000);
});