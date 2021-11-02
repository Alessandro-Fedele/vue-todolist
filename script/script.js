Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        toDoList: ["Comprare un pinguino", "Guardare il soffitto",],
        newTask: "",
    },
    methods: {
        addTaskBtn()
        {
            // se la stringa è vuota? trim leva gli spazi
            if (this.newTask.trim() === "") {
                alert("Non hai niente da fare?");
                return;
            }
            // la task esiste già?
            const sameEl = this.toDoList.find(el =>
            {
                return el.toLowerCase() === this.newTask.trim().toLowerCase();
            });
            // se lo trova
            if (sameEl) {
                alert("Hai già questo elemento nella tua ToDoList!");
                this.newTask = "";
                return;
            }
            // se non ci sono doppioni
            this.toDoList.push(this.newTask);
            // svuoto il campo
            this.newTask = "";
        },
        deleteTask(index)
        {
            this.toDoList.splice(index, 1);
        }
    }
});