import { setSeederFactory } from "typeorm-extension";
import Customer from "./../customerModel";

// https://github.com/tada5hi/typeorm-extension

export default setSeederFactory(Customer, (faker) => {
  const p = new Customer();
  p.customerId = 12;
  p.customerName = "test";
  p.description = "base project";
  return p;
});
