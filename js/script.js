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
    cell1.innerHTML = course.titlename;
    cell2.innerHTML = course.stream;
    cell3.innerHTML = course.type;
    cell4.innerHTML = course.startdate;
    cell5.innerHTML = course.enddate;

}

function updatevalues() {
    let updaterow = document.getElementById("updaterow").value;
    console.log(updaterow);
    course.titlename = document.getElementById("updatetitlename").value;
    course.stream = document.getElementById("updatestream").value;
    course.type = document.getElementById("updatetype").value;
    course.startdate = document.getElementById("updatestartdate").value;
    course.enddate = document.getElementById("updateenddate").value;
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
    if (startdate >= enddate) {
        bool = false;
        alert("Enddate must come after startdate.")
    }
    if (bool == true) {
        this.addHtmlTable(new course(titlename, stream, type, startdate, enddate));
        document.getElementById("myTable").deleteRow(updaterow);
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


