<template>
  <div>
    <v-list>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="service" color="primary">
        <v-list-item v-for="(service, id) in services" :key="id" @click="true">
          <v-list-item-content>
            <v-list-item-title v-text="service[0]"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-list nav>
      <v-list-group no-action value="true" active-class="primary" color="white">
        <template v-slot:activator>
          <v-list-item-title>Services</v-list-item-title>
        </template>

        <v-list-item
          class="list"
          v-for="(service, id) in services"
          :key="id"
          :href="'/service/' + service[1]"
          no-action
          color="red"
        >
          <v-list-item-title v-text="service[0]"></v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group no-action active-class="primary" color="white">
        <template v-slot:activator>
          <v-list-item-title>Solutions</v-list-item-title>
        </template>
        <v-list-item
          v-for="(solution, id) in solutions"
          :key="id"
          :href="'/solution/' + solution[1]"
        >
          <v-list-item-title v-text="solution[0]"></v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item-group>
        <v-list-item
          @click="true"
          no-action
          active-class="primary"
          color="white"
        >
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="true" active-class="primary" color="white">
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item
        @click="true"
        href="/about"
        active-class="primary"
        color="white"
      >
        <v-list-item-title>About</v-list-item-title>
      </v-list-item>
      <v-list-item
        @click="true"
        href="/contact"
        active-class="primary"
        color="white"
      >
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    drawer: false,
    styleCheck_service: "block",
    services: [
      ["Artificail Intelligence", "ai"],
      ["IOT Development", "iot"],
      ["Blockchain Development", "blockchain"],
      ["Cloud Computing", "cc"],
      ["RPA Support", "rpa"],
      ["PWA Development", "pwa"],
      ["VR/AR Development", "arvr"],
      ["Odoo ERP Customize", "odoo"]
    ],
    solutions: [
      ["Artificail Intelligence", "ai"],
      ["IOT Development", "iot"],
      ["Blockchain Development", "blockchain"],
      ["Cloud Computing", "cc"],
      ["RPA Support", "rpa"],
      ["PWA Development", "pwa"],
      ["VR/AR Development", "arvr"],
      ["Odoo ERP Customize", "odoo"]
    ]
  })
};
</script>

<style lang="sass" scoped>
.v-list-item--dense .v-list-item__title, .v-list-item--dense .v-list-item__subtitle, .v-list--dense .v-list-item .v-list-item__title, .v-list--dense .v-list-item .v-list-item__subtitle
  font-size: 18px
  font-weight: normal
.v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item
  padding-left: 25px !important
</style>
