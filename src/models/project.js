'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  project.init({
    title: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    author: DataTypes.STRING,
    description: DataTypes.STRING,
    // technologies: DataTypes.ARRAY,
    technologies: DataTypes.ARRAY(DataTypes.STRING),
    diff_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'project',
  });
  return project;
};