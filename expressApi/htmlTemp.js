const  registerUserHtmlTem = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
</head>
<body>
    <h1>ENTER YOUR INFO</h1>
    <form action="/register" method="post">
        <label for="Fname">Enter Name</label>
        <br>
        <input type="text" name="Fname">
        <br>
        <br>
        <label for="password">ENTER Password</label>
        <br>
        <input type="password" name="password">
        <br>
        <br>
        <label for="YourEmail">ENTER YOUR EMAIL</label>
        <br>
        <input type="email" name="email">
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>    
</body>
</html>
`

const loginUserHtmlTem = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
</head>
<body>
    <h1>ENTER YOUR INFO</h1>
    <form action="/login" method="post">
        <label for="Fname">Enter Name</label>
        <br>
        <input type="text" name="Fname">
        <br>
        <br>
        <label for="password">ENTER Password</label>
        <br>
        <input type="password" name="password">
        <br>
        <br>
        <button type="submit">Submit</button>
    </form>    
</body>
</html>
`

export default {registerUserHtmlTem, loginUserHtmlTem}