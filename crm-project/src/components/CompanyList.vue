<!-- <template>
  <v-container> -->
    <!-- Button to open the company registration form -->

    <!-- Company Registration Form Dialog -->
    <!-- <v-dialog v-model="showForm" max-width="600px">
      <v-card>
        <v-card-title>Register Company</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="registerCompany">
            <v-text-field v-model="newCompany.name" label="Company Name"></v-text-field>
            <v-text-field v-model="newCompany.description" label="Company Description"></v-text-field>
            <v-text-field v-model="newCompany.email" label="Email"></v-text-field> -->
            <!-- Add more fields as needed -->
            <!-- <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog> -->

    <!-- List of Companies -->
    <!-- <v-data-table :items="companies" :headers="headers" :items-per-page="5" hide-default-footer>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Company List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="primary" @click="showForm = true">Register Company</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </template>
      <template v-slot:item="props">
        <tr>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.description }}</td>
          <td>{{ props.item.email }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      newCompany: {
        name: '',
        email: '',
        description: '',
      },
      companies: [
        { id: 1, name: 'Company 1', email: 'company1@example.com', description: 'Description 1' },
        { id: 2, name: 'Company 2', email: 'company2@example.com', description: 'Description 2' },
        { id: 3, name: 'Company 3', email: 'company3@example.com', description: 'Description 3' },
        { id: 3, name: 'Company 4', email: 'company4@example.com', description: 'Description 4' },
        { id: 3, name: 'Company 5', email: 'company5@example.com', description: 'Description 5' },
        { id: 3, name: 'Company 6', email: 'company6@example.com', description: 'Description 6' },
        { id: 3, name: 'Company 7', email: 'company7@example.com', description: 'Description 7' },
        { id: 3, name: 'Company 8', email: 'company8@example.com', description: 'Description 8' },
        { id: 3, name: 'Company 9', email: 'company9@example.com', description: 'Description 9' },
      ],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Email', value: 'email' },
      ],
    };
  },
  methods: {
    registerCompany() {
      this.companies.push({ ...this.newCompany, id: this.companies.length + 1 });
      this.newCompany = { name: '', email: '', description: '' };
      this.showForm = false;
    },
  },
};
</script>

<style>
/* Add custom styles here */
.v-data-table__wrapper {
  margin-right: 20px; /* Adjust the margin as needed */
}
</style> -->

<template>
  <v-container>>
    <!-- Company Registration Form Dialog -->
    <v-dialog v-model="showForm" max-width="550px">
      <v-card>
        <v-card-title>Register Company</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="registerCompany">
            <v-text-field prepend-icon="mdi-registered-trademark" v-model="newCompany.name" label="Company Name"></v-text-field>
            <v-text-field prepend-icon="mdi-text-box" v-model="newCompany.description" label="Company Description"></v-text-field>
            <v-text-field prepend-icon="mdi-email" v-model="newCompany.email" label="Email"></v-text-field>
            <!-- Add more fields as needed -->
            <v-btn type="submit" color="primary">Submit</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Update Company Dialog -->
    <v-dialog v-model="showUpdateForm" max-width="550px">
      <v-card>
        <v-card-title>Update Company</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="updateCompany">
            <v-text-field v-model="updatedCompany.description" label="New Description"></v-text-field>
            <v-text-field v-model="updatedCompany.email" label="New Email"></v-text-field>
            <!-- Add more fields as needed -->
            <v-btn type="submit" color="primary">Update</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- List of Companies -->
    <v-data-table :items="companies" :headers="headers" :items-per-page="5" hide-default-footer dense>
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Company List</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn color="primary" @click="showForm = true">Register Company</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <v-row>
          <v-col v-for="header in headers" :key="header.value" style="text-align: center;">
            <strong style="margin-right: 110px;">{{ header.text }}</strong>
          </v-col>
          <v-col style="text-align: center;">
            <strong>Actions</strong>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item="props">
        <tr>
          <td style="text-align: center; padding-left: 23px; padding-right: 33px;">{{ props.item.name }}</td>
          <td style="text-align: center; padding-left: 70px;">{{ props.item.description }}</td>
          <td style="text-align: center;">{{ props.item.email }}</td>
          <td style="text-align: center;">
            <v-btn @click="deleteCompany(props.item.id)" color="error" small>Delete</v-btn>
            <v-btn @click="showUpdateDialog(props.item.id)" color="primary" small style="margin-left: 10px;">Update</v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
    <v-spacer></v-spacer> <!-- Add space between the table and the forward page button -->
  </v-container>
</template>

<script>
export default {
  name: 'company-list',
  data() {
    return {
      showForm: false,
      showUpdateForm: false,
      newCompany: {
        name: '',
        email: '',
        description: '',
      },
      updatedCompany: {
        id: null,
        description: '',
        email: '',
      },
      companies: [
        { id: 1, name: 'Company 1', email: 'company1@example.com', description: 'Description 1' },
        { id: 2, name: 'Company 2', email: 'company2@example.com', description: 'Description 2' },
        { id: 3, name: 'Company 3', email: 'company3@example.com', description: 'Description 3' },
        { id: 4, name: 'Company 4', email: 'company4@example.com', description: 'Description 4' },
        { id: 5, name: 'Company 5', email: 'company5@example.com', description: 'Description 5' },
        { id: 6, name: 'Company 6', email: 'company6@example.com', description: 'Description 6' },
        { id: 7, name: 'Company 7', email: 'company7@example.com', description: 'Description 7' },
        { id: 8, name: 'Company 8', email: 'company8@example.com', description: 'Description 8' },
        { id: 9, name: 'Company 9', email: 'company9@example.com', description: 'Description 9' },
      ],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { text: 'Email', value: 'email' },
      ],
    };
  },
  methods: {
    registerCompany() {
      this.companies.push({ ...this.newCompany, id: this.companies.length + 1 });
      this.newCompany = { name: '', email: '', description: '' };
      this.showForm = false;
    },
    deleteCompany(companyId) {
      this.companies = this.companies.filter(company => company.id !== companyId);
    },
    showUpdateDialog(companyId) {
      this.showUpdateForm = true;
      this.updatedCompany.id = companyId;
      this.updatedCompany.description = this.companies.find(company => company.id === companyId).description;
      this.updatedCompany.email = this.companies.find(company => company.id === companyId).email;
    },
    updateCompany() {
      const index = this.companies.findIndex(company => company.id === this.updatedCompany.id);
      if (index !== -1) {
        this.companies[index].description = this.updatedCompany.description;
        this.companies[index].email = this.updatedCompany.email;
      }
      this.showUpdateForm = false;
    },
  },
};
</script>

<style>
/* Add custom styles here */
.v-data-table__wrapper {
  margin-right: 80px; /* Adjust the margin as needed */
}
</style>
