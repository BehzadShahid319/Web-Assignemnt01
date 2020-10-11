import React from 'react';
import './App.css';
import Logo from './WreckCover.png';
import video from './WreckExplo.mp4';
var savedIndex;
class App extends React.Component {
  addButton = () => {
    var row = document.createElement('tr');
    row.className='ROWS';
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var cell1 = document.createTextNode(document.getElementById('Name').value);
    if(document.getElementById('Age').value>=1)
    {
        var cell2=document.createTextNode(document.getElementById('Age').value); 
    }
    else{
        alert("Invalid Age Input")
        var cell2=document.createTextNode('N/A');
    }
    if (document.getElementById('Male').checked) {
      var cell3 = document.createTextNode(document.getElementById("Male").value);
    }
    else if (document.getElementById('Female').checked) {
      var cell3 = document.createTextNode(document.getElementById("Female").value);
    }
    else {
      alert("No Gender Input");
      var cell3 = document.createTextNode('N/A');
    }
    var cell4 = document.createTextNode(document.getElementById("City").value);
    
    var Select = document.createElement("button");
    Select.innerHTML = "Select";
    var Remove = document.createElement("button");
    Remove.innerHTML = "Remove";
    Select.id = "Select";
    Remove.id = "Remove";

    Select.onclick = function () {
      var i;
      var ROWS = document.getElementById('list').rows;
      console.log(ROWS.length);
      for (i = 0; i < ROWS.length; i++) {
        // eslint-disable-next-line no-loop-func
        ROWS[i].onclick = function () {
          var rIndex;
          console.log(this.rowIndex);
          rIndex = this.rowIndex;
          savedIndex = rIndex;
          document.getElementById("Name").value = this.cells[0].innerHTML;
          if (this.cells[2].innerHTML === 'Male'){
            document.getElementById('Male').checked = true;
          }
          if (this.cells[2].innerHTML === 'Female') {
            document.getElementById('Female').checked = true;
          }
          document.getElementById("Age").value = this.cells[1].innerHTML;
          document.getElementById("City").value = this.cells[3].innerHTML;
        };
      }
    };
    Remove.onclick = function () {
      var table = document.getElementById('list');
      table.deleteRow(this.parentNode.parentNode.rowIndex);
    };
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    td1.appendChild(cell1);
    td2.appendChild(cell2);
    td3.appendChild(cell3);
    td4.appendChild(cell4);
    td5.appendChild(Select);
    td5.appendChild(Remove);
    document.getElementById('list').appendChild(row);
    // Clearing the Form
    document.getElementById('Name').value='';
    document.getElementById('City').value='Choose a City';
    document.getElementById('Age').value='';
    document.getElementById('Male').checked=false;
    document.getElementById('Female').checked=false;
  };

  resetButton = () => {
    document.getElementById('Name').value='';
    document.getElementById('City').value='Choose a City';
    document.getElementById('Age').value='';
    document.getElementById('Male').checked=false;
    document.getElementById('Female').checked=false;
  };

  updateButton = () => {
    var name = document.getElementById("Name").value;
    if(document.getElementById('Age').value>=15)
    {
        var age = document.getElementById("Age").value;
    }
    else{
        alert("Age Should be above 15 hence Empty Data will be Entered")
        var age ='N/A'
    }
    var city = document.getElementById("City").value;
    var table=document.getElementById('list');
    var gender;
    if(document.getElementById('Male').checked)
    {
        gender='Male'
    }
    if(document.getElementById("Female").checked)
    {
        gender='Female'
    }
    table.rows[savedIndex].cells[0].innerHTML = name; 
    table.rows[savedIndex].cells[1].innerHTML = age;
    table.rows[savedIndex].cells[2].innerHTML = gender;
    table.rows[savedIndex].cells[3].innerHTML = city;
    // Clearing The Form
    document.getElementById('Name').value='';
    document.getElementById('City').value='Choose a City';
    document.getElementById('Age').value='';
    document.getElementById('Male').checked=false;
    document.getElementById('Female').checked=false;
  };

  render() {
    return (
      <div className="App">
        <h2 id="rollno">
          M. Behzad Shahid<br/>
          SP18-BCS-059_C<br/>
          Assignment 01  
        </h2>
        <video src={video} type="video/mp4" autoPlay="true" muted loop id="wreckVid"/>
        <a href="https://www.youtube.com/channel/UC6q1ANbLttpTMq4VXlp3zUw?" target="_blank">
          <img
            src={Logo}
            alt="Wreck"
            width="100px"
            title="Wreck It All"
            class="wreck"/>
        </a>
        <div id="update">
          <table class="table">
            <thead>
              <th class="text"> Add/Update Data</th>
            </thead>
            <tbody>
              <div class="form">
                <tr class="ROWS">
                  <td class="text">
                    <label for="name">Name: </label>
                  </td>
                  <td class="text">
                    <input
                      id="Name"
                      type="text"
                      name="name"
                      class="input"
                      placeholder="Enter Full Name"
                    ></input>
                  </td>
                </tr>
                <tr class="ROWS">
                  <td class="text">
                    <label for="gender">Gender: </label>
                  </td>
                  <td class="text">
                    <input
                      type="radio"
                      id="Male"
                      name="gender"
                      value="Male"
                    />
                    Male
                    <input
                      type="radio"
                      id="Female"
                      name="gender"
                      value="Female"
                    />
                    Female
                  </td>
                </tr>
                <tr class="ROWS">
                  <td class="text">
                    <label for="age">Age: </label>
                  </td>
                  <td class="text">
                    <input
                      id="Age"
                      type="number"
                      name="age"
                      class="input"
                      placeholder="Enter Age"
                    ></input>
                  </td>
                </tr>
                <tr class="ROWS">
                  <td class="text">
                    <label for="city">City: </label>
                  </td>
                  <td class="text">
                    <select id="City" name="city" class="dropdown" class="input">
                      {/* <option value="Select City">Select City</option> */}
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Peshawar">Peshawar</option>
                      <option value="Quetta">Quetta</option>
                    </select>
                  </td>
                </tr>
                <tr class="ROWS">
                  <td>
                    <button class="button" onClick={this.resetButton}>
                      Reset
                    </button>
                  </td>
                  <td>
                    {/* <input type="submit" value="Add" class="button text"></input> */}
                    <button class="button" onClick={this.addButton}>
                      Add
                    </button>
                  </td>
                  <td>
                    <button class="button" onClick={this.updateButton}>
                      Update
                    </button>
                  </td>
                </tr>
              </div>
            </tbody>
          </table>
        </div>
        <div id="data">
          <table id="list" class="table">
            <thead>
              <tr id="row1">
                <td>Name <hr/></td>
                <td>Age <hr/></td>
                <td>Gender <hr/></td>
                <td>City <hr/></td>
                <td>Action <hr/></td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;