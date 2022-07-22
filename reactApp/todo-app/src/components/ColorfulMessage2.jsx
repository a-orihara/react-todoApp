import React from 'react'

export const ColorfulMessage2 = (props) => {
    // 分割代入
    const { color, children } = props;
    const contentStyleogenki =  {
        // green
        // 分割代入で、props.color→colorに
        // color: color,から、プロパティ名と値の名前が同じなら省略出来るので、colorに
        color,
        // 通常のcssではこう書く:font-size,でもreactだとキャメルケースで書く
        fontSize: '18px'
    };
    return(
        // ここはhtmlタグ内なので、props(js)の値を渡すには、{}で囲む
        // 分割代入で、props.children→childrenに
        <p style={contentStyleogenki}>{children}</p>
    );
};

// コンポーネントにexportを付けると、下記の記載は不要。
// export default ColorfulMessage2