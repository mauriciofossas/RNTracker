function updateCompetenciesTable(workingNurses) {
    const ecmoNurses = ["James", "Wendy"];
    const impellaNurses = ["Eric", "Anna"];
    const vadNurses = ["James", "Anna"];
    const crrtNurses = ["Eric", "Hannah"];
    const rotaflowNurses = ["Wendy"]; 
    const vatNurses = ["Wendy"]; 
  
    const competenciesDiv = document.getElementById("competencies");
  
    const devices = [
      { name: "ECMO", nurses: ecmoNurses },
      { name: "Impella", nurses: impellaNurses },
      { name: "VAD", nurses: vadNurses },
      { name: "CRRT", nurses: crrtNurses },
      { name: "Rotaflow", nurses: rotaflowNurses },
      { name: "VAT", nurses: vatNurses }
    ];
  
    devices.forEach(device => {
      const deviceDiv = document.createElement("div");
      deviceDiv.innerHTML = `<h3>${device.name}</h3>`; 
  
      const deviceTable = document.createElement("table");
      const deviceTableHeaderRow = deviceTable.insertRow();
      //const deviceTableNameHeaderCell = deviceTableHeaderRow.insertCell();
      //deviceTableNameHeaderCell.innerHTML = "<b>Nurse Name</b>";
  
      const deviceTableBody = document.createElement('tbody'); 
  
      device.nurses.forEach(nurse => {
        if (workingNurses.includes(nurse)) {
            const deviceTableRow = deviceTableBody.insertRow();
            const deviceTableNameCell = deviceTableRow.insertCell();
            deviceTableNameCell.innerHTML = nurse; 
            deviceTable.appendChild(deviceTableBody); 
            deviceDiv.appendChild(deviceTable);
            competenciesDiv.appendChild(deviceDiv);
        }
      });
    });
  }