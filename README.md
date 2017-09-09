# Vue2 Redux

<img src="https://raw.githubusercontent.com/mini-eggs/Vue2-Redux/master/logo/logo-variation-2.png" alt="" data-canonical-src="https://raw.githubusercontent.com/mini-eggs/Vue2-Redux/master/logo/logo-variation-2.png" width="250" />

`npm install vue2-redux --save`

#### Setup in project

```javascript
import Vue from "vue";
import { VueRedux } from "vue2-redux";
import App from "./components/App.vue";
/**
 * Your redux store is exported here like
 * so: `export default createStore( combineReducers( ... ) )`.
 */
import Store from "./store";

Vue.use(VueRedux(Store));

new Vue({
  el: "#app",
  render: h => h(App)
});
```

#### Using in a component

```html
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

  const mapState = state => ({
    username: state.User.username
  })

  const mapDispatch = dispatch => ({
    updateUsername: nextUsername => dispatch(updateUsername(nextUsername))
  })

  export default connect(mapState, mapDispatch)(component)

</script>
```

#### Special note

This WILL NOT work if your .babelrc has:
```json
{
  "presets": [["env"], { "modules": false }]
}
```

This MUST BE changed to:
```json
{
  "presets": [["env"]]
}
```