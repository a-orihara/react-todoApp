import React from 'react'

const App = () => {
    // イベントはここに記載
    const onClickButton = () => alert();
    // cssスタイルを変数を使って当てる
    const contentStyle =  {
        color: 'blue',
        // 通常のcssではこう書く:font-size,でもreactだとキャメルケースで書く
        fontSize: '18px'
    };
    // 関数コンポーネントな中にHTMLタグを書いていく
    // returnの中身は一つのタグで書かなければならない。下記は空白のタブ追加している
    // <React.Fragment>,<div>タグでもいい
    return (
    <>
        {/* htmlタグの中に直接cssスタイルをjsのオブジェクト形式で当てられる。 */}
        <h1 style={{ color: 'red'}}>momo</h1>
        {/* こちらは変数からcssを当てる */}
        <p style={contentStyle}>koko</p>
        {/* jsxのコンポーネント内のhtmlタグの中の()内は、jsが使える */}
        {/* jsxはhtmlタグの中にイベント(onClick)もそのまま記載出来る */}
        <button onClick={onClickButton}></button>
    </>
    );
};

export default App;