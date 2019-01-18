module.exports = function(sequelize, DataTypes) {
  var Restaurants = sequelize.define("Restaurants", {
    restaurant_name: DataTypes.STRING,
    restaurant_type: DataTypes.STRING,
    restaurant_address: DataTypes.STRING,
    restaurant_place_id: DataTypes.STRING,
    restaurant_rating: DataTypes.STRING,
    restaurant_price_level: DataTypes.STRING,
    restaurant_photo_reference: DataTypes.STRING(1000),
  });

  Restaurants.associate = function(models) {
    Restaurants.belongsTo(models.Users, {
      as: "restaurant_favorite",
      constrainst: false
    });

    Restaurants.belongsToMany(models.Users, {
      through: models.Favorites,
      foreignKey: "restaurant_id",
      onDelete: "cascade"
    });

    Restaurants.belongsToMany(models.Users, {
      through: models.Last_Search,
      foreignKey: "restaurant_id",
      onDelete: "cascade"
    });
  };

  return Restaurants;
};
