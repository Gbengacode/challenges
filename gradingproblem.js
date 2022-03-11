/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
//   multiple - grade % 5  < 3
//   grade = multiple
//   if(grade < 38) return grade
    let result = []
    grades.forEach(grade => {
        if(grade >= 38 && grade % 5 >= 3){
            result.push(grade + 5 - grade % 5)
        } else {
            result.push(grade)
        }  
    })
   return result
}