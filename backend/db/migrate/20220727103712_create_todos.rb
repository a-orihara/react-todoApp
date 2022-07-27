# ここはMigrationファイルに既に記述されているものです。
# railsのルールとして、作成するCreateテーブル名というファイル名になります。
class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    # create_table:テーブル名でそのテーブル名のテーブルを作成するよう宣言しています。
    create_table :todos do |t|
      # t.テーブルのカラム型 :カラム名, オプション...という意味です。
      t.string :name
      
      # t.timestampsはMigrationファイルに含まれているもので、
      # 自動的にcreated_atとupdated_atの２つのカラムを作成してくれます。
      t.timestamps
    end
  end
end
