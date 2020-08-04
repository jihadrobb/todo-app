const { Todo } = require("../models");
class Controller {
  static add(req, res, next) {
    const newTodo = {
      title: req.body.title,
      description: req.body.description,
      due_date: req.body.due_date,
    };
    Todo.create(newTodo)
      .then((data) => res.status(201).json(data))
      .catch((err) => next(err));
  }
  static showAll(req, res, next) {
    Todo.findAll()
      .then((data) => res.status(200).json(data))
      .catch((err) => next(err));
  }
  static showOne(req, res, next) {
    Todo.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        if (!data) {
          throw { name: "DataNotFound" };
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        next(err);
      });
  }
  static edit(req, res, next) {
    const updatedTodo = {
      title: req.body.title,
      description: req.body.description,
      due_date: req.body.due_date,
      status: req.body.status,
    };
    Todo.findOne({ where: { id: req.params.id } })
      .then((data) => {
        if (!data) {
          next({ name: "DataNotFound" });
        } else {
          return Todo.update(updatedTodo, {
            where: { id: req.params.id },
            returning: true,
            plain: true,
          });
        }
      })
      .then((data) => res.status(200).json(data[1]))
      .catch((err) => next(err));
  }
  static delete(req, res, next) {
    let deletedTodo;
    Todo.findOne({ where: { id: req.params.id } })
      .then((data) => {
        if (!data) {
          next({ name: "DataNotFound" });
        } else {
          deletedTodo = data;
          return Todo.destroy({ where: { id: req.params.id } });
        }
      })
      .then((data) => {
        res.status(200).json({ message: "Data deleted", data: deletedTodo });
      })
      .catch((err) => next(err));
  }
}
module.exports = Controller;
