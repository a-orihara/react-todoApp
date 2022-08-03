// APIを叩く関数を定義する

// axiosとはHTTPクライアントライブラリ。要はフロントエンドでHTTP通信を行う際に必要な処理をまとめて行ってくれるライブラリ
// axiosは[import axios from 'axios';] で使えるようになる
import axios from 'axios';
import { todos } from '../urls/index';

// axiosはPromiseベース(Promiseを返すということ)。つまりaxiosを使う側でnew Promiseなどしなくても、非同期処理を実装することができます。
export const fetchTodos =() => {
  // POSTであればaxios.post(...になります。
  // axios.getの引数には文字列が必要で、ここではHTTPリクエストをなげる先のURL文字列が必要になります。
  // 最終的にaxios.getした結果成功した場合はthen(...)にいき、失敗・例外が帰ってきた場合はcatch(...)へと入ります。
  // 返り値をresという名前で取得し、res.dataでレスポンスの中身だけをreturnしています。
  return axios.get(todos)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}

// const DEFAULT_API_LOCALHOST = 'http://localhost:80/api/v1'
// export const todos = `${DEFAULT_API_LOCALHOST}/todos`
// # GET	/todos	todos#index	すべてのtodosの一覧を表示