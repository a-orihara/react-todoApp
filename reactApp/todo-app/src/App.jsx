// ファイルの先頭に、下記のように書くと、このファイルだけeslintの指定した設定をオフにすることが出来る(useEffectで使用)。
/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect } from 'react'
import { useState } from 'react';
// export defaultした場合の書き方。
import ColorfulMessage1 from './components/ColorfulMessage1'
// コンポーネントにexportを付けると、下記の記載にreactではこちらが主流。打ち間違いをエラー検知してくれるから。
import { ColorfulMessage2 } from './components/ColorfulMessage2'

// 再レンダリングはコンポーネントを上から再読み込みし、その差分を反映する。
// stateが変化したり、親コンポーネントが変更したり、prorpseudoの値が変化すると再レンダリングが起こる
const App = () => {
    // useState();は状態を動的に変える。コンポーネントの一番始めに書くと分かりやすい。配列の分割代入で使う。下段参照。
    // 第一引数はstateで使う変数名。第二引数はstateを更新する関数。名前はset何々が一般的。
    // デフォルトで引数を指定可能。この場合(0)
    const [num, setNum] = useState(0);
    const[faceShow, setFaceShow] = useState(true);
 
    // イベントはreturnの上に記載
    // useStateを使った関数
    const onClickCountUp = () => {
        // useStateの更新関数.
        setNum(num + 1);
    };

    const onClickFaceShow = () => {
        // faceShow真偽値の逆を取る。
        setFaceShow(!faceShow);
        console.log("oasita")
    };

    // useEffectはそのコンポーネントで最初の一回だけ処理を通す。
    // useEffectは第一引数に関数、第二引数に配列を取る
    // 第二引数に取った配列の変数が変化した場合にのみ、第一引数の関数の処理を走らせる。
    useEffect(() => {
        if (num > 0) {
            if (num % 3 === 0 ) {
                faceShow || setFaceShow(true);
                console.log("aaa")
            } else {
                faceShow && setFaceShow(false);
                console.log("bbb")
            }
        }
    // 次の行でeslintを無効にする
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num]);

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
        <button onClick={onClickCountUp}>カウントアップだってばさ</button>
        <ColorfulMessage1 color="green" message="お元気ですかグリーン？"/>
        {/* コンポーネントはhtmlタグみたいに閉じタグでも書ける */}
        {/* propsの引数message部分をタグ内に書いたので、messageは不要 */}
        {/* コンポーネントタグ内の内容は、親にprops.childrenで渡すことが出来る */}
        <ColorfulMessage2 color="purple">
            元気だよパープル
            ほんとなんだよ
            pupu
        </ColorfulMessage2>
        <p>{num}</p>
        {/* <br/>:改行 */}
        <br/>
        <button onClick={onClickFaceShow}>chinko,button</button>
        {faceShow && <p>chinko!</p>}
    </>
    );
};

export default App;

// -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

// // -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -
// // 分割代入配列の場合
// const myProf2 = ["ひろし", 23];
// // オブジェクトの場合はプロパティ名で受け取るが、配列の場合、順番で受け取ることになる。
// const [name2, age2] = myProf2;
// const message3 = `${name2}です。${age2}よ。`
// console.log(message3);
// // ひろしです。23よ。

// // =   =   論理演算子の本当の意味を知ろう && || =   =   =   =   =   =   =   =   =   =   =   =   =   =
// const b = null;
// // ||は、左側がfalseなら右側を返す。
// const fee1 = b || "金額未設定です";
// console.log(fee1);
// // 金額未設定です

// const c = 100;
// // &&は、左側がtrueなら右側を返す。
// const fee2 = c && "どうですか？";
// console.log(fee2);
// // どうですか？
