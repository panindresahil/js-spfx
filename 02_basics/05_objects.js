const course = {
    name: 'JS-Hindi',
    price: 999,
    courseInstructor: 'Hitesh Chaudhary'
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

console.log(instructor);