type typeForOmit = {
  name: "string";
  age: "number";
};

interface IUser {
  name: string;
  date: string;
  age: number;
  plus: null;
}

type Union = "fade" | "swipe";

type typeWithoutName = Omit<typeForOmit, "name">;

type PicKtype = Pick<typeForOmit, "name">;

type ExcludeTypes = Exclude<Union, "swipe">;

type newUser = Pick<IUser, "name">;

type Rec = Required<IUser>;

type Par = Partial<IUser>;

type RecordingType = Record<Union, IUser>;

type NoneNull = NonNullable<IUser>;

// ! type guards
interface ErrorReposnse {
  status: number;
  statusText: string;
  message: string;
}

function isError(values: unknown): values is ErrorReposnse {
  return (
    typeof values === "object" &&
    values !== null &&
    "status" in values &&
    "statusText" in values &&
    "message" in values
  );
}

interface Car {
  engine: string;
  whels: string;
}

interface Ship {
  engien: string;
  turbine: string;
}

function repairVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    return vehicle.whels;
  } else {
    return vehicle.turbine;
  }
}

function isCar(params: Car | Ship): params is Car {
  return "whels" in params;
}

// ! type guards

// * generic
interface PrintUK {
  design: number;
}

interface PrintEs {
  design: string;
}

interface Print<T> {
  design: T;
}

function print<T>(x: Print<T>): T {
  console.log(x);
  return x.design;
}

interface DataSaver {
  // processing: typeof print;
  processing: ReturnType<typeof print>;
}

// * generic
