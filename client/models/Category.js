import Model from './Model'
import Project from './Project'

export default class Category extends Model {
  resource()
  {
    return 'categories'
  }
  projects () {
    return this.hasMany(Project)
  }
}
