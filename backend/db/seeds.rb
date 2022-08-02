# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# このファイルには、データベースをデフォルト値でシードするために必要なすべてのレコード作成が含まれているはずです。
# その後、bin/rails db:seedコマンドでデータをロードすることができます
# （または、db:setupでデータベースと一緒に作成することもできます）。

# 3.times:Todo.newを3回行う。
3.times do |n|
    todo = Todo.new(
      name: "test_todo_#{n}",
    )
    # データをDBに書き込む
    # 通常のメソッドはその処理が失敗するとfalseを返します。
    # !(エクスクラメーションマーク)がついたメソッド、例えばsave!、update!などが失敗すると例外を発生させます。
    todo.save!
end
