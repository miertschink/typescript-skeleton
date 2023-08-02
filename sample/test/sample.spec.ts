import {describe, expect, it, test} from "@jest/globals";
import {calculateRentalCost} from "../milesCalculator";

describe('calculateRentalCost_function', () => {

    // Tests that rental cost is calculated correctly with valid rental days and km
    it('test_happy_path_valid_rental_days_and_km', () => {
        const rentalDays = 3;
        const rentalKm = 100;
        const pass = {
            unlockFeeDiscount: 0,
            rateDiscount: 0,
            extraKmDiscount: 0
        };
        const result = calculateRentalCost(rentalDays, rentalKm, pass);
        expect(result.bestRate.days).toBe(3);
        expect(result.bestRate.km).toBe(100);
        expect(result.bestRate.cost).toBe(45);
        expect(result.finalCostsForBestRateWithTopUp).toBe(46.35);
        expect(result.finalCostsForBestRate).toBe(46.35);
        expect(result.costsForBestRate).toBe(45);
        expect(result.extraKmForBestRate).toBe(0);
        expect(result.costsForExtraKmForBestRate).toBe(0);
    });

    // Tests that rental cost is calculated correctly with valid rental days and km and useTopUp=true
    it('test_happy_path_valid_rental_days_and_km_with_top_up', () => {
        const rentalDays = 3;
        const rentalKm = 100;
        const pass = {
            unlockFeeDiscount: 0,
            rateDiscount: 0,
            extraKmDiscount: 0
        };
        const result = calculateRentalCost(rentalDays, rentalKm, pass, true);
        expect(result.bestRate.days).toBe(3);
        expect(result.bestRate.km).toBe(100);
        expect(result.bestRate.cost).toBe(45);
        expect(result.finalCostsForBestRateWithTopUp).toBe(39.385);
        expect(result.finalCostsForBestRate).toBe(46.35);
        expect(result.costsForBestRate).toBe(45);
        expect(result.extraKmForBestRate).toBe(0);
        expect(result.costsForExtraKmForBestRate).toBe(0);
    });

    // Tests that rental cost is calculated correctly with valid rental days and km and MilesPass
    it('test_happy_path_valid_rental_days_and_km_with_miles_pass', () => {
        const rentalDays = 3;
        const rentalKm = 100;
        const pass = {
            unlockFeeDiscount: 10,
            rateDiscount: 5,
            extraKmDiscount: 2
        };
        const result = calculateRentalCost(rentalDays, rentalKm, pass);
        expect(result.bestRate.days).toBe(3);
        expect(result.bestRate.km).toBe(100);
        expect(result.bestRate.cost).toBe(45);
        expect(result.finalCostsForBestRateWithTopUp).toBe(46.35);
        expect(result.finalCostsForBestRate).toBe(46.35);
        expect(result.costsForBestRate).toBe(40.5);
        expect(result.extraKmForBestRate).toBe(0);
        expect(result.costsForExtraKmForBestRate).toBe(0);
    });

    // Tests that rental cost is calculated correctly with valid rental days and km and MilesPass and useTopUp=true
    it('test_happy_path_valid_rental_days_and_km_with_miles_pass_and_top_up', () => {
        const rentalDays = 3;
        const rentalKm = 100;
        const pass = {
            unlockFeeDiscount: 10,
            rateDiscount: 5,
            extraKmDiscount: 2
        };
        const result = calculateRentalCost(rentalDays, rentalKm, pass, true);
        expect(result.bestRate.days).toBe(3);
        expect(result.bestRate.km).toBe(100);
        expect(result.bestRate.cost).toBe(45);
        expect(result.finalCostsForBestRateWithTopUp).toBe(39.385);
        expect(result.finalCostsForBestRate).toBe(46.35);
        expect(result.costsForBestRate).toBe(40.5);
        expect(result.extraKmForBestRate).toBe(0);
        expect(result.costsForExtraKmForBestRate).toBe(0);
    });

    // Tests that rental cost is not calculated with rental days greater than the maximum allowed
    it('test_edge_case_rental_days_greater_than_maximum_allowed', () => {
        const rentalDays = 31;
        const rentalKm = 100;
        const pass = {
            unlockFeeDiscount: 0,
            rateDiscount: 0,
            extraKmDiscount: 0
        };
        const result = calculateRentalCost(rentalDays, rentalKm, pass);
        expect(result.bestRate.days).toBe(3);
        expect(result.bestRate.km).toBe(100);
        expect(result.bestRate.cost).toBe(45);
        expect(result.finalCostsForBestRateWithTopUp).toBe(Infinity);
        expect(result.finalCostsForBestRate).toBe(Infinity);
        expect(result.costsForBestRate).toBe(0);
        expect(result.extraKmForBestRate).toBe(0);
        expect(result.costsForExtraKmForBestRate).toBe(0);
    });

    // Tests that rental cost is not calculated with rental km greater than the maximum allowed
    it('test_edge_case_rental_km_greater_than_maximum_allowed', () => {
        const rentalDays = 3;
        const rentalKm = 1001;
        const pass = {
            unlockFeeDiscount: 0,
            rateDiscount: 0,
            extraKmDiscount: 0
        };
        const result = calculateRentalCost(rentalDays, rentalKm, pass);
        expect(result.bestRate.days).toBe(3);
        expect(result.bestRate.km).toBe(100);
        expect(result.bestRate.cost).toBe(45);
        expect(result.finalCostsForBestRateWithTopUp).toBe(Infinity);
        expect(result.finalCostsForBestRate).toBe(Infinity);
        expect(result.costsForBestRate).toBe(0);
        expect(result.extraKmForBestRate).toBe(0);
        expect(result.costsForExtraKmForBestRate).toBe(0);
    });

});
