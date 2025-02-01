import BaseError from "../error/base.error.js";
import { COMPANY } from "../models/company.model.js";

class CompService {
  async create(name, count, author) {
    if (!name || !count) {
      throw BaseError.BadRequest("Data is not full try again");
    }

    const newComp = COMPANY.create({ name, count, author });

    return newComp;
  }

  async getAll(author) {
    return await COMPANY.find({ author });
  }

  async getOne(id) {
    return await COMPANY.findById(id);
  }

  async update(id, name, count) {
    return await COMPANY.findByIdAndUpdate(id, { name, count }, { new: true });
  }

  async delete(id) {
    return await COMPANY.findByIdAndDelete(id);
  }
}

export default new CompService();
