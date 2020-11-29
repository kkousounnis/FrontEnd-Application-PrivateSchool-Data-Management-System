var course = {
    titlename,
    stream,
    type,
    startdate,
    enddate    
}

function validateForm() {
    let titlename = document.getElementById("titlename").value; 
    let stream = document.getElementById("stream").value;
    let type = document.getElementById("type").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
;    if (titlename == "") {
        alert("Title must be filled out");
        return false;
    }
    if (stream == "") {
        alert("Stream must be filled out");
        return false;
    }
    
    course.titlename = titlename;
    course.stream = stream;
    course.type = type;
    course.startdate = startdate;
    course.enddate = enddate;
     this.addHtmlTable(course);
    
    
}

function addHtmlTable(course) {
    var table = document.getElementById("myTable");
    
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = course.titlename.value;
    cell2.innerHTML = course.stream.value;
    cell3.innerHTML = course.type.value;
    cell4.innerHTML = course.startdate.value;
    cell5.innerHTML = course.enddate.value;
    
  }
