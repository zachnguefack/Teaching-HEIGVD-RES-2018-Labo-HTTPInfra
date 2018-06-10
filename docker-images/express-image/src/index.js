var Chance = require('chance');
var chance = new Chance();
//module express 
const express = require('express')

const app = express()

console.log(chance.name() + " à ", + chance.age() + "ans"); 
// si notre application recoit une requette et que la ressource visée est le / alors,
//j'envoie la chaine bonjours res.


app.get('/api/students', function(req,res){
	res.send(generateStudents());
});


app.listen(3000, function(){
	console.log('Accepte les requettes http sur le port 3000');
});

function generateStudents(){
	var numberOfStudents = chance.integer({
		min:0,
		max:10
    });
	
	console.log(numberOfStudents);
	var students = [];
	for(var i = 0; i < numberOfStudents; i++){
		// choisi au hasard masczlin ou feminin 
		var gender = chance.gender();
		// fonction pour choisir une année 
		var birthYear = chance.year({
			min:1986,
			max:1996
		});
		
		students.push({
			// generer un prenon
			firstname:chance.first({
				// peux etre masculin ou feminin 
				gender:gender
			}),
			//générer le nom de famille
			lastName:chance.last(),
			gender:gender,
			//generer une annéé de naissance
			birthday: chance.birthday({
				year:birthYear
			})
			
		});
	};
	console.log(students);
	return students;
}



