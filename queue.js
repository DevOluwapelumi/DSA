class queue {
    constructor () {
        this.all = []
    }
    enqueue(student) {
        this.all.push(student)
    }
    dequeue() {
        this.all.shift()
    }
}

let q1 = new Queue()
q1.enqueue('Jawad')
q1.enqueue('Jawad')
q1.enqueue('Jawad')
q1.dequeue()