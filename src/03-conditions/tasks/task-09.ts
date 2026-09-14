/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

const powered:boolean=true
const temperature:number=95
const vibration:boolean=false
const speed:number=92

if(powered===true){
    if(temperature>90){
        if(vibration==false){
            console.log("Cooling Required")
        }else{
            console.log("Emergency Shutdown")
        }
    }else if(temperature<90){
        if(speed<80){
            console.log("Performance Warning")
        }else{
            console.log("Machine Operating Normally")
        }
    }
}else{
    console.log("Offline")
}