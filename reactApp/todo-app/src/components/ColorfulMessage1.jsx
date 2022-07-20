import React from 'react'

// ファイル名とコンポーネント名は揃える
// コンポーネントに渡す引数をpropsと言う
// 子から親へ値が渡される。ここでの例（color="green" message="お元気ですか？"）
// propsに（color="green" message="お元気ですか？"）が渡されている
const ColorfulMessage1 = (props) => {
    const contentStyleogenki =  {
        // green
        color: props.color,
        // 通常のcssではこう書く:font-size,でもreactだとキャメルケースで書く
        fontSize: '18px'
    };
    return(
        // ここはhtmlタグ内なので、props(js)の値を渡すには、{}で囲む
        <p style={contentStyleogenki}>{props.message}</p>
    );
};

export default ColorfulMessage1