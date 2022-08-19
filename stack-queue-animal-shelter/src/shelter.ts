interface Animal {
  name: string;
  type: "cat" | "dog";
}

export class Shelter {
  private animals: Animal[] = [];

  enqueue(name: string, type: "cat" | "dog"): void {
    const newAnimal: Animal = {
      name: name,
      type: type,
    };
    this.animals.push(newAnimal);
  }

  dequeue(type?: "cat" | "dog"): string {
    // If no type is given (type === undefined), return the next animal.
    if (!type) {
      const animal = this.animals.shift();
      if (!animal) {
        throw new Error("dequeuing from an empty shelter 1");
      }
      return animal.name;
    }
    let found: string | undefined;
    // If the type is given, return the next animal of a type.
    this.animals.forEach((animal, index) => {
      if (animal.type === type && !found) {
        console.log(index, animal, "gotem");
        this.animals.splice(index, 1);
        found = animal.name;
      }
    });
    if (found) {
      return found;
    }
    throw new Error("dequeuing from an empty shelter 2");
  }
}
