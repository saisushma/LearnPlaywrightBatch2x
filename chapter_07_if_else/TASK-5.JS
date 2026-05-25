/*uestion 5 — Login Lockout After Failed Attempts

Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful */

let login_attempt = 4;
if(login_attempt ===0)
{
   console.log("Login successful");
}
else if(login_attempt == 2)
{
    console.log("1 attempt left before lockout");
}
else 
{
    console.log("🔒 Account Locked — Contact support");
}