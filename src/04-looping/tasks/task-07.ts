/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentStudents:number = 0;
let absentStudents:number = 0;
const absentNames: string[] = [];

for (let i = 0; i < attendances.length; i++) {
  const attendance = attendances[i];

  if (attendance.present) {
    presentStudents++;
  } else {
    absentStudents++;
    absentNames.push(attendance.name);
  }
}

const attendancePercentage: number =
  (presentStudents / attendances.length) * 100;

console.log("Total Students:", attendances.length);
console.log("Present Students:", presentStudents);
console.log("Absent Students:", absentStudents);
console.log("Absent Names:", absentNames.join(", "));
console.log(
  "Attendance Percentage:",
  attendancePercentage.toFixed(2) + "%"
);
