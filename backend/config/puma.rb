# Puma can serve each request in a thread from an internal thread pool.
# The `threads` method setting takes two numbers: a minimum and maximum.
# Any libraries that use thread pools should be configured to match
# the maximum value specified for Puma. Default is set to 5 threads for minimum
# and maximum; this matches the default thread size of Active Record.
#

# Railsで開発をする場合にrails serverをすることで、Pumaが起動している。
# Pumaのwebサーバーとしての機能はおまけ程度で、[Rack] という機能を提供するアプリケーションサーバーという位置づけ
# Pumaは、Railsの場合、config/puma.rb で詳細な設定をすることができる。
# もちろん、オプションコマンドで設定も可能であるが、毎回コマンドを打つのが面倒なので、設定ファイルに用いる。
# 開発時は、Defaultの設定で問題ない
# 本番環境では、NginxをリバースプロキシとしてPumaの前段におき、
# UNIXドメインソケットを経由してNginxとPumaが通信を行う。

# ENVはrubyのオブジェクト、ENV["環境変数名"]で環境変数を呼び出す。
# ENV["環境変数名"]は環境変数が存在しないと、nilが返ってくる
# ENV['hoge'] || 'default'// 存在しない場合のデフォルト値を設定できる
# ENV.fetch("キー名"){"デフォルト値"}
# 指定したキー名が存在しなかった場合に、返却するデフォルト値を設定する
# ex:ENV.fetch("SAMPLE"){"SAMPLEは存在しませんでした。"}
# ex:environment ENV.fetch("RAILS_ENV") { ENV['RACK_ENV'] || "production" }
# Pumaを実行する環境をRAILS_ENVの環境にしており、存在しない場合は、ENV['RACK_ENV']または、productionにするという設定。

# 変数max_threads_countを定義。Defaultの設定。
# to_iは 文字列を整数に返すメソッド
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
# 変数min_threads_countを定義。Defaultの設定。
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
# スレッドの最小数, 最大数を定義。Defaultの設定。
threads min_threads_count, max_threads_count

# pumaのworkerのタイムアウト時間を定義。Defaultの設定。
# 開発環境において、Pumaがワーカーを終了させる前に待つ`worker_timeout`の閾値を指定します。
worker_timeout 3600 if ENV.fetch("RAILS_ENV", "development") == "development"

# Pumaがリクエストを受け取るためにリッスンする `port`を指定します。デフォルトは3000です。
# port ENV.fetch("PORT") { 3000 }

# pumaをどの環境で動作させるか指定。Defaultの設定。
environment ENV.fetch("RAILS_ENV") { "development" }
# __FILE__:現在実行しているファイル(＝このpuma.rb)
# きっちりした解説だと、「現在のソースファイル名が格納された疑似変数」。
# File.expand_path:相対パスを絶対パスに変換した文字列を返す
# 絶対パスが返ってくるわけではないので、絶対パスを取りたいときはFile.expand_pathを使う。
# "../..:二階層上のディレクトリ"。このpuma.rbの二階層上は/rails_app
# 現在実行しているファイル(＝このpuma.rb)の"../.."を絶対パスに変換した文字列を返す
app_root = File.expand_path("../..", __FILE__)
# ソケットファイルの作成を指定する
# このソケット通信は、NginxとRailsが同じマシンに存在している場合のみできる設定です。
# 本番環境では、NginxをリバースプロキシとしてPumaの前段におき、UNIXドメインソケットを経由してNginxとPumaが通信を行う。
# bind "unix://#{Rails.root}/tmp/sockets/puma.sock"
bind "unix://#{app_root}/tmp/sockets/puma.sock"
# stdout_redirect "#{app_root}/log/puma.stdout.log", "#{app_root}/log/puma.stderr.log", true
# PIDファイルの設置場所。Defaultの設定。
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }

# Specifies the number of `workers` to boot in clustered mode.
# Workers are forked web server processes. If using threads and workers together
# the concurrency of the application would be max `threads` * `workers`.
# Workers do not work on JRuby or Windows (both of which do not support
# processes).
#
# workers ENV.fetch("WEB_CONCURRENCY") { 2 }

# Use the `preload_app!` method when specifying a `workers` number.
# This directive tells Puma to first boot the application and load code
# before forking the application. This takes advantage of Copy On Write
# process behavior so workers use less memory.
#
# preload_app!

# pumaを`rails restart`コマンドで再起動できるように設定。Defaultの設定。
plugin :tmp_restart
