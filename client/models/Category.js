import Model from './Model'
import Project from './Project'

export default class Category extends Model {
  resource()
  {
    return 'categories'
  }
  primaryKey()
  {
    return 'slug'
  }
  projects () {
    return this.hasMany(Project)
  }
}
