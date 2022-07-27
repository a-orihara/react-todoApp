FROM nginx:1.19.10

# nginxをインストールすると、/etc配下にnginx/nginx.confやnginx/conf.dというディレクトリが生成される
# インクルード用のディレクトリ内を削除
RUN rm -f /etc/nginx/conf.d/*

# ローカルのビルドコンテキスト内のNginxの設定ファイルをコンテナに新たにファイルを作成してコピー
# アプリごとの設定ファイルは「/etc/nginx/conf.d/」の下に新規で作成し、
# Nginx全体に関わる設定は「/etc/nginx/nginx.conf」を編集するようにします。
# 今回はアプリ単体の設定なので「/etc/nginx/conf.d/rails_app.conf」を作成します。
COPY nginx.conf /etc/nginx/conf.d/rails_app.conf

# ビルド完了後にNginxを起動
CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf