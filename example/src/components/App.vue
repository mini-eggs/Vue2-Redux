<template>
  <div id="app">
    <div v-if="!username">Please enter your username</div>
    <div v-else>Your username is: {{ username }}</div>
    <input @keyup="handleUsernameChange" type="text" />
  </div>
</template>

<script>
  import { connect } from 'vue2-redux'
  import { updateUsername } from '../actions/User'

  const component = {
    name: "app-container",
    methods: {
      handleUsernameChange({ target: { value } }) {
        this.updateUsername(value)
      }
    }
  }

  const mapState = ({ User: { username } }) => ({ username })

  const mapDispatch = dispatch => ({
    updateUsername: nextUsername => dispatch(updateUsername(nextUsername))
  })

  export default connect(mapState, mapDispatch)(component)

</script>

<style>

  body {
    margin: 0;
    background-color: #f1f1f1;
  }

  #app {
    padding: 50px;
  }

  input {
    margin-top: 15px;
  }

</style>
