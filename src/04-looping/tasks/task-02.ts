/**
 * A shopping mall has a parking building with:
 * - 5 floors
 * - Each floor contains 20 parking spaces
 * 
 * The parking management system wants to display every parking location using the following format:
 * ------------------------------
 * Floor 1 - Slot 1
 * Floor 1 - Slot 2
 * ...
 * Floor 1 - Slot 20
 * 
 * Floor 2 - Slot 1
 * Floor 2 - Slot 2
 * ...
 * 
 * Floor 5 - Slot 20
 * ------------------------------
 * 
 * Tasks:
 *  - Use nested for loops.
 *  - Display every parking location.
 *  - Print a blank line after each floor.
 */

for(let i = 1; i <= 5; i++){
    for(let a = 1; a <= 20; a++){
        console.log(`Floor ${i} - Slot ${a}`)
    }
    console.log()
}