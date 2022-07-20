import React from 'react'
import ColorfulMessage1 from './components/ColorfulMessage1'
import ColorfulMessage2 from './components/ColorfulMessage2'

const App = () => {
    // イベントはここに記載
    const onClickButton = () => alert();
    // cssスタイルを変数を使って当てる
    const contentStyleKoko =  {
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
        <p style={contentStyleKoko}>koko</p>
        {/* jsxのコンポーネント内のhtmlタグの中の()内は、jsが使える */}
        {/* jsxはhtmlタグの中にイベント(onClick)もそのまま記載出来る */}
        <button onClick={onClickButton}>ボタンだってばさ</button>
        <ColorfulMessage1 color="green" message="お元気ですかグリーン？"/>
        {/* コンポーネントはhtmlタグみたいに閉じタグでも書ける */}
        {/* propsの引数message部分をタグ内に書いたので、messageは不要 */}
        {/* コンポーネントタグ内の内容は、親にprops.childrenで渡すことが出来る */}
        <ColorfulMessage2 color="purple">
            元気だよパープル
            ほんとなんだよ
            pupu
        </ColorfulMessage2>
    </>
    );
};

export default App;