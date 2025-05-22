const fibonanci = (n) => {
    const fib = [0, 1] 

    for (let i = 2; i < n;  i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }

    return fib
}

console.log(fibonanci(5))

// Big-0 = 0(n) this means that the time it takes to run the function increases linearly with the size of the input
// Space complexity = O(n) this means that the amount of memory used by the function increases linearly with the size of the input
// Time complexity = O(n) this means that the time it takes to run the function increases linearly with the size of the input