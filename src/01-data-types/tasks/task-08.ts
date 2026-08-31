/**
 * The school's Smart Greenhouse system automatically records the air temperature every hour from 08:00 until 15:00. 
 * Instead of storing each temperature in a separate variable, the developer wants to store all temperature readings in a 
 * single collection so they can easily calculate the highest, lowest, and average temperature later.
 * Today, the recorded temperatures are:
 * 
| Time  | Temperature (°C) |
| ----- | ---------------- |
| 08:00 | 24.5             |
| 09:00 | 25.1             |
| 10:00 | 26.8             |
| 11:00 | 28.4             |
| 12:00 | 30.2             |
| 13:00 | 31.1             |
| 14:00 | 30.7             |
| 15:00 | 29.3             |

 * Task:
 * 
 * 1. Define a proper type for the temperature information.
 * 2. Store the temperature data in a single collection.
 * 3. Display the temperature data using console.log.
 */

type sistem ={
    time:string
    temp:number
}

const sistemm:sistem[]=[
    {time:"08:00", temp:24.5},
    {time:"09:00", temp:25.1},
    {time:"10:00", temp:26.8},
    {time:"11:00", temp:28.4},
    {time:"12:00", temp:30.2},
    {time:"13:00", temp:31.1},
    {time:"14:00", temp:30.7},
    {time:"15:00", temp:29.3},
]

console.log("sistemm", sistemm)