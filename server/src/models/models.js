const configuration = require('./../config/configuration.json');
const Sequelize = require('sequelize');

const DB_NAME = configuration.database.database_name;
const DB_USER = configuration.database.username;
const DB_PASS = configuration.database.password;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Database connection success!');
}).catch(err => {
  console.log(`Database connection error: ${err}`);
});

class User extends Sequelize.Model { };
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'users'
});

class Project extends Sequelize.Model { };
Project.init({
  identifier: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  repoLink: {
    type: Sequelize.STRING,
  }
}, {
  sequelize,
  modelName: 'projects'
});

class Bug extends Sequelize.Model { };
Bug.init({
  identifier: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  priority: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'bugs'
});

User.hasMany(Bug);
User.belongsToMany(Project, { through: 'UserProject' });
Project.hasMany(Bug);
Project.belongsToMany(User, { through: 'UserProject' });
Bug.belongsTo(User);
Bug.belongsTo(Project);

sequelize.sync({ force: true });

module.exports = {
  sequelize,
  Project,
  User,
  Bug
}