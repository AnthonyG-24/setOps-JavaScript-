# SetOps
SetOps is a JavaScript application designed to perform common set operations on integer sets, such as union, intersection, and difference.

# Instructions
To run the program, use Node.js with the following command:
node SetOp.js

This project provides functions for performing basic set operations on arrays. It includes operations such as union, intersection, and difference. Additionally, the script ensures input validation, processing only positive integers.

# Features
**Union:** GetUnion(Set1, Set2) – Computes the union of two sets, combining all unique elements.

**Intersection:** GetIntersection(Set1, Set2) – Finds common elements between two sets.

**Difference:** GetDifference(Set1, Set2) – Determines elements present in the first set but not in the second.

**Validation:** Ensures all input numbers are positive integers.

# Usage
**Union:** Combine all unique elements from two arrays:
node SetOp.js --union <array1> <array2>
node SetOp.js -u <array1> <array2>

**Intersection:** Find common elements between two arrays:
node SetOp.js --intersection <array1> <array2>
node SetOp.js -i <array1> <array2>

**Difference:** Get elements in the first array but not in the second:
node SetOp.js --difference <array1> <array2>
node SetOp.js -d <array1> <array2>

**Help:** Display usage instructions:
node SetOp.js --help
node SetOp.js -h


# Example: 

To calculate the union of two sets [1, 2, 3] and [2, 3, 4], run:
node SetOp.js --union "1,2,3" "2,3,4"

# Additional Information
Name: Anthony Gillard
Date: 9-20-22
Email: gillarda2@maibox.winthrop.edu
Class: CSCI390-001

**Sources I Used For Help With Union/Intersection/Difference (coding wise):**
https://www.enjoyalgorithms.com/blog/intersection-of-unsorted-arrays
https://stackoverflow.com/questions/30834946/trying-to-solve-symmetric-difference-using-javascript

**Source Used For Javascript/Nodejs Help:**
https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o

**Source Used For Selection Sort Help (coding):**
https://www.youtube.com/watch?v=9jwm_9lOHu0
