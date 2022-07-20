// react使うなら必ず必要
import React from 'react';
// react-domパッケージではアプリのトップレベルで使うためのDOM特有のメソッドを提供しています。
import ReactDOM from "react-dom";
// import ReactDOM from "react-dom";
import App from './App';


// ReactDOM:リアクトのオブジェクト
// 第一引数はコンポーネント.第二引数でどこのDOMのidにレンダリングするのかを追加
ReactDOM.render(<App />, document.getElementById("root"));


// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// // 2つめの引数がdocument.getElementById('root')
// ReactDOM.render(
//   // React.StrictMode:バージョンが進んで非推奨になったAPIの使用や意図しない副作用といった、
//   // アプリケーションの潜在的な問題点を見つけてwarningで教えてくれるの『Strictモード』を有効にするラッパー。
//   <React.StrictMode>

//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// "scripts"エントリに実行させたい処理コマンドを記述してリストに入れておくと、
// あたかもnpmコマンドやYarnコマンドのように実行できる
// package.json に各パッケージのインストールするべきバージョン番号が指定されてる
// package-lock.jsonはGitのリポジトリに含まれるようになってるので、その内容が同じである限り、
// インストールされるnpmパッケージ群のバージョンはすべて同じになる
// "scripts": {
     // ローカルで開発用の HTTP サーバを起動 してそこでアプリを稼働させる
//   "start": "react-scripts start",
     // buildは本番環境にデプロイするためのファイルを作成するコマンド。これを実行すると、プロジ
     // ェクトルートにbuild/ ディレクトリが作られ、その中に一連のビルド済みファイルが展開される
//   "build": "react-scripts build",
    // testコマンドは、ソースディレクトリからテストファイルを抽出してテストを走らせる。
    // これを起動したままにしておくと、テストファイルの差分を検知して、変更のあったテストだけが実行される
//   "test": "react-scripts test",
//   "eject": "react-scripts eject"
// }