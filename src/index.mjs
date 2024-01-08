import "./styles.css";

const onClickAdd = () => {
    alert();
}
//getElementByIDドキュメントにもともとあるメソッド。IDによってエレメントを取得する。
//addEventListener ボタンが押された後のイベントを検知するメソッド。一つ目の引数は検知するイベント、二つ目の引数は実行するイベントをとる
document.getElementById("add-button").addEventListener("click", onClickAdd);

