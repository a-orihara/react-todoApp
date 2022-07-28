Rails.application.routes.draw do
  # namespace: hogeで名前空間を付与することができます。
  # これはコントローラーをグルーピングし、またURLにもその情報を付与することを意味します。
  # 今回作成するファイルもapp/controllers/api/v1/というディレクトリに作成します。
  # namespaceはあくまで名前空間なので、特定のリソースを目指すものではないことも注意です。
  namespace :api do
    namespace :v1 do
      # 特定のリソースに対するルーティングはresourcesを使います。
      # resources :hogeで:hogeというリソースに対して７つのルーティングが自動的に作成されます。
      # 7つというのはHTTPメソッドであるGET, POST, DELETEなどです。下記参照。
      # only: [:index, :create, :destroy]で7つの内、:index, :create, :destroyだけ作成
      # 一長一短ですが、「原則はresources、resourceで書く、
      # 例外的に必要であればput ... to:も許容する」というルールがいいかと思います
      resources :todos, only: [:index, :create, :destroy]
    end 
  end 
end

# GET	/todos	todos#index	すべてのtodosの一覧を表示
# GET	/todos/new	todos#new	todosを1つ作成するためのHTMLフォームを返す
# POST	/todos	todos#create	todosを1つ作成する
# GET	/todos/:id	todos#show	特定のtodosを表示する
# GET	/todos/:id/edit	todos#edit	todos編集用のHTMLフォームを1つ返す
# PATCH/PUT	/todos/:id	todos#update	特定のtodosを更新する
# DELETE	/todos/:id	todos#destroy	特定のtodosを削除する