<template>
  <div class="form__group field">
    <input type="{{type}}" class="form__field" placeholder="{{placeholder}}" name="{{name}}" id="{{id}}" required />
    <label for="{{id}}" class="form__label">{{ label }}</label>
  </div>
</template>
<script>
  export default {
    name: "MyInput",
    props: {
      type: String,
      placeholder: String,
      id: String,
      name: String,
      label: String
    }
  }
</script>
<style scoped>
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
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
</style>