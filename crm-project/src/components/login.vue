<!-- src/components/login.vue -->
     
<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12" style="width: 400px;">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @submit.prevent="handleSubmit">
              <!-- Email and password inputs -->
              <v-text-field v-model="email" label="Email" outlined required></v-text-field>
              <v-text-field v-model="password" label="Password" outlined required type="password"></v-text-field>
              <v-alert v-if="passwordError" type="error" outlined>{{ passwordError }}</v-alert>
              <!-- Remove the capture button and trigger picture capture on login button click -->
              <v-btn type="submit" color="primary" block>Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <div style="width: 320px; height: 240px;">
          <!-- Webcam component -->
          <video ref="video" width="320" height="240" autoplay></video>
          <!-- <button @click="takePicture" class="capture-button">Take Picture</button> -->
          <!-- Display taken picture -->
          <img v-if="userProfilePicture" :src="userProfilePicture" alt="User Picture" style="width: 320px; height: 240px;">
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useRouter } from 'vue-router';
import dashboardVue from './dashboard.vue';

export default {
  data() {
    return {
      email: '',
      password: '',
      passwordError: '',
      userProfilePicture: null,
      stream: null,
      router: useRouter(),
    };
  },
  mounted() {
    // Access webcam stream
    this.accessWebcam();
  },
  methods: {
    async accessWebcam() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    },
    async takePicture() {
      try {
        if (this.stream) {
          const canvas = document.createElement('canvas');
          canvas.width = 320;
          canvas.height = 240;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(this.$refs.video, 0, 0, canvas.width, canvas.height);
          const picture = canvas.toDataURL('image/png');
          // Store the picture in local storage or perform other actions
          localStorage.setItem('userPicture', picture);
          this.userProfilePicture = picture;
          console.log('Picture captured and stored in local storage');
        }
      } catch (error) {
        console.error('Error capturing picture:', error);
      }
    },
    handleSubmit() {
      // Mock API authentication
      if (this.email === 'a@gmail.com' && this.password === '1234') {
        // Mock user data
        const user = {
          id: 1,
          name: 'John Doe',
          email: 'a@gmail.com',
          // Mock profile picture URL
          profilePicture: 'https://via.placeholder.com/150'
        };

        this.passwordError = '';

        // Store user data in local storage
        localStorage.setItem('user', JSON.stringify(user));

        // Automatically take a picture when the login button is clicked
        this.takePicture();

        // Redirect or perform any other action upon successful login
        console.log('Logged in successfully');

        // Redirect to the dashboard
        this.router.push({ name: "dashboard" });

        console.log(this.router);
      } else {
        // Display password error if authentication fails
        this.passwordError = 'Invalid email or password';
      }
    }
  },
  beforeDestroy() {
    // Release webcam stream when component is destroyed
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }
};
</script>

<style scoped>
.fill-height {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
