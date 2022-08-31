import TodoListItem from './TodoListItem';
import './TodoList.scss';

// todos 배열을 props 로 받아온 후, 이를 배열 내장함수 map을 사용해서 여러개의 todoListItem 컴포넌트로 반환하여 보여줌
// App.js 에서 만든 onRemove 함수를 TodoListItem 에서 사용하려면, 우선 TodoList를 거쳐야 함
// props 로 받아온 onRemove 를 TodoListItem 에 그대로 전달
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className={'TodoList'}>
      {todos.map(todo => (
        <TodoListItem todo={todo}
                      key={todo.id}
                      onRemove={onRemove}
                      onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;