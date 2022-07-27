# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

# このファイルは、データベースの現在の状態から自動生成されます。このファイルを編集するのではなく、
# Active Recordのmigrations機能を使ってデータベースをインクリメンタルに変更し、このスキーマ定義を再生成してください。
# このファイルはRailsが `bin/rails db:schema:load` を実行する際にスキーマを定義するために使用するソースです。
# 新しいデータベースを作成する場合、 `bin/rails db:schema:load` はすべてのマイグレーションをスクラッチから実行するよりも高速で、
# エラーが発生しにくい傾向があります。古いマイグレーションが外部の依存関係やアプリケーションコードを使用している場合、
# 正しく適用できないことがあります。
# このファイルをバージョン管理システムでチェックすることを強くお勧めします。

ActiveRecord::Schema[7.0].define(version: 2022_07_27_103712) do
  create_table "todos", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
