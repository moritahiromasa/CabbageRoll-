// マクロ定義
const SLIDE_NUM = 4;


// 画像とナビの要素を自動で追加
for(var i = 0; i < SLIDE_NUM; i++) {

	switch(i){
		case 0:

			/**** <h1>タイトルを追加 ****/

			// li要素を取得
			var title1 = document.createElement("li");
			// li要素の中に画像タグを埋め込む
			title1.innerHTML = "<header><h1>YKK 技術面接資料</h1></header>";
			// li要素をクラス名「slider-inner」の子要素として追加
			document.getElementsByClassName("slider-inner")[0].appendChild(title1);
			break;

		case 1:
			
			/**** タイトル   ****/
			
			var title2 = document.createElement("li");
			title2.innerHTML = "<h1> dummy title 1</h1>";
			document.getElementsByClassName("slider-inner")[0].appendChild(title2);
			break;

		case 2:
						
			var title3 = document.createElement("li");
			title3.innerHTML = "<h1> dummy title 2</h1>";
			document.getElementsByClassName("slider-inner")[0].appendChild(title3);
			break;

		case 3:

			var title4 = document.createElement("li");
			title4.innerHTML = "<h1> dummy title 3</h1>";
			document.getElementsByClassName("slider-inner")[0].appendChild(title4);
			break;

		default:

			break;

	}

	// li要素を取得
	var nav = document.createElement("li");
	// プロパティ「data-nav-index」に数値を割り振る
	nav.setAttribute("data-nav-index", i);
	// li要素をクラス名「nav」の子要素として追加
	document.getElementsByClassName("nav")[0].appendChild(nav);
}

// スライドの数を取得(処理のために-1する)
var length = SLIDE_NUM - 1;
// クラス名「Slide」に文章の一つの要素を格納
var Slide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");


// クラス名「dotNavigation」にドットナビの1つの要素を格納
var dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
// 「現在○○枚目のスライドを表示している」というインデックス番号を格納する変数
var nowIndex = 0;

// 現在表示されている画像とドットナビにクラス名を付ける
Slide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");
// スライドがアニメーション中か判断するフラグ
var isChanging = false;
// スライドのsetTimeoutを管理するタイマー
var slideTimer;
// スライド切り替え時に呼び出す関数
function sliderSlide(val) {
	if (isChanging === true) {
		return false;
	}
	isChanging = true;
	// 現在表示している画像とナビからクラス名を削除
	Slide[nowIndex].classList.remove("show");
	dotNavigation[nowIndex].classList.remove("current");
	nowIndex = val;
	// 次に表示するスライドとナビにカレントクラスを設定
	Slide[nowIndex].classList.add("show");
	dotNavigation[nowIndex].classList.add("current");
	// アニメーションが終わるタイミングでisChangingのステータスをfalseに
	slideTimer = setTimeout(function(){
		isChanging = false;
	}, 600);
}

// 左矢印のナビをクリックした時のイベント
document.getElementById("arrow-prev").addEventListener("click", function(){
	var index = nowIndex - 1;
	if(index < 0){
	  index = length;
	}
	sliderSlide(index);
}, false);
// 右矢印のナビをクリックした時のイベント
document.getElementById("arrow-next").addEventListener("click", function(){
	var index = nowIndex + 1;
	if(index > length){
	  index = 0;
	}
	sliderSlide(index);
}, false);
// ドットナビをクリックした時のイベントを作成
for(var i = 0; i < dotNavigation.length; i++) {
	// データ属性のインデックス番号を元にスライドを行う
	dotNavigation[i].addEventListener("click", function(){
		var index = Number(this.getAttribute("data-nav-index"));
		sliderSlide(index);
	}, false);
}
