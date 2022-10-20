<template>
  <div>
      <div className="card mt-3">
        <h5 className="card-header">Uploaded Task🐱‍🏍</h5>
        <div className="card-body">
          <p className="card-text">
            {{todo}}
          </p>
          <button type="button" className="btn btn-primary mx-2"
          >
            {" "}
            ❌DELETE
          </button>
          <button type="button" className="btn btn-primary mx-2">
            {" "}
            EDIT 🖌
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
name:'ToDo',
props:["todo"]
}
</script>

<style>
.btn{
  background: black;
  color: white;
}

</style>