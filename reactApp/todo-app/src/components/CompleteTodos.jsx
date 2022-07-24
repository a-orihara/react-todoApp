import React from 'react'

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;

  return(
    /* -   -   -完了エリア-   -   - */
    <div className="complete-area">
      <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              // reactでは、map等の配列ループで返却する一番親のタグにkey={}を記載する。
              // これは、reactは仮想DOMの差分だけを反映させるので、何番目が変化したのかという
              // 情報をkeyとして与えてあげる必要がある。
              <li key={todo} className="list-low">
                <div>
                  {/* todo のタイトルが入る */}
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(index)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
    </div>
  )
};