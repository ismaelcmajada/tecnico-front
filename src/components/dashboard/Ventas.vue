<template>
    <p>Ventas</p>
</template>

<script>
import axios from 'axios'

export default {
    async created() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/api/stores`)

        console.log(response.data)

      } catch (error) {
        console.log(error)
      }
    }
}

</script>