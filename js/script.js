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
        bool = true;
        return false;
    }
    if (stream == "") {
        alert("Stream must be filled out.");
        bool = false;
        return false;
    }

    if (type == "") {
        bool = false;
        alert("Type must be filled out.")
    }
    if (startdate >= enddate) {
        bool = false;
        alert("Enddate must come after startdate.")
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
    console.log(course.titlename);
    cell1.innerHTML = course.titlename;
    cell2.innerHTML = course.stream;
    cell3.innerHTML = course.type;
    cell4.innerHTML = course.startdate;
    cell5.innerHTML = course.enddate;

}

function updatevalues() {
    let updaterow = document.getElementById("updaterow").value;
    let updatetitlename = document.getElementById("updatetitlename").value;
    let updatestream = document.getElementById("updatestream").value;
    let updatetype = document.getElementById("updatetype").value;
    let updatestartdate = document.getElementById("updatestartdate").value;
    let updateenddate = document.getElementById("updateenddate").value;


    let bool = true;
    if (course.titlename == "") {
        alert("Title must be filled out.");
        bool = true;
        return false;
    }
    if (course.stream == "") {
        alert("Stream must be filled out.");
        bool = false;
        return false;
    }

    if (course.type == "") {
        bool = false;
        alert("Type must be filled out.")
    }
    if ((course.startdate >= course.enddate) == true) {
        bool = false;
        alert("Enddate must come after startdate.")
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
    $("section").on("mouseover", function () {
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
        bool = true;
        return false;
    }
    if (lastname == "") {
        alert("Last name must be filled out.");
        bool = false;
        return false;
    }


    if (bool == true) {
        this.addHtmlTableStudent(firstname, lastname, dateofbirth, tuitionfees);
    }

}

function addHtmlTableStudent(firstname, lastname, dateofbirth, tuitionfees) {
    var table = document.getElementById("mytablestudents");
    console.log(firstname);
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
    let updaterowstudent = document.getElementById("updaterowstudent").value;

    let firstname1 = document.getElementById("updatefirstnamestudent").value;
    let lastname1 = document.getElementById("updatelastnamestudent").value;
    let dateofbirth1 = document.getElementById("updatedateofbirthstudent").value;
    let tuitionfees1 = document.getElementById("tuitionfeesstudent").value;
    let bool = true;
    if (firstname1 == "") {
        alert("First name must be filled out.");
        bool = true;
        return false;
    }
    if (lastname1 == "") {
        alert("Last name must be filled out.");
        bool = false;
        return false;
    }


    if (bool == true) {
        document.getElementById("mytablestudents").deleteRow(updaterowstudent);
        this.addHtmlTableStudent(firstname1, lastname1, dateofbirth1, tuitionfees1);        
    }

}



