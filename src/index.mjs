import "./styles.css" assert { type:'css'};

const onClickAdd = () => {
    //テキストボックスの値を取得し、初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";//テキストボックスの初期化

    //liタグ生成
    const li = document.createElement("li");

    //divタグ生成
    const div = document.createElement("div");
    div.className = "list-row"; //JavaScript上で生成したdivタグにたいしてクラスを指定できる

    //pタグ生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;
    
    //階層構造を作成
    div.appendChild(p);//div配下にp
    li.appendChild(div);//li配下にdiv

    //incomplete-listがIDとして指定されている要素を呼び出し、その配下にliタグを作成する
    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);

}
//getElementByIDドキュメントにもともとあるメソッド。IDによってエレメントを取得する。
//addEventListener ボタンが押された後のイベントを検知するメソッド。一つ目の引数は検知するイベント、二つ目の引数は実行するイベントをとる
document.getElementById("add-button").addEventListener("click", onClickAdd);

