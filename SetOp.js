//SetOp.js

function GetUnion(Set1, Set2) {
	console.log(" ");
	console.log("ARRAYS:", Set1, " || ", Set2);
	console.log(" ");

        var union = [];
        for (var i = 0; i < Set1.length; i++) {

		 if (Set1[i] < 0) {
                	console.log("Enter A Postive Number");
                	process.exit(1);
        	} else {
			 union.push(Set1[i]);
		}

        }

         for (var j = 0; j < Set2.length; j++) {

		if (Set2[j] < 0) {
                	console.log("Enter A Postive Number");
                	process.exit(1);
        	} else {
			 union.push(Set2[j]);
		}

        }

        var UniqueElements = [... new Set(union)];

	//Selection Sort:
	for (var n = 0; n < UniqueElements.length - 1 ; n++) {
		var minIdx = n;

		for (var a = n + 1; a < UniqueElements.length; a++) {
			if (UniqueElements[a] < UniqueElements[minIdx]) {
				minIdx = a;
			}
		}


		var temp = UniqueElements[n];
		UniqueElements[n] = UniqueElements[minIdx]
		UniqueElements[minIdx] = temp;
	}

        return UniqueElements;
}

function GetIntersection(Set1, Set2){
	console.log(" ");
        console.log("ARRAYS:", Set1, " || ", Set2);
        console.log(" ");

	var intersection = [];
	for (var i = 0; i < Set1.length; i++) {
    		//console.log(Arr1[i]);
		for (var j = 0; j < Set2.length; j++) {

			if (Set1[i] < 0|| Set2[j] < 0) {
                        	console.log("Enter A Postive Number");
                        	process.exit(1);
			}
			if (Set1[i] == Set2[j]) {
				intersection.push(Set1[i]);
			}
		}
	}

	 //Selection Sort:
        for (var n = 0; n <  intersection.length - 1 ; n++) {
                var minIdx = n;

                for (var a = n + 1; a <  intersection.length; a++) {
                        if (intersection[a] < intersection[minIdx]) {
                                minIdx = a;
                        }
                }


                var temp = intersection[n];
                intersection[n] = intersection[minIdx]
                intersection[minIdx] = temp;
        }

	return intersection;
}

function GetDifference(Set1, Set2) {
	console.log(" ");
        console.log("ARRAYS:", Set1, " || ", Set2);
        console.log(" ");

	var difference = [];
	for (var i = 0; i < Set1.length; i++) {
		var UniqueElement = true;
		for (var j = 0; j < Set2.length; j++) {
			if (Set1[i] < 0 || Set2[j] < 0) {
                        	console.log("Enter A Postive Number");
                        	process.exit(1);
			} else if (Set1[i] == Set2[j]) {
				UniqueElement = false;
				break;
			}
		}

		if (UniqueElement) {
			difference.push(Set1[i]);
		}
	}

	  //Selection Sort:
        for (var n = 0; n < difference.length - 1 ; n++) {
                var minIdx = n;

                for (var a = n + 1; a < difference.length; a++) {
                        if (difference[a] < difference[minIdx]) {
                                minIdx = a;
                        }
                }


                var temp = difference[n];
                difference[n] = difference[minIdx]
                difference[minIdx] = temp;
        }

	return difference;
}



//Driver Code:
//Populate Both Set Of Arrays
var GetSet1 = process.argv[3];
var GetSet2 = process.argv[4];

var Set1 = GetSet1.split(",");
var Set2 = GetSet2.split(",");


for (var n = 0; n < Set1; n++) {
	Set1[n] = parseInt(Set1[n]);
}

for (var i = 0; i < Set2; i++) {
	Set2[i] = parseInt(Set2[i]);
}


//Call Functions Through User Input:
var UserInput = process.argv[2];

switch (UserInput) {
	case "--union":
	case "-u":
	    	 console.log("Union:", GetUnion(Set1, Set2));
		 console.log(" ");
	break;
	case "--intersecion":
	case "-i":
		 console.log("Intersection:", GetIntersection(Set1, Set2));
		 console.log(" ");
	break;
	case "--difference":
	case "-d":
		console.log("Difference:", GetDifference(Set1, Set2));
		console.log(" ");
	break;
	case "--help":
	case "-h":
		console.log(" ")
		console.log("ENTER AN OPERATION")
		console.log("Union:", "--Union, --u")
		console.log("Intersection:", "--intersection, --i")
		console.log("Difference:", "--difference, -d")
		console.log(" ");
		process.exit(0);
}








