Authentication - back end authentication boilerplate notes

- Start PostgreSQL database 
- To create user
    -   POST request to http://localhost:3001/signup
    -   example:
        -   { email: "test@gmail.com", password: "test" }
        -   Success will create user record on database and assign user token for future auth
        -   Fail will prompt error "User already exists"
- Signing in
    -   POST request to http://localhost:3001/signin
    -   example:
        -   { email: "test@gmail.com", password: "test" }
        -   Success will assign user token for future auth
- Visiting when authenticated
    -   GET request to http://localhost:3001/ (root)
        - Access allowed if header of 'authorization' contains a token
        - Access denied otherwise