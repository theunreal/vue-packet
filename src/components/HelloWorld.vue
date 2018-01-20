<template>
  <ul>
    <li v-for="iface in interfaces" v-bind:key="iface.name">
      {{ iface.name }}
      <ul>
        <li v-for="adr of iface.addresses" v-bind:key="adr" v-on:click="pickInterface(adr)">
          {{ adr }}
        </li>
      </ul>
    </li>
  </ul>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      interfaces: []
    }
  },
  created: function () {
    this.loadInterfaces()

    this.$io.socket.on('message', (msg) => {
      console.log(msg)
    })
  },
  methods: {
    loadInterfaces: function () {
      this.$http.get('http://localhost:1337/apps/interfaces')
        .then(data => {
          console.log(data)
          this.interfaces = data.body
        }, response => {
          console.log(response)
        })
    },

    pickInterface: function (adr) {
      console.log(adr.addr)
      this.$http.post('http://localhost:1337/apps/collect', {
        iface: adr.addr,
        port: 443
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
