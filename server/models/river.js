const river = (sequelize, DataTypes) => {
  const River = sequelize.define('river', {
    river_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    length: {
      type: DataTypes.DOUBLE,
      defaultValue: 1
    },
    country: {
      type: DataTypes.STRING
    },
    width: {
      type: DataTypes.DOUBLE
    }
  });
  return River;
};

module.exports = river;
