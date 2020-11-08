import Model from './Model'
import Category from './Category'

export default class Project extends Model {
  resource()
  {
    return 'projects'
  }
  relations() {
    return {
      category: Category
    };
  }
}
