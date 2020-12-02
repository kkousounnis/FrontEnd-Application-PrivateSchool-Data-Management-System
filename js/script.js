function course(titlename, stream, type, startdate, enddate) {
    this.titlename = titlename;
    this.stream = stream;
    this.type = type,
        this.startdate = startdate,
        this.enddate = enddate
}


function validateForm() {
    let titlename = document.getElementById("titlename").value;
    let stream = document.getElementById("stream").value;
    let type = document.getElementById("type").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let bool = true;
    if (titlename == "") {
        alert("Title must be filled out.");
        bool = false;
        return false;
    }
    if (titlename.length > 30) {
        alert("Title must have max length of 30 characters.");
        bool = false;
        return false;
    }
    if (stream == "") {
        alert("Stream must be filled out.");
        bool = false;
        return false;
    }
    if (stream.length > 30) {
        alert("Stream must have max length of 30 characters.");
        bool = false;
        return false;
    }
    if (startdate == "") {
        alert("Start date must be filled out.");
        bool = false;
        return false;
    }
    if (enddate == "") {
        alert("End date must be filled out.");
        bool = false;
        return false;
    }

    if (startdate >= enddate) {
        bool = false;
        alert("End date must come after startdate.")
    }
    if (bool == true) {
        this.addHtmlTable(new course(titlename, stream, type, startdate, enddate));
    }


}

function addHtmlTable(course) {
    var table = document.getElementById("myTable");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = course.titlename;
    cell2.innerHTML = course.stream;
    cell3.innerHTML = course.type;
    cell4.innerHTML = course.startdate;
    cell5.innerHTML = course.enddate;

}

function updatevalues() {
    let bool = true;
    let updaterow = document.getElementById("updaterow").value;
    updaterow = updaterow - 1;
    var table1 = document.getElementById("myTable");

    if (updaterow > table1.rows.length || updaterow < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }

    let updatetitlename = document.getElementById("updatetitlename").value;
    let updatestream = document.getElementById("updatestream").value;
    let updatetype = document.getElementById("updatetype").value;
    let updatestartdate = document.getElementById("updatestartdate").value;
    let updateenddate = document.getElementById("updateenddate").value;



    if (updatetitlename == "") {
        alert("Title must be filled out.");
        bool = false;
        return false;
    }
    if (updatetitlename.length > 30) {
        alert("Title must have max length of 30 characters.");
        bool = false;
        return false;
    }
    if (updatestream == "") {
        alert("Stream must be filled out.");
        bool = false;
        return false;
    }
    if (updatestream.length > 30) {
        alert("Stream must have max length of 30 characters.");
        bool = false;
        return false;
    }
    if (updatestartdate == "") {
        alert("Start date must be filled out.");
        bool = false;
        return false;
    }
    if (updateenddate == "") {
        alert("End date must be filled out.");
        bool = false;
        return false;
    }

    if (updatestartdate >= updateenddate) {
        bool = false;
        alert("End date must come after startdate.")
    }
    if (bool == true) {
        document.getElementById("myTable").deleteRow(updaterow);
        this.addHtmlTable(new course(updatetitlename, updatestream, updatetype, updatestartdate, updateenddate));

    }

}

$(document).ready(function () {
    $("#appearupdate").click(function () {
        $("#containerupdatecourses").toggle(1000);
        $("#appearupdate").toggle(1000);
    });
});
$(document).ready(function () {
    $("#disappearupdate").click(function () {
        $("#containerupdatecourses").toggle(1000);
        $("#appearupdate").toggle(1000);
    });
});

$(document).ready(function () {
    $("#collapse").on("mouseover", function () {
        $(".dropdown-menu").toggle(1000);
    });
    $(".container-fluid").on("mouseover", function () {
        $(".dropdown-menu").hide(1000);
    });

});

// ------------------------------- Students-------------------

$(document).ready(function () {
    $("#appearupdatestudents").click(function () {
        $("#containerupdatestudents").toggle(1000);
        $("#appearupdatestudents").toggle(1000);
    });
});
$(document).ready(function () {
    $("#disappearupdatestudents").click(function () {
        $("#containerupdatestudents").toggle(1000);
        $("#appearupdatestudents").toggle(1000);
    });
});



function validateFormstudents() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let dateofbirth = document.getElementById("dateofbirth").value;
    let tuitionfees = document.getElementById("tuitionfees").value;
    let bool = true;
    if (firstname == "") {
        alert("First name must be filled out.");
        bool = false;
        return false;
    }
    if (firstname.length >= 30) {
        alert("First name must have max length 30 characters");
        bool = false;
        return false;
    }
    if (lastname == "") {
        alert("Last name must be filled out.");
        bool = false;
        return false;
    }
    if (lastname.length >= 30) {
        alert("Last name must have max length 30 characters");
        bool = false;
        return false;
    }
    if (tuitionfees < 0 || tuitionfees > 1000000) {
        alert("Tuition fees can't take a negative number neither can be more than 1000000");
        bool = false;
        return false;
    }
    if (dateofbirth == "") {
        alert("Date of birth must be filled out.");
        bool = false;
        return false;
    }


    if (bool == true) {
        this.addHtmlTableStudent(firstname, lastname, dateofbirth, tuitionfees);
    }

}

function addHtmlTableStudent(firstname, lastname, dateofbirth, tuitionfees) {
    var table = document.getElementById("mytablestudents");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = firstname;
    cell2.innerHTML = lastname;
    cell3.innerHTML = dateofbirth;
    cell4.innerHTML = tuitionfees;
}

function updatevaluesstudent() {
    let bool = true;
    let updaterowstudent = document.getElementById("updaterowstudent").value;
    updaterowstudent = updaterowstudent - 1;
    var table1 = document.getElementById("mytablestudents");

    if (updaterowstudent > table1.rows.length || updaterowstudent < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let firstname1 = document.getElementById("updatefirstnamestudent").value;
    let lastname1 = document.getElementById("updatelastnamestudent").value;
    let dateofbirth1 = document.getElementById("updatedateofbirthstudent").value;
    let tuitionfees1 = document.getElementById("tuitionfeesstudent").value;

    if (firstname1 == "") {
        alert("First name must be filled out.");
        bool = false;
        return false;
    }
    if (firstname1.length >= 30) {
        alert("First name must have max length 30 characters");
        bool = false;
        return false;
    }
    if (lastname1 == "") {
        alert("Last name must be filled out.");
        bool = false;
        return false;
    }
    if (lastname1.length >= 30) {
        alert("Last name must have max length 30 characters");
        bool = false;
        return false;
    }
    if (tuitionfees1 < 0 || tuitionfees1 > 1000000) {
        alert("Tuition fees can't take a negative number neither can be more than 1000000");
        bool = false;
        return false;
    }
    if (dateofbirth1 == "") {
        alert("Date of birth must be filled out.");
        bool = false;
        return false;
    }


    if (bool == true) {
        document.getElementById("mytablestudents").deleteRow(updaterowstudent);
        this.addHtmlTableStudent(firstname1, lastname1, dateofbirth1, tuitionfees1);
    }

}

// ------------------------------- Trainers-------------------

$(document).ready(function () {
    $("#appearupdatetrainers").click(function () {
        $("#containerupdatetrainers").toggle(1000);
        $("#appearupdatetrainers").toggle(1000);
    });
});
$(document).ready(function () {
    $("#disappearupdatetrainers").click(function () {
        $("#containerupdatetrainers").toggle(1000);
        $("#appearupdatetrainers").toggle(1000);
    });
});


function validateFormtrainers() {
    let firstnametrainer = document.getElementById("firstnametrainer").value;
    let lastnametrainer = document.getElementById("lastnametrainer").value;
    let subject = document.getElementById("subject").value;
    let bool = true;
    if (firstnametrainer == "") {
        alert("First name must be filled out.");
        bool = true;
        return false;
    }
    if (firstnametrainer.length >= 30) {
        alert("First name must have max length 30.");
        bool = true;
        return false;
    }
    if (lastnametrainer == "") {
        alert("Last name must be filled out.");
        bool = false;
        return false;
    }
    if (lastnametrainer.length >= 30) {
        alert("Last name must have max length 30.");
        bool = true;
        return false;
    }
    if (subject == "") {
        alert("Subject must be filled out.");
        bool = false;
        return false;
    }
    if (subject.length >= 100) {
        alert("Subject can have max length 100.");
        bool = true;
        return false;
    }


    if (bool == true) {
        this.addHtmlTabletrainers(firstnametrainer, lastnametrainer, subject);
    }

}

function addHtmlTabletrainers(firstnametrainer, lastnametrainer, subject) {
    var table = document.getElementById("mytabletrainers");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = firstnametrainer;
    cell2.innerHTML = lastnametrainer;
    cell3.innerHTML = subject;
}

function updatevaluestrainers() {
    let bool = true;
    let updaterowtrainer = document.getElementById("updaterowtrainer").value;
    updaterowtrainer = updaterowtrainer - 1;
    var table1 = document.getElementById("mytabletrainers");

    if (updaterowtrainer > table1.rows.length || updaterowtrainer < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let ufirstnamestudent = document.getElementById("updatefirstnametrainer").value;
    let ulastnamestudent = document.getElementById("updatelastnametrainer").value;
    let usubject = document.getElementById("updatesubjecttrainer").value;


    if (ufirstnamestudent == "") {
        alert("First name must be filled out.");
        bool = true;
        return false;
    }
    if (ufirstnamestudent.length >= 30) {
        alert("First name must have max length 30.");
        bool = true;
        return false;
    }
    if (ulastnamestudent == "") {
        alert("Last name must be filled out.");
        bool = false;
        return false;
    }
    if (ulastnamestudent.length >= 30) {
        alert("Last name must have max length 30.");
        bool = true;
        return false;
    }
    if (usubject == "") {
        alert("Subject must be filled out.");
        bool = false;
        return false;
    }
    if (usubject.length >= 100) {
        alert("Subject can have max length 100.");
        bool = true;
        return false;
    }
    if (bool == true) {
        document.getElementById("mytabletrainers").deleteRow(updaterowtrainer);
        this.addHtmlTabletrainers(ufirstnamestudent, ulastnamestudent, usubject);
    }

}


// ------------------------------- Assignments-------------------

$(document).ready(function () {
    $("#appearupdateassignments").click(function () {
        $("#containerupdateassignments").toggle(1000);
        $("#appearupdateassignments").toggle(1000);
    });
});
$(document).ready(function () {
    $("#disappearupdateassignments").click(function () {
        $("#containerupdateassignments").toggle(1000);
        $("#appearupdateassignments").toggle(1000);
    });
});

function validateFormAssignments() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let subdatetime = document.getElementById("subdatetime").value;
    let oralmark = document.getElementById("oralmark").value;
    let totalmark = document.getElementById("totalmark").value;
    let bool = true;
    if (title == "") {
        alert("Title of assignment must be filled out.");
        bool = true;
        return false;
    }
    if (title.length >= 30) {
        alert("Title name must have max length 30.");
        bool = true;
        return false;
    }
    if (description == "") {
        alert("Description must be filled out.");
        bool = false;
        return false;
    }
    if (description.length >= 100) {
        alert("Description can have max length 100.");
        bool = true;
        return false;
    }
    if (subdatetime == "") {
        alert("Submision date must be filled out.");
        bool = false;
        return false;
    }
    if (oralmark < 0) {
        alert("Oral mark can't take negative values.");
        bool = false;
        return false;
    }
    if (totalmark < 0) {
        alert("Total mark can't take negative values.");
        bool = false;
        return false;
    }


    if (bool == true) {
        this.addHtmlTableAssignments(title, description, subdatetime, oralmark, totalmark);
    }

}

function addHtmlTableAssignments(title, description, subdatetime, oralmark, totalmark) {
    var table = document.getElementById("mytableassignments");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = title;
    cell2.innerHTML = description;
    cell3.innerHTML = subdatetime;
    cell4.innerHTML = oralmark;
    cell5.innerHTML = totalmark;

}

function updatevaluesAssignments() {
    let bool = true;
    let updaterowassignment = document.getElementById("updaterowassignment").value;
    updaterowassignment = updaterowassignment - 1;
    var table1 = document.getElementById("mytableassignments");

    if (updaterowassignment > table1.rows.length || updaterowassignment < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let utitle = document.getElementById("updatetitle").value;
    let udescription = document.getElementById("updatedescription").value;
    let usubdatetime = document.getElementById("updatedatesubdatetime").value;
    let uoralmark = document.getElementById("updateoralmark").value;
    let utotalmark = document.getElementById("updatetotalmark").value;
    
    if (utitle == "") {
        alert("Title of assignment must be filled out.");
        bool = true;
        return false;
    }
    if (utitle.length >= 30) {
        alert("Title name must have max length 30.");
        bool = true;
        return false;
    }
    if (udescription == "") {
        alert("Description must be filled out.");
        bool = false;
        return false;
    }
    if (udescription.length >= 100) {
        alert("Description can have max length 100.");
        bool = true;
        return false;
    }
    if (usubdatetime == "") {
        alert("Submision date must be filled out.");
        bool = false;
        return false;
    }
    if (uoralmark < 0) {
        alert("Oral mark can't take negative values.");
        bool = false;
        return false;
    }
    if (utotalmark < 0) {
        alert("Total mark can't take negative values.");
        bool = false;
        return false;
    }


    if (bool == true) {
        document.getElementById("mytableassignments").deleteRow(updaterowassignment);
        this.addHtmlTableAssignments(utitle, udescription, usubdatetime, uoralmark, utotalmark);
    }

}

// ------------------------------- StudentsPerCourse/TrainersPerCourse/AssignmentsPerCourse/AssignmentsPerStudentPerCourse-------------------
var course1 = {
    courseid: 1,
    titlename: "course1",
    stream: "Javascript",
    type: "Fulltime"
}
var course2 = {
    courseid: 2,
    titlename: "course1",
    stream: "Javascript",
    type: "Parttime"
}
var course3 = {
    courseid: 3,
    titlename: "course2",
    stream: "Go",
    type: "Parttime"
}

var student1 = {
    studentid: 1,
    firstname: "Konstantinos",
    lastname: "Kousounnis"
}
var student2 = {
    studentid: 2,
    firstname: "Georgios",
    lastname: "Georgiou"
}
var student3 = {
    studentid: 3,
    firstname: "Nikolas",
    lastname: "Xristodoulopoulos"
}

var trainer1 = {
    trainerid: 1,
    trainerfirstname: "Nikos",
    trainerlastname: "Theodoridis"
}
var trainer2 = {
    trainerid: 2,
    trainerfirstname: "Alexandros",
    trainerlastname: "Alepis"
}
var trainer3 = {
    trainerid: 3,
    trainerfirstname: "Giannis",
    trainerlastname: "Theodoridis"
}

var assignment1 = {
    assignmentid: 1,
    title: "Assignment1"
}
var assignment2 = {
    assignmentid: 2,
    title: "Assignment2"
}
var assignment3 = {
    assignmentid: 3,
    title: "Assignment3"
}

function validateFormStudentPerCourses() {
    let studentid = document.getElementById("studentid").value;
    let courseid = document.getElementById("courseid").value;

    let student;
    let course;
    let bool = true;
    switch (studentid) {
        case '1':
            student = student1;
            break;
        case '2':
            student = student2;
            break;
        case '3':
            student = student3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of student table.");
            break;
    }
    switch (courseid) {
        case '1':
            course = course1;
            break;
        case '2':
            course = course2;
            break;
        case '3':
            course = course3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of courses table.");
            break;
    }
    if (bool == true) {
        addHtmlTableStudentsPerCourse(student, course);
    }
}

function addHtmlTableStudentsPerCourse(student, course) {
    var table = document.getElementById("myTableStudentsPerCourse");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = student.studentid;
    cell2.innerHTML = student.firstname;
    cell3.innerHTML = student.lastname;
    cell4.innerHTML = course.courseid;
    cell5.innerHTML = course.titlename;
    cell6.innerHTML = course.stream;
    cell7.innerHTML = course.type;
}

function updateFormStudentPerCourses() {
    let bool = true;
    let updaterow = document.getElementById("updaterow").value;
    updaterow = updaterow - 1;
    var table = document.getElementById("myTableStudentsPerCourse");
    if (updaterow > table.rows.length || updaterow < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }

    let ucourseid = document.getElementById("updatecourseid").value;
    let ustudentid = document.getElementById("updatestudentid").value;

    let ustudent;
    let ucourse;


    switch (ustudentid) {
        case '1':
            ustudent = student1;
            break;
        case '2':
            ustudent = student2;
            break;
        case '3':
            ustudent = student3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of student table.");
            break;

    }
    switch (ucourseid) {
        case '1':
            ucourse = course1;
            break;
        case '2':
            ucourse = course2;
            break;
        case '3':
            ucourse = course3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of courses table.");
            break;
    }
    if (bool == true) {
        document.getElementById("myTableStudentsPerCourse").deleteRow(updaterow);
        addHtmlTableStudentsPerCourse(ustudent, ucourse)
    }

}

// ------------------------trainerspercourse----------------------------------

function validateFormTrainersPerCourses() {
    let trainerid = document.getElementById("trainerid").value;
    let courseid = document.getElementById("courseid").value;

    let trainer;
    let course;

    let bool = true;
    switch (trainerid) {
        case '1':
            trainer = trainer1;
            break;
        case '2':
            trainer = trainer2;
            break;
        case '3':
            trainer = trainer3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of trainer table.");
            break;
    }
    switch (courseid) {
        case '1':
            course = course1;
            break;
        case '2':
            course = course2;
            break;
        case '3':
            course = course3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of courses table.");
            break;
    }
    if (bool == true) {
        addHtmlTableTrainersPerCourse(trainer, course)
    }
}

function addHtmlTableTrainersPerCourse(trainer, course1) {
    var table = document.getElementById("myTableTrainers");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = trainer.trainerid;
    cell2.innerHTML = trainer.trainerfirstname;
    cell3.innerHTML = trainer.trainerlastname;
    cell4.innerHTML = course1.courseid;
    cell5.innerHTML = course1.titlename;
    cell6.innerHTML = course1.stream;
    cell7.innerHTML = course1.type;
}

function updateFormTrainersPerCourse() {
    let bool = true;
    let updaterow = document.getElementById("updaterow").value;

    updaterow = updaterow - 1;
    var table1 = document.getElementById("myTableTrainers");

    if (updaterow > table1.rows.length || updaterow < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let ucourseid = document.getElementById("updatecourseid").value;
    let utrainerid = document.getElementById("updatetrainerid").value;

    let student;
    let course;


    switch (ucourseid) {
        case '1':
            course = course1;
            break;
        case '2':
            course = course2;
            break;
        case '3':
            course = course3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of courses table.");
            break;
    }
    switch (utrainerid) {
        case '1':
            trainer = trainer1;
            break;
        case '2':
            trainer = trainer2;
            break;
        case '3':
            trainer = trainer3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of trainers table.");
            break;
    }
    if (bool == true) {
        document.getElementById("myTableTrainers").deleteRow(updaterow);
        addHtmlTableTrainersPerCourse(trainer, course)
    }
}


// ------------------------Assignmentsspercourse----------------------------------

function validateFormAssignmentsPerCourses() {
    let assignmentid = document.getElementById("assignmentid").value;
    let courseid = document.getElementById("courseid").value;

    let assignment;
    let course;

    let bool = true;
    switch (assignmentid) {
        case '1':
            assignment = assignment1;
            break;
        case '2':
            assignment = assignment2;
            break;
        case '3':
            assignment = assignment3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of assignments table.");
            break;
    }
    switch (courseid) {
        case '1':
            course = course1;
            break;
        case '2':
            course = course2;
            break;
        case '3':
            course = course3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of courses table.");
            break;
    }
    if (bool == true) {
        addHtmlTableAssignmentssPerCourse(assignment, course)
    }
}

function addHtmlTableAssignmentssPerCourse(assignment, course1) {
    var table = document.getElementById("myTableAssignments");

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = assignment.assignmentid;
    cell2.innerHTML = assignment.title;
    cell3.innerHTML = course1.courseid;
    cell4.innerHTML = course1.titlename;
    cell5.innerHTML = course1.stream;
    cell6.innerHTML = course1.type;
}

function updateFormAssignmentsPerCourse() {
    let bool = true;
    let updaterow = document.getElementById("updaterow").value;
    updaterow = updaterow - 1;
    var table1 = document.getElementById("myTableAssignments");

    if (updaterow > table1.rows.length || updaterow < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let ucourseid = document.getElementById("updatecourseid").value;
    let uassignmentid = document.getElementById("updateassignmentid").value;

    let assignment;
    let course;

    switch (ucourseid) {
        case '1':
            course = course1;
            break;
        case '2':
            course = course2;
            break;
        case '3':
            course = course3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of courses table.");
            break;
    }
    switch (uassignmentid) {
        case '1':
            assignment = assignment1;
            break;
        case '2':
            assignment = assignment2;
            break;
        case '3':
            assignment = assignment3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of assignments table.");
            break;

    }
    if (bool == true) {
        document.getElementById("myTableAssignments").deleteRow(updaterow);
        addHtmlTableAssignmentssPerCourse(assignment, course)
    }

}

// ------------------------AssignmentsspercourseperStudent----------------------------------

function validateFormAssignmentsPerStudentPerCourse() {
    let studentid = document.getElementById("studentid").value;
    let courseid = document.getElementById("courseid").value;
    let assignmentid = document.getElementById("assignmentid").value;

    let student;
    let course;


    let assignment;
    let bool = true;

    switch (assignmentid) {
        case '1':
            assignment = assignment1;
            break;
        case '2':
            assignment = assignment2;
            break;
        case '3':
            assignment = assignment3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of assignments table.");
            break;
    }
    switch (studentid) {
        case '1':
            student = student1;
            break;
        case '2':
            student = student2;
            break;
        case '3':
            student = student3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of student table.");
            break;
    }
    switch (courseid) {
        case '1':
            course = course1;
            break;
        case '2':
            course = course2;
            break;
        case '3':
            course = course3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of courses table.");
            break;
    }
    if (bool == true) {
        addHtmlTableAssignmentssPerCoursePerStudent(assignment, student, course)
    }
}

function addHtmlTableAssignmentssPerCoursePerStudent(assignment, student, course) {
    var table = document.getElementById("myTableAssignmentsPerCoursePerStudent");

    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);


    cell1.innerHTML = student.studentid;
    cell2.innerHTML = student.firstname;
    cell3.innerHTML = student.lastname;
    cell4.innerHTML = course.courseid;
    cell5.innerHTML = course.titlename;
    cell6.innerHTML = course.stream;
    cell7.innerHTML = course.type;
    cell8.innerHTML = assignment.assignmentid;
    cell9.innerHTML = assignment.title;
}

function updateAssignmentssPerCoursePerStudent() {
    let bool = true;
    let updaterow = document.getElementById("updaterow").value;
    updaterow = updaterow - 1;
    var table1 = document.getElementById("myTableAssignmentsPerCoursePerStudent");

    if (updaterow > table1.rows.length || updaterow < 0) {
        bool = false;
        alert("You must select a row that exists from table.");
    }
    let ucourseid = document.getElementById("updatecourseid").value;
    let ustudentid = document.getElementById("updatestudentid").value;
    let uassignmentid = document.getElementById("updateassignmentid").value;

    let ustudent;
    let ucourse;
    let uassignment;
    switch (uassignmentid) {
        case '1':
            uassignment = assignment1;
            break;
        case '2':
            uassignment = assignment2;
            break;
        case '3':
            uassignment = assignment3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of assignments table.");
            break;
    }
    switch (ustudentid) {
        case '1':
            ustudent = student1;
            break;
        case '2':
            ustudent = student2;
            break;
        case '3':
            ustudent = student3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of student table.");
            break;
    }
    switch (ucourseid) {
        case '1':
            ucourse = course1;
            break;
        case '2':
            ucourse = course2;
            break;
        case '3':
            ucourse = course3;
            break;
        default:
            bool = false;
            alert("You  must select from the available id's of courses table.");
            break;
    }
    if (bool == true) {
        document.getElementById("myTableAssignmentsPerCoursePerStudent").deleteRow(updaterow);
        addHtmlTableAssignmentssPerCoursePerStudent(uassignment, ustudent, ucourse)
    }

}
