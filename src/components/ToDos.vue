<template>
  <div className="container mt-3">
    <form action="">
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="floatingTextarea"
          v-model="myInput"
        ></textarea>
        <label htmlFor="floatingTextarea"> ✅Write your Todos here!!</label>
      </div>
      <div className="container">
        <button
          :disabled="!myInput"
          v-on:click="clicked"
          class="btn btn-dark"
        >
          ADD TODO
        </button>
      </div>
    </form>
    <div className="container mt-5">
      <h3 class="todo_heading">Your Todos:</h3>
      <div class="To_Do" >
        <ToDo v-for="todo in todos" :key="todo" :todo='todo'/>
      </div>
    </div>
  </div>
</template>

<script>
import ToDo from "./ToDo.vue";
import db from "../../firebase.js";
import firebase from "firebase/compat/app";
export default {
  data() {
    return {
      myInput: "",
      todos: [],
    };
  },
  methods: {
    clicked(event) {
      event.preventDefault();
      db.collection('Todos').add({
        todo:this.myInput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      this.myInput=''
    },
  },
  mounted() {
    db.collection("Todos").onSnapshot((snapshot) => {
      this.todos = snapshot.docs.map((doc) => doc.data().todo);
    });
  },
  components: { ToDo },
  props:{
    
  }
};
</script>

<style>
.todo_heading {
  font-size: x-large;
  font-family: cursive;
  color: crimson;
}
.To_Do {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.btn{
  background: black;
  color: white;
}
</style>