What was the bug?

Result would parse num1 and num2 as strings and perform string concatentation.

How would you fix it?

I would apply parseInt(num1) and parseInt(num2), so the two values would perform
mathematical addition instead of string concatenation.

1. citylots.json
2. part2.js
3. 11.7 MB
4. 66 ms
5. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData