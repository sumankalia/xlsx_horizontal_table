import React from "react";
import ExcelExportHelper from "./components/ExcelExportHelper";

const FIRST_TABLE_DATA = {
  name: "Suyog Bhere",
  mobile: '9876543210',
  email: 'test@test.com',
  address: "Test"
}

const DATA = [
  {
    STUDENT_DETAILS: {
      id: '101',
      name: "Suman Kumar",
      parentName: "Suresh Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",
      status: "Pass",
    },
    MARKS: {
      maths: 75,
      physics: 65,
      chemistry: 72,
      english: 62,
      computerScience: 80,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 102,
      name: "Rahul Kumar",
      parentName: "Aatma Ram",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",
      status: "Pass",
    },
    MARKS: {
      maths: 70,
      physics: 75,
      chemistry: 82,
      english: 72,
      computerScience: 60,
    },
  },
  {
    STUDENT_DETAILS: {
      id: 103,
      name: "Anuj Kumar",
      parentName: "Ashok Kumar",
      classroom: "12th",
      subject: "Non Medical",
      division: "1st",
      status: "Pass",
    },
    MARKS: {
      maths: 60,
      physics: 65,
      chemistry: 92,
      english: 77,
      computerScience: 80,
    },
  },
];

const App = () => {
  return (
    <div style={{ padding: "30px" }}>
      <ExcelExportHelper data={DATA} firstTableData={FIRST_TABLE_DATA}/>
      <table class="table table-bordered mt-2">
        <tbody>
        <tr>
          <th>Name</th>
          <td>{FIRST_TABLE_DATA.name}</td>
        </tr>
        <tr>
          <th>Phone</th>
          <td>{FIRST_TABLE_DATA.mobile}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>{FIRST_TABLE_DATA.email}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{FIRST_TABLE_DATA.address}</td>
        </tr>
        </tbody>
      </table>

      <h3>Student Details</h3>
      <table class="table table-bordered">
        <thead style={{ background: "yellow" }}>
          <tr>
            <th scope="col">Enrolment No.</th>
            <th scope="col">Student Name</th>
            <th scope="col">Parent Name</th>
            <th scope="col">Class</th>
            <th scope="col">Subject</th>
            <th scope="col">Division</th>
            <th scope="col">Result Status</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((studentsData) => (
            <tr>
              <td>
                <strong>{studentsData.STUDENT_DETAILS.id}</strong>{" "}
              </td>
              <td>{studentsData.STUDENT_DETAILS.name}</td>
              <td>{studentsData.STUDENT_DETAILS.parentName}</td>
              <td>{studentsData.STUDENT_DETAILS.classroom}</td>
              <td>{studentsData.STUDENT_DETAILS.subject}</td>
              <td>{studentsData.STUDENT_DETAILS.division}</td>
              <td>
                <strong>{studentsData.STUDENT_DETAILS.status}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Marks</h3>
      <table class="table table-bordered">
        <thead style={{ background: "gray", color: "#fff" }}>
          <tr>
            <th scope="col">Enrolment No.</th>
            <th scope="col">Student Name</th>
            <th scope="col">Mathematics</th>
            <th scope="col">Physics</th>
            <th scope="col">Chemistry</th>
            <th scope="col">English</th>
            <th scope="col">Computer Science</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((studentsData) => (
            <tr>
              <td>
                <strong>{studentsData.STUDENT_DETAILS.id}</strong>
              </td>
              <td>{studentsData.STUDENT_DETAILS.name}</td>
              <td>{studentsData.MARKS.maths}</td>
              <td>{studentsData.MARKS.physics}</td>
              <td>{studentsData.MARKS.chemistry}</td>
              <td>{studentsData.MARKS.english}</td>
              <td>{studentsData.MARKS.computerScience}</td>
              <td>
                <strong>
                  {" "}
                  {studentsData.MARKS.maths +
                    studentsData.MARKS.physics +
                    studentsData.MARKS.chemistry +
                    studentsData.MARKS.english +
                    studentsData.MARKS.computerScience}
                </strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
