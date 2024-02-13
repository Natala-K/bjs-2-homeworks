function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}

const newStudent = new Student('Pert', 'male', '19')

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
	

}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty('marks')) {
	this.marks.push(...marks);
	} 
}

Student.prototype.getAverage = function() {
	if (this.hasOwnProperty('marks') === false || this.marks.length == 0) {
		return 0;
	} 
	let length = this.marks.length;
	let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
	return sum / length;
	
}


Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}


