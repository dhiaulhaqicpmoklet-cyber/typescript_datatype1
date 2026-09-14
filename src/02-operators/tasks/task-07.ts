/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */


const price:number=650000
const nights:number=4
const service:Number=120000
const tax:number= 11/100
const vIP:boolean=true

const subtotal:number=price*nights
const discount:number=subtotal-(subtotal*12/100)
const ax:number= (discount*tax)+discount
const final:number= ax + 120000

console.log(price)
console.log(nights)
console.log(service)
console.log("11%")
console.log(vIP)
console.log(final)
if(nights>=3){
    console.log("free breakfast")
}else{
    console.log("no free breakfast")
}