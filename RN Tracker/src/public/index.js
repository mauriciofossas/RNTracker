const nurseNames = ["James", "Eric", "Anna", "Hannah", "Wendy"]; 
let workingNurses = []; 

// Function to create the assignment table
function createAssignmentTable() {
  const assignmentTable = document.getElementById("assignmentTable");

  const tableHeaderRow = assignmentTable.insertRow();
  const nameHeaderCell = tableHeaderRow.insertCell();
  nameHeaderCell.innerHTML = "<b>Nurse Name</b>"; 
  const workingHeaderCell = tableHeaderRow.insertCell();
  workingHeaderCell.innerHTML = "<b>Working Next Shift</b>"; 

  nurseNames.forEach(nurse => {
    const row = assignmentTable.insertRow();
    const nameCell = row.insertCell();
    nameCell.innerHTML = nurse;
    const workingCell = row.insertCell();
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    workingCell.appendChild(checkbox);
    checkbox.addEventListener('change', updateWorkingNurses); 
  });
}

// Function to update the list of working nurses
function updateWorkingNurses() {
  workingNurses = []; 
  const checkboxes = document.querySelectorAll('#assignmentTable input[type="checkbox"]');
  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      workingNurses.push(nurseNames[index]); 
    }
  });

  console.log("workingNurses:", workingNurses); 

  // Call updateCompetenciesTable() immediately if the "Competencies" tab is active
  if (document.getElementById("competencies").style.display === "block") { 
    updateCompetenciesTable(workingNurses); 
  }
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  if (tabName === 'competencies') { 
    // Clear existing content in the "Competencies" tab 
    const competenciesDiv = document.getElementById("competencies");
    competenciesDiv.innerHTML = ""; 

    const script = document.createElement('script');
    script.src = 'competencies.js';
    document.body.appendChild(script); 
    script.onload = () => { 
      updateCompetenciesTable(workingNurses); 
    };
  }
}

// Show the default tab (Assignments) on page load
document.getElementById("defaultOpen").click(); 

// Create the assignment table on page load
createAssignmentTable(); 