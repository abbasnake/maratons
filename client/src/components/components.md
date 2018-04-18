# COMPONENTS FOLDER README

Component naming rules (pretty much from the [vue style guide](https://vuejs.org/v2/style-guide/)):
  * custom component tags have to be multi-word (app-button, todo-item, banner-red)
  * compknent files names should be PascalCase
  * base components should be identified by a prefix (BaseButton or AppButton or DefaultButton or DButton)
  * single instance compnents should be prefixed with "The" (TheNavbar or TheForm or TheCircleAnimation)
  * tightly coupled child components should have the parents name as prefix (TodoList -> TodoListItem -> TodoListButton)