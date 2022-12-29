import filterNotCheckedTodo from '../filter/filterNotCheckedTodo';

const displayCount = (todoArr) => {
  const todoCountValue = document.querySelector('.js-todo__count-value');
  todoCountValue.innerHTML = filterNotCheckedTodo(todoArr);
};

export default displayCount;
