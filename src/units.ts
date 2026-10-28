/** Equivalent mass reading on a scale, based on local gravitational acceleration. */
export function equivalentWeight(earthKg:number, gravity:number):number {return Math.max(0,earthKg)*Math.max(0,gravity)/9.81}
export function earthDaysFromHours(hours:number):number{return hours/24}
