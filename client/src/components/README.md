# COMPONENTS FOLDER README

Component naming rules (pretty much from the [vue style guide](https://vuejs.org/v2/style-guide/)):
  * custom component tags have to be multi-word (app-button, todo-item, banner-red)
  * component files names should be PascalCase
  * base components should be identified by a prefix (BaseButton or AppButton or DefaultButton or DButton)
  * components that are not very modular and can only work within this app are prefixed with "App" (this somewhat clashes/overlaps with other rules)
  * single instance compnents should be prefixed with "The" (TheNavbar or TheForm or TheCircleAnimation)
  * tightly coupled child components should have the parents name as prefix (TodoList -> TodoListItem -> TodoListButton)