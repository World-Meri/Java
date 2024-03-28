class Patient {
    constructor(f, i, o, d, s, sh) {
        this.F = f;
        this.I = i;
        this.O = o;
        this.D = new Date(d);
        this.S = s;
        this.SH = sh;
    }
    setById() {
        document.getElementById("F").textContent = this.F;
        document.getElementById("I").textContent = this.I;
        document.getElementById("O").textContent = this.O;
        document.getElementById("Y").textContent = this.D.getFullYear();
        document.getElementById("S").textContent = this.S;
        document.getElementById("SH").textContent = this.SH;
    }
}
let Ivanov = new Patient('Иванов', 'Иван', 'Иванович', new Date(1989, 6, 18), "м", "назначено");
Ivanov.setById();
let Petrov = new Patient('Петров', 'Антон', 'Владимирович', new Date(1976, 11, 21), "м", "отказано");
Petrov.setById();
let Sidorov = new Patient('Сидоров', 'Михаил', 'Анатольевич', new Date(2003, 4, 5), "м", "выполнено");
Sidorov.setById();