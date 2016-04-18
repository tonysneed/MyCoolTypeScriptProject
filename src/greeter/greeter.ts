export class Greeter {
    constructor(public message: string) {
    }

    greet(): string {
        return "Ciao " + this.message;
    }
}
