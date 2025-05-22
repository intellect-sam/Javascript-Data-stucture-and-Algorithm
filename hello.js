function fibonanci (n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib
}

console.log(fibonanci(0))

// Big-0 = O(n)
// Space complexity = O(n)
// Time complexity = O(n)