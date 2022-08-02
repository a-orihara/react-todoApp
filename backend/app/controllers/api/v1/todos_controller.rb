class Api::V1::TodosController < ApplicationController
  def index
    # render メソッドはコントローラとビューから呼び出せます。
    # render json: {}（render json:  オブジェクト）というかたちでJSON形式でデータを返却
    # ハッシュで定義したDBの情報がJSON形式のデータで返却される
    # status: 200okで、リクエストが成功したこと、200 OKと一緒にデータを返却
    render json: { status: 200, todos: Todo.all }
  end

  # paramsとは、ユーザーから送られてきた情報（パラメーター、キーとバリューのセットになる）を取得するメソッド
  # 例：「投稿フォームなどPOSTで送信されたデータ」と「検索フォームなどGETで送信されURLにクエリとして入るデータ」など。
  # paramsには複数のハッシュに対するハッシュ(hash-of-hashes: 入れ子に なったハッシュ)が含まれます
  # それらの送られてきた情報情報をデータベースに保存するメソッドがcreateメソッド.引数にキーとバリューのセットを取ります。
  # paramsで取得した情報はキーとバリューのセットになっているため、User.create(params)で情報を保存することができます。
  # ただしこれではセキリュティに関して非常に問題があります。そのため、ストロングパラメーターといった物を使います。
  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: { status: 200, todo: todo }
    else
      render json: { status: 500, message: "Todoの作成に失敗しました"}
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    if todo.destroy
      render json: { status: 200, todo: todo }
    else
      render json: { status: 500, message: "Todoの削除に失敗しました"}
    end
  end

  

  # このメソッドはコントローラの内部でのみ実行され、Web経由で外部ユーザーにさらされる必要はないため、
  # Rubyのprivateキーワードを使って外部から使えないようにします
  private
    # paramsに対してpermitメソッドを使い、その引数に取り出したいカラムを指定すると、
    # ユーザーから送られた情報パラメーターの中から、データーベースに保存したいものだけを取り出すことができます。
    # このメソッドの戻り値は、許可された属性のみが含まれたparamsのハッシュです(:todo属性がない場合はエラーになります)。
    def todo_params
      params.require(:todo).permit(:name);
    end
end
