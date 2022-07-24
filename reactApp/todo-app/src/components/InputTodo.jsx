import React from 'react'

// stateや関数をpropsを使って親から子に渡す
// stateや関数はそれぞれ呼び出し元の親コンポーネントに移って実行される。親と子でぐるぐる回る
export const InputTodo = (props) => {
    
    // stateや関数を分割代入を使って取り出す
    const { todoText, onChange, onClick } = props;

    return(
      /* -   -   -入力エリア-   -   - */
      /* reactのコンポーネントの場合、htmlタブのclassはclassNameと記載*/
      <div className="input-area">
        {/* 入力エリア。入力した値＝{todoText}を、onChangeイベントを通して、入力エリアに表示する。 */}
        <input 
          placeholder="TODOを入力してね" 
          type="text" value={todoText} 
          onChange={onChange}
        />
        {/* 入力完了ボタン */}
        <button onClick={onClick}>追加する</button>
      </div>
    )
};