import axios from "axios";
import { defineStore } from "pinia";

interface Users {
  id: number;
  name: string;
  username: string;
  phone: number;
  email: string;
  address: Address;
  company: Company;
  website: string;
}

type Company = {
  name: string;
};

type Address = {
  city: string;
  zipcode: string;
  suite: string;
  street: string;
};

export const useStore = defineStore("main", {
  state: () => ({
    isLight: true,
    isDark: false,
    users: [] as Users[],
  }),
  actions: {
    async fetchUser() {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.users = response.data;
    },
  },
});
