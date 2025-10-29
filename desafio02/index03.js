class TaskItem {
  showDetails() {
    throw new Error("Método abstrato!");
  }
}

class Task extends TaskItem {
  constructor(name) {
    super();
    this.name = name;
  }

  showDetails(indent = "") {
    console.log(`${indent}Tarefa: ${this.name}`);
  }
}

class Project extends TaskItem {
  constructor(name) {
    super();
    this.name = name;
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  showDetails(indent = "") {
    console.log(`${indent}Projeto: ${this.name}`);
    this.tasks.forEach((task) => task.showDetails(indent + "  "));
  }
}

const t1 = new Task("Escrever documentação");
const t2 = new Task("Fazer testes");
const p = new Project("Lançamento v1.0");
p.add(t1);
p.add(t2);

p.showDetails();

