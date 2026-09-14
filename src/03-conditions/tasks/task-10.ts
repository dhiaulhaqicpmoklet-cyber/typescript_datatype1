/**
 * A university allows students to register for advanced programming courses only if they satisfy all academic requirements.

Registration Process

Step 1 — Academic Status
The student must:
 - Be actively enrolled.
 - Have completed tuition payment.

If either requirement is not satisfied:
Registration Rejected

Otherwise, continue.

Step 2 — Academic Requirements
The student must:
- Pass Programming Fundamentals.
- Pass Database Systems.
- Have a GPA of at least 3.20.
If these requirements are satisfied, continue.
Otherwise:
Academic Requirements Not Met

Step 3 — Seat Availability
If seats are still available:
- Registration Successful
Otherwise:
- Added to Waiting List

Student Information:
| Information                     | Value       |
| ------------------------------- | ----------- |
| Student Name                    | Nadia Putri |
| Active Student                  | Yes         |
| Tuition Paid                    | Yes         |
| Passed Programming Fundamentals | Yes         |
| Passed Database Systems         | Yes         |
| GPA                             | 3.45        |
| Seats Available                 | No          |

Student Tasks
- Declare all variables.
- Implement the registration workflow.
- Use nested conditional statements.
- Display the final registration result.
 */

const studentname:string="Nadia Putri"
const active:boolean=true
const paid:boolean=true
const fundamentals:boolean=true
const database:boolean=true
const gpaa:number=3.45
const seats:boolean=false

if(active===true && paid===true){
    if(fundamentals===true && database===true && gpaa>=3.20){
        if(seats===false){
            console.log("Added to Waiting List")
        }else{
            console.log("Registration Successful")
        }
    }else{
        console.log("Academic Requirements Not Met")
    }
}else{
    console.log("Registration Rejected")
}