const generateId = () => Date.now() * Math.random()

class User {
  id: number
  userName: string
  password: string

  constructor(userName: string, password: string) {
    this.id = generateId()
    this.userName = userName
    this.password = password
  }
}

class UserRepository {
  save(user: User) {
    // save data
  }
}

class UserLogger {
  log(user: User) {
    console.log(user)
  }
}

class UserController {
  send(user: User) {
    // send data
  }
}
