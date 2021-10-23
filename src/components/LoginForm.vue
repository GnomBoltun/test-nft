<template>
  <form @submit="login" class="login-form">
    <p>Логин</p>
    <div class="form__group field">
      <input v-model="username" type="input" class="form__field" placeholder="Name" name="username" id='username' required />
      <label for="username" class="form__label">Логин</label>
    </div>
    <div class="form__group field">
      <input v-model="password" type="input" class="form__field" placeholder="Name" name="password" id='password' required />
      <label for="password" class="form__label">Пароль</label>
    </div>
    <button type="submit" @click="$router.push('/store')">Войти</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginForm",
  data(){
    return{
      username:"",
      password:""
    };
  },
  methods: {
    login(event) {
      event.preventDefault();

      axios
        .post('http://51.158.175.189:8001/api/v1/auth', {'username': this.username, "password": this.password})
        .then(response => {this.setLogined(response.data.key)})
        .catch(err => {console.error(err)})



    },
    setLogined(token){
        localStorage.setItem('token', token)
    }
  }
}
</script>

<style scoped>
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 80%;

  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }
  .form__field::placeholder {
    color: transparent;
  }
  .form__field:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
  }

  /* reset input */
  .form__field:required, .form__field:invalid {
    box-shadow: none;
  }

  .login-form{
    width: 400px;
    display: flex;
    flex-direction: column;
  }
  p{
    color: white;
  }
</style>