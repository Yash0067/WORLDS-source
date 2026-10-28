import {describe,it,expect} from 'vitest';import {equivalentWeight,earthDaysFromHours} from './units';
describe('unit calculations',()=>{it('converts weight by gravity',()=>{expect(equivalentWeight(70,9.81)).toBeCloseTo(70);expect(equivalentWeight(70,1.62)).toBeCloseTo(11.56,1)});it('converts hours to days',()=>expect(earthDaysFromHours(48)).toBe(2))});
