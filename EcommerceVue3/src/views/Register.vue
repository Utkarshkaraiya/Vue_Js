<template>
    <div>
        <form @submit.prevent="registeruser">
            <div class="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
                  <label for="Username">
                    <b>Username</b>
                </label>
                <input
                    type="text"
                    v-model="username"
                    placeholder="Enter Username"
                    name="Username"
                    id="Username"
                    required
                >

                <label for="email">
                    <b>Email</b>
                </label>
                <input
                    type="text"
                    v-model="email"
                    placeholder="Enter Email"
                    name="email"
                    id="email"
                    required
                >

                    <label for="psw">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        v-model="password"
                        placeholder="Enter Password"
                        name="psw"
                        id="psw"
                        required
                    >

                        <label for="psw-repeat">
                            <b>Repeat Password</b>
                        </label>
                        <input
                            type="password"
                            v-model="password2"
                            placeholder="Repeat Password"
                            name="psw-repeat"
                            id="psw-repeat"
                            required
                        >
                            <hr>

                            <p>By creating an account you agree to our
                                <a href="#">Terms & Privacy</a>.</p>
                            <button
                                type="submit"
                                class="registerbtn"
                            >Register</button>
            </div>

            <div class="container signin">
                <p>Already have an account?
                    <a href="#">Sign in</a>.</p>
            </div>
        </form>
    </div>
</template>
// <script>
// export default {
//   name: "Register",
//   data() {
//     return {
//       email: "",
//       password: "",
//       password2: "",
//       users: []
//     };
//   },
//   methods: {
//     registeruser() {
//       let user = {
//         email: this.email,
//         password: this.password,
//         password2: this.password2
//       };
//       console.log(user);
//       if(localStorage.users){
//           let isusers=localStorage.users;
//           this.users=JSON.parse(isusers)
//       }
//       this.users.push(user);
//       localStorage.setItem("users", JSON.stringify(this.users));
//       this.email="", this.password="", this.password2="";
//       this.$router.push("/Login")
//     }
//   }
// };
// </script>
<script>

export default {
   name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      // errors: {},
      users: [],
    };
  },
  methods: {
    registeruser() {
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        password2: this.password2,
      };
      // const { isInvalid, errors } = validateRegisterInput(user);
      // if (isInvalid) {
      //   this.errors = errors;
      // } else 
        // this.errors = {};
        // store user in local storage
        if (localStorage.users) {
          let lsUsers = localStorage.users;
          this.users = JSON.parse(lsUsers);
        }
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
        this.username = "";
        this.email = "";
        this.password = "";
        this.password2 = "";
        this.$router.push("/login");
      
    },
  },
};
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: black;
}

* {
  box-sizing: border-box;
}

/* Add padding to containers */
.container {
  padding: 16px;
  background-color: white;
}

/* Full-width input fields */
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Overwrite default styles of hr */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

/* Set a style for the submit button */
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}

/* Set a grey background color and center the text of the "sign in" section */
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
