/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

import { type } from "node:os"

type registration = {
    id1:string
    name:string
    grade:number
    id2:string
    title:string
    instructor:string
    hour:number
    paid:Boolean
}

const register: registration[] = [
    {id1:"mbg003", name:"Ahmad Makaroni", grade:9, id2:"ast001", title:"MTK", instructor:"Mahmad Faudin", hour:9, paid:true},
    {id1:"mbg003", name:"Aditiya Ihsan", grade:11, id2:"ast003", title:"MTK", instructor:"bahmad Faudin", hour:7, paid:true},
    {id1:"mbg003", name:"Nadia Putri", grade:10, id2:"ast067", title:"MTK", instructor:"ahmad Faudin", hour:8, paid:false}
]

console.log("register:", register)