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

    //button（完了）タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        //押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
        const moveTarget = completeButton.closest("li");
        completeButton.nextElementSibling.remove();//nextElementSibling 次のタグを指定するメソッド
        completeButton.remove(); //押されたところのタグをそのまま削除
        //戻すボタンを生成しdivタグ配下に設定
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        moveTarget.firstElementChild.appendChild(backButton);//最初の要素を指定して、その配下にアペンドチャイルドする
        //完了リストに移動
        document.getElementById("complete-list").appendChild(moveTarget);
    })

     //button（削除）タグ生成
     const deleteButton = document.createElement("button");
     deleteButton.innerText = "削除";
     deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親にあるliタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li");//closest:一番近い指定されたタグを探すメソッド
        document.getElementById("incomplete-list").removeChild(deleteTarget);
     })
    
    //階層構造を作成
    div.appendChild(p);//div配下にp
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);//li配下にdiv

    //incomplete-listがIDとして指定されている要素を呼び出し、その配下にliタグを作成する
    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}
//getElementByIDドキュメントにもともとあるメソッド。IDによってエレメントを取得する。
//addEventListener ボタンが押された後のイベントを検知するメソッド。一つ目の引数は検知するイベント、二つ目の引数は実行するイベントをとる
document.getElementById("add-button").addEventListener("click", onClickAdd);

