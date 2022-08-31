import TodoListItem from './TodoListItem';
import './TodoList.scss';

//todos 배열을 props 로 받아온 후, 이를 배열 내장함수 map을 사용해서 여러개의 todoListItem 컴포넌트로 반환하여 보여줌
const TodoList=({todos})=>{
  return(
    <div className={"TodoList"}>
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList;