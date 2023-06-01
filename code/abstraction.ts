interface EmployeeOptions {
  name: string;
  hourlyWage: number;
}

export class Employee {
  public name: string;
  public hourlyWage: number = 20;
  public createdAt = new Date();
  constructor({ name, hourlyWage }: EmployeeOptions) {
    this.name = name;
    this.hourlyWage = hourlyWage;
  }
  getPay(hours: number) {
    if (hours < 5) {
      return 0;
    }
    return hours * this.hourlyWage;
  }
}

const tyler = new Employee({
  name: "Tyler",
  hourlyWage: 20.1,
});

tyler.getPay(30);
