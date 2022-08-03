
const DEFAULT_API_LOCALHOST = 'http://localhost:80/api/v1'
export const todos = `${DEFAULT_API_LOCALHOST}/todos`
// export const foodsIndex = (restaurantId) =>
//   `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`



// # GET	/todos	todos#index	すべてのtodosの一覧を表示
// # GET	/todos/new	todos#new	todosを1つ作成するためのHTMLフォームを返す
// # POST	/todos	todos#create	todosを1つ作成する
// # GET	/todos/:id	todos#show	特定のtodosを表示する
// # GET	/todos/:id/edit	todos#edit	todos編集用のHTMLフォームを1つ返す
// # PATCH/PUT	/todos/:id	todos#update	特定のtodosを更新する
// # DELETE	/todos/:id	todos#destroy	特定のtodosを削除する