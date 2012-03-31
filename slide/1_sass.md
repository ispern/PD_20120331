# SassとExt JS 4/Sencha Touch2

----
# 自己紹介

* 名前：松岡 宏満
* 会社：株式会社W・I・Z
* ExtJS/Sencha Touch/Titanium/PHPを使ってます

----

# SassとCompass

* ExtJs/Sencha Touchで使われているCSSフレームワーク

* ExtJs/Sencha Touchでデザインをカスタマイズするには必須

----

# Sassとは

SassはCSSを生成するメタ言語。CSSを簡易的に書くことが出来る（Coffe ScriptのCSS版的な）

同様のものとして、lessがある。

----

# インストール

SassもCompassもgemで提供されている。

Compassをインストールすれば一緒にSassもインストールされる。

<pre><code data-language="shell">$ gem install compass</code></pre>

----

# Sassの書き方

* 変数
* Nasted Rules
* データ型
* 演算
* 制御文
* 継承
* サーバサイドインポート
* Mixins
* Functions
* MediaQueries

----

# 変数

$ + 変数名で宣言する。

### Sass

<pre><code data-language="css">$width: 100px;
$font_family: 'Helvetica, Arial';
$background_color: #8e8e8e;

body {
    width: $width;
    font-family: $font_family;
    background-color: $background_color;
}
</code></pre>


### CSS

<pre><code data-language="css">body {
    width: 100px;
    font-family: "Helvetica, Arial";
    background-color: #8e8e8e;
}
</code></pre>

----

# Nasted Rules

セレクタの親子関係をネストして書ける。

### Sass

<pre><code data-language="css">#hoge {
    width: 300px;
    height: 200px;

    p {
        font-size: 15px;
        padding-left: 10px;
    }
}
</code></pre>

### CSS

<pre><code data-language="css">#hoge {
    width: 300px;
    height: 200px;
}

#hoge p {
    font-size: 15px;
    padding-left: 10px;
}
</code></pre>

----

## 親セレクタの参照

ネストさせた場合、親セレクタを"&"で置き換えられる。

### Sass

<pre><code data-language="css">#hoge a {
    color: #11BB22;

    &:hover {
        color: #0A9119;
    }
}
</code></pre>

### CSS

<pre><code data-language="css">#hoge a {
    color: #11BB22;
}

#hoge a:hover {
    color: #0A9119;
}
</code></pre>

----

## Nested Properties

CSSプロパティの名前空間をまとめられる。

まとめる場合、名前空間 + ":"（コロン）で書く。

### Sass

<pre><code data-language="css">#hoge {
    font: {
      size: 15px;
      family: Helvetica, arial;
    }
}
</code></pre>

## CSS

<pre><code data-language="css">#hoge {
    font-size: 15px;
    font-family: Helvetica, arial;
}
</code></pre>

----

# データ型

5種類ある。

* numbers (e.g. 1.2, 13, 10px)
    * px, em, ex, cm, mm, in, pt, pc単位で書いても、数値型となる
* strings (e.g. "foo", 'bar', baz)
    * ダブルクォート、シングルクォートで囲んでもよい
* colors (e.g. blue, #04a3f9, rgba(255, 0, 0, 0.5))
* booleans (e.g. true, false)
* lists (e.g. 1.5em 1em 0 2em, Helvetica, Arial, sans-serif)
    * カンマかスペースで区切る

----

# 制御文

----

## if文

@if 〜 @else if 〜 @else の形式で書く。

### Sass

<pre><code data-language="css">$value: 'hoge';

p {
    @if $value == 'hoge' {
      color: red;
    } @else if $value == 'foo' {
      color: blue;
    } @else {
      color: black;
    }
}
</code></pre>

### CSS

<pre><code data-language="css">p {
    color: red;
}
</code></pre>

----

## for文

以下のどちらかの形式で書く

* @for $var from &lt;start&gt; to &lt;end&gt;
    * $var < &lt;end&gt; まで繰り返す
* @for $var from &lt;start&gt; through &lt;end&gt;
    * $var <= &lt;end&gt; まで繰り返す

$var は任意の変数名

----

### @for 〜 from 〜 through 〜

### Sass

<pre><code data-language="css">@for $i from 1 through 3 {
    .item1-#{$i} {
        width: 100px * $i;
    }
}
</code></pre>

### CSS

<pre><code data-language="css">.item1-1 {
  width: 100px;
}

.item1-2 {
  width: 200px;
}

.item1-3 {
  width: 300px;
}
</code></pre>

----

### @for 〜 from 〜 to 〜

#### Sass

<pre><code data-language="css">@for $i from 1 to 3 {
    .item2-#{$i} {
        width: 100px * $i;
    }
}
</code></pre>

#### CSS

<pre><code data-language="css">.item2-1 {
  width: 100px;
}

.item2-2 {
  width: 200px;
}
</code></pre>

----

## while文

@while <条件式> の形式で書く

### Sass

<pre><code data-language="css">$i: 1;
@while $i &lt;= 3 {
    .item-#{$i} {
        width: 100px * $i;
    }

    $i: $i + 1;
}
</code></pre>

### CSS

<pre><code data-language="css">.item-1 {
    width: 100px;
}

.item-2 {
    width: 200px;
}

.item-3 {
    width: 300px;
}
</code></pre>

----

## each文

@each $var in &lt;list&gt; の形式で書く。

&lt;list&gt;は、リスト型の変数を指定するか、カンマ区切り・スペース区切りで指定できる。

### Sass

<pre><code data-language="css">@each $i in 1, 2, 3 {
    .item-#{$i} {
        width: 100px * $i;
    }
}
</code></pre>

### CSS

<pre><code data-language="css">.item-1 {
    width: 100px;
}

.item-2 {
    width: 200px;
}

.item-3 {
    width: 300px;
}
</code></pre>

----

# 継承

@extend &lt;セレクタ&gt; の形式で書く。

@extendは複数書ける。

### Sass

<pre><code data-language="css">.error {
    color: red;
}

.seriousError {
    @extend .error;
    font-weight: bold;
}
</code></pre>

### CSS

<pre><code data-language="css">.error, .seriousError {
    color: red;
}

.seriousError {
    font-weight: bold;
}
</code></pre>

----

# サーバサイドインポート

複数のSASSファイルをインポートできる。

コンパイル時に指定されたSASSファイルを全て含めてCSSを生成する。

@import &lt;SASSファイル&gt; の形式で書く

<pre><code data-language="css">@import 'foo.scss'
</code></pre>

か

<pre><code data-language="css">@import 'foo'
</code></pre>

どちらでもOK。

CSSの@importを使うこともできる。

<pre><code data-language="css">@import "foo.css";
@import "foo" screen;
@import "http://foo.com/bar";
@import url(foo);
</code></pre>

----

## Partials

ファイル名を_（アンダースコア）始まりにすることで、CSSへのコンパイル対象から外すことができる。

そのファイルをインポートしたい場合は、

<pre><code data-language="css">@import 'foo'
</code></pre>

の様に、_（アンダースコア）を除いたファイル名で指定する。

----

## Nested @import

@import もネストして書くことができる。

### Sass

* _partial.scss

<pre><code data-language="css">.hoge {
    color: red;
}
</code></pre>

* nested_import.scss

<pre><code data-language="css">#main {
    @import 'partial';
}
</code></pre>

#### CSS

<pre><code data-language="css">#main .hoge {
    color: red;
}
</code></pre>

----

# Mixins

Mixinsはスタイルをまとめて、必要なセレクタで呼び出すことができる機能。

@mixinsでスタイルをまとめ、@includeで定義したMixinsを呼び出して使う。

----

## 書き方

### Sass

<pre><code data-language="css">@mixin box {
    width: 100px;
    height: 100px;
    border: 1px solid #a8aba3;
}
.red {
    @include box;
    background-color: red;
}
</code></pre>

### CSS

<pre><code data-language="css">.red {
  width: 100px;
  height: 100px;
  border: 1px solid #a8aba3;
  background-color: red;
}
</code></pre>

----

## 引数

Mixinsは引数を定義することができる。

### Sass

<pre><code data-language="css">@mixin box($bg-color: white){
    width: 100px;
    height: 100px;
    border: 1px solid #a8aba3;
    background-color: $bg-color;
}
.red {
    @include box(red);
}
</code></pre>

### CSS

<pre><code data-language="css">.red {
  width: 100px;
  height: 100px;
  border: 1px solid #a8aba3;
  background-color: red;
}
</code></pre>

----

# Functions

Sassではいくつかの共通の関数が提供されている。

詳細は、[こちら](http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html)

* RGB Functions
* HSL Functions
* Opacity Functions
* Other Color Functions
* String Functions
* Number Functions
* List Functions
* Miscellaneous Functions

※自分で関数を定義することも可能。