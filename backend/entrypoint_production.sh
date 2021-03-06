#!/bin/bash

# 1行目にないといけないの！bashを利用したシェルスクリプトであることを示している
# linuxカーネルはファイルの先頭に#!があれば、その後ろに書かれたコマンド（この場合は/bin/bash）を実行する。

# エラーが発生するとスクリプトを終了する
set -e

# railsのpidが存在していれば削除する処理。 pidファイルが既に存在するためサーバーが立ち上がらないエラーを回避する為。
# rm -f:存在しないファイルを削除しようとした時に、エラーメッセージを出さない
# pidはプロセスid。開発用webサーバーを起動する時に、tmp/pids/server.pidに書き込まれ、
# 終了する時に削除される。server.pidにpidが書かれているとサーバーが起動中と判断されてしまう。
rm -f /myapp/tmp/pids/server.pid

# WARNING:createとseedはfargateの初回のみ実行
# bundle exec rails db:create
# bundle exec rails db:migrate
bundle exec rails assets:precompile
# bundle exec rails db:seed

# CMDで渡されたコマンド（→Railsのサーバー起動）を実行
exec "$@"