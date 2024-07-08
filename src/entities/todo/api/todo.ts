import type { Todo } from '@/entities/todo'
import { DB_BASE_URL } from '../../../shared/config'

export const getTodosByUser = async (login: string): Promise<Todo[]> => {
  let todos: Todo[] = []
  await fetch(DB_BASE_URL + 'posts/?user=' + login)
    .then((d) =>
      d
        .json()
        .then((d) => {
          todos = d as Todo[]
        })
        .catch((e) => console.log(e))
    )
    .catch((e) => console.log(e))
  return todos
}

export const patchTodo = async (todo: Todo) => {
  if (todo.id == null || todo.id == '') {
    console.log('id is needed')
    return
  }

  await fetch(DB_BASE_URL + 'posts/' + todo.id, {
    method: 'PATCH',
    body: JSON.stringify(todo)
  }).catch((e) => console.log(e))
}

export const addTodo = async (todo: Todo) => {
  await fetch(DB_BASE_URL + 'posts/', {
    method: 'POST',
    body: JSON.stringify(todo)
  }).catch((e) => console.log(e))
}

export const getTodoById = async (id: string): Promise<Todo> => {
  let todo = {} as Todo
  await fetch(DB_BASE_URL + 'posts/?id=' + id)
    .then((d) =>
      d
        .json()
        .then((d) => {
          todo = d[0] as Todo
        })
        .catch((e) => console.log(e))
    )
    .catch((e) => console.log(e))
  return todo
}
