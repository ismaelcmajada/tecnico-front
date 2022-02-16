<template>
    <p>Ventas</p>
</template>

<script>
import axios from 'axios'

export default {
    async created() {
      try {
        const response = await axios.get("http://localhost:3000/api/stores")

        console.log(response.data)

      } catch (error) {
        console.log(error)
      }
    }
}

</script>