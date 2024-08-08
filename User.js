class User {
    construction(fulname, email, password) {
    this.fulname = fulname
    this.email = email
    this.password = password
    }
    login(email, password){ 
        if (this.email === email && this.password === password) {
            console.log('Login sucess!')
        } else {
            console.log('login failed ')
        }
    }
}
 
const user = new User('John Doe', 'john@example.com', '123456')
user.login('john@example.com', '123456')

