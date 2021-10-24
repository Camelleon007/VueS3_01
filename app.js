const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      names: [
        { firstName: "Kamil", lastName: "Kowalski" },
        { firstName: "Max", lastName: "Kowalski" },
      ],
      superheroes: {
        firstAvenger: "Capitan America",
        strongestAvenger: "Hulk",
      },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
