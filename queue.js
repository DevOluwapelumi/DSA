class Queue {
    constructor() {
        this.all = [];
        this.size = this.all.length
    }
    enqueue(student) {
        this.all.push(student);
    }
    dequeue() {
        if (!this.isEmpty()) {
            return this.all.shift();
        } else {
            return "Queue is empty";
        }
    }
    isEmpty() {
        return this.all.length === 0;
    }
    front() {
        return this.all[0];
}
    size() {
        return this.all.length;
    }
}

let q1 = new Queue();
q1.enqueue('Pelumi');
q1.enqueue('Jawad');
q1.enqueue('Esther');
q1.dequeue();
q1.isEmpty();
q1.front();
console.log(q1);
