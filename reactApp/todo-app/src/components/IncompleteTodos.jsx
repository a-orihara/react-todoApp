import React from 'react'

export const IncompleteTodos = (props) => {
  
  const { incompleteTodos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
    <p className="title">未完了のTODOCCmomokkcc</p>
      <ul>
        {/* incompleteTodosの配列から、map(変数名はtodo)で取り出す。 */}
        {/* mapは配列の値を使った処理の結果が入る */}
        {/* mapは二つ目の引数を取れて、そこには配列の順番(index)が入る */}
        {incompleteTodos.map((todo, index) => {
          return (
            // reactでは、map等の配列ループで返却する一番親のタグにkey={}を記載する。
            // これは、reactは仮想DOMの差分だけを反映させるので、何番目が変化したのかという
            // 情報をkeyとして与えてあげる必要がある。
            <li key={todo} className="list-low">
              <div>
                {/* todoのタイトルが入る */}
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                {/* onClickDeleteに(index)の引数を渡す事で、何番目の配列の値かがわかる */}
                {/* onClickDelete(index)だけだと関数の実行になり、延々実行し続けるので、アロー関数で渡す */}
                <button onClick={()=> onClickDelete(index)}>削除する</button>
              </div>
            </li>
          );
        })}
      </ul>
  </div>
  )
}
