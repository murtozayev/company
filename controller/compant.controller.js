import compService from "../service/comp.service.js";

class CompanyController {
  async addCompany(req, res, next) {
    try {
      const { name, count } = req.body;

      const data = await compService.create(name, count, req.user.id);

      return res.json(data);
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const data = await compService.getAll(req.user.id);

      return res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async getOne(req, res, next) {
    try {
      const data = await compService.getOne(req.params.id);

      return res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {

        const {name, count} = req.body
      const data = await compService.update(req.params.id, name, count);

      return res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await compService.delete(req.params.id);

      return res.json({ message: "Item removed successfully" });
    } catch (error) {
      next(error);
    }
  }
}

export default new CompanyController();
