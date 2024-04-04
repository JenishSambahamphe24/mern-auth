import jwt from 'jsonwebtoken'

const  generateToken = (res, userId) =>{
 const token = jwt.sign({userId}, process.env.JWT_SECRET,{
    expiresIn: '30d'
 })
 res.cookie('jwt', token ,{
    httpOnly:true,
    secure:process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 30*24*60*60*1000
 })

}

export default generateToken

// The generateToken function takes two parameters:
// res: This is the HTTP response object. It's used to set the JWT as a cookie in the response.
// userId: This is the unique identifier of the user for whom the token is being generated. It's typically used to identify the user when the token is decoded and verified.
// Token Generation:

// Inside the function, the jwt.sign() method is used to generate a new JWT.
// The first parameter of jwt.sign() is an object containing the payload or claims that will be encoded into the token. In this case, { userId } is used as the payload, where userId is the unique identifier of the user.
// The second parameter is the secret key used to sign the token. It's important to keep this secret key secure and not expose it publicly.
// The third parameter is an options object that includes configuration settings for the token. In this case, the token is set to expire in 30 days (expiresIn: '30d').
// Setting the Token as a Cookie:

// After generating the token, the function sets it as a cookie in the HTTP response using res.cookie().
// The res.cookie() method takes three parameters:
// The name of the cookie (jwt in this case).
// The value of the cookie (the generated JWT).
// An options object specifying additional attributes of the cookie, such as httpOnly, secure, sameSite, and maxAge.
// httpOnly: Ensures that the cookie is only accessible via HTTP/S requests and cannot be accessed by client-side JavaScript, enhancing security.
// secure: Indicates whether the cookie should only be sent over HTTPS. It's typically set to true in production environments and false in development environments.
// sameSite: Specifies the SameSite attribute of the cookie to prevent cross-site request forgery (CSRF) attacks.
// maxAge: Sets the maximum age of the cookie in milliseconds.