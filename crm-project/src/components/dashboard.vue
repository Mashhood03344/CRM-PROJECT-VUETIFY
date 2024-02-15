<!-- <template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      > -->
         <!-- <v-list-item>
          <div style="display: flex; align-items: center;"> -->
            <!-- Use your imported logo image here -->
              <!-- <v-img src="@/assets/logojpg.jpg" width="40" height="40" style="margin-right: 7px;"></v-img>
            <v-list-item-title> { PF } Private Ltd.</v-list-item-title>
          </div> -->

          <!-- <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item> 

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-domain" title="Company" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-link" title="Company Link" value="account"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
  }
</script> -->





<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item>
          <div style="display: flex; align-items: center;">
            <!-- Use your imported logo image here -->
            <v-img src="@/assets/logojpg.jpg" width="40" height="40" style="margin-right: 7px;"></v-img>
            <v-list-item-title>{ PF } Private Ltd.</v-list-item-title>
          </div>

          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item> 

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item @click="selected = 'home'" prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item @click="selected = 'company'" prepend-icon="mdi-domain" title="Company"></v-list-item>
          <v-list-item @click="selected = 'companyLink'" prepend-icon="mdi-link" title="Company Link"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-card>
          <v-card-title>Welcome to the Dashboard</v-card-title>
          <v-card-text>
            <div v-if="selected === 'home'"></div>
            <div v-else-if="selected === 'company'">
              <CompanyList />
            </div>
            <div v-else-if="selected === 'companyLink'">Company Link Component</div>
          </v-card-text>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import CompanyList from './CompanyList.vue';

export default {
  name: 'dashboard',
  components: {
    CompanyList
  },
  data() {
    return {
      drawer: true,
      rail: true,
      selected: 'home' // Default selection
    };
  }
};
</script>
