/**
 * Newton's Forward Difference Interpolation
 */
class NewtonForwardInterpolation {
    /**
     * Calculate factorial of a number
     * @param {number} n 
     * @returns {number}
     */
    static factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    /**
     * Calculate the forward difference table
     * @param {number[]} yValues 
     * @returns {number[][]} - Forward difference table
     */
    static getForwardDifferenceTable(yValues) {
        const n = yValues.length;
        const table = [yValues];
        
        for (let i = 1; i < n; i++) {
            const previousDifferences = table[i - 1];
            const currentDifferences = [];
            
            for (let j = 0; j < n - i; j++) {
                currentDifferences.push(previousDifferences[j + 1] - previousDifferences[j]);
            }
            
            table.push(currentDifferences);
        }
        
        return table;
    }

    /**
     * Perform Newton's forward interpolation
     * @param {number[]} xValues - Equally spaced x values
     * @param {number[]} yValues - Corresponding y values
     * @param {number} x - Point to interpolate at
     * @returns {number} - Interpolated value at x
     */
    static interpolate(xValues, yValues, x) {
        if (xValues.length !== yValues.length) {
            throw new Error("xValues and yValues must have the same length");
        }
        
        const n = xValues.length;
        const h = xValues[1] - xValues[0]; // Step size
        
        // Calculate forward difference table
        const diffTable = this.getForwardDifferenceTable(yValues);
        
        // Calculate u = (x - x0) / h
        const u = (x - xValues[0]) / h;
        
        let result = yValues[0];
        let productTerm = 1;
        
        for (let i = 1; i < n; i++) {
            productTerm *= (u - (i - 1));
            result += (productTerm * diffTable[i][0]) / this.factorial(i);
        }
        
        return result;
    }
}

// Example usage:
const xValues = [1950, 1960, 1970, 1980, 1990];
const yValues = [151326, 179323, 203302, 226542, 249633];

// Interpolate population for 1975
const x = 1975;
const interpolatedValue = NewtonForwardInterpolation.interpolate(xValues, yValues, x);
console.log(`Interpolated value at x = ${x}: ${interpolatedValue}`);