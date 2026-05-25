/*Question 4 — Build Health Reporter

Problem: Given the percentage of test cases passed in a CI build, report build health.

100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)
Sample Input/Output:

Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment*/

let pass = 60;

 if(pass=== 100)
{
    console.log("Green build");
}
else if(pass>=90 && pass<=99)
{
    console.log("🟡 Stable — Investigate failures ");
}
else if(pass>=70 && pass<=89)
{
    console.log("🟡UNSTABLE ");
}
else
{
    console.log("🔴 Broken Build — Block deployment ");
}