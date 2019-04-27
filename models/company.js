module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {

    //id: DataTypes.INTEGER,
    ticker: DataTypes.STRING,
    company: DataTypes.STRING,
    score: DataTypes.DECIMAL,
    sector: DataTypes.STRING,
    industry: DataTypes.STRING,
    agreement: DataTypes.STRING,
    mktcap: DataTypes.DECIMAL,
    city: DataTypes.STRING,
    st: DataTypes.STRING
  });

  return Company;
};
