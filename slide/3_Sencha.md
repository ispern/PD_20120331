# ExtJS4/Sencha Touch2 での使い方

----

# ディレクトリ作成

* ExtJS4では手作成
* Sencha Touch2では、Sencha SDK Toolsを使えば必要なディレクトリが作成される。

----

## ExtJS4の場合①

ディレクトリを作成する

<pre><code data-language="shell">$ compass create resources --css-dir=css --sass-dir=sass
$ cd resources
$ mkdir images
$ mv config.rb sass/
$ cd sass
$ rm *.scss
$ cd ../css
$ rm *.css
</code></pre>

![](https://img.skitch.com/20120329-m6d6se61hd99gdigax5jt2w93j.jpg)

----

## ExtJS4の場合②

config.rbを修正

<pre><code data-language="ruby"># ExtJS SDK のパス
$ext_path = "../../lib/ext"

# SASSのパス
sass_path = File.dirname(__FILE__)

# CSSのパス
css_path = File.join(sass_path, "..", "css")

# 画像のパス
images_path = File.join(sass_path, "..", "images")

# コンパイルのスタイル
output_style = :compressed

# ExtJSのSASSファイルを読み込み
load File.join(File.dirname(__FILE__), $ext_path, 'resources', 'themes')
</code></pre>

----

## ExtJS4の場合③

sass/app.scssを作成

※ExtJS SDKのresources/themes/templetes/resources/sass/my-ext-theme.scssと同じ内容

----

## ExtJS4の場合④

コンパイルする

<pre><code data-language="shell">$ cd sass
$ compass compile
</code></pre>

----

## Sencha Touch2の場合①

Sencha SDK Toolsを使って作成すると、以下のようなディレクトリ構成になる。

![](http://img.skitch.com/20120327-qb4yj2xqhif3m7y8gdyng7argc.jpg)

コンパイルする場合は、

<pre><code data-language="shell">$ cd resources/sass
$ compass compile
</code></pre>

か

<pre><code data-language="shell">$ compass compile resources/sass
</code></pre>

で、CSSがcssディレクトリに生成される。

----

## config.rb

デフォルトで生成されるconfig.rbは以下の様になっている。

<pre><code data-language="ruby"># Get the directory that this configuration file exists in

dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', '..', 'sdk', 'resources', 'themes')

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")

# Require any additional compass plugins here.
images_dir = File.join(dir, "..", "images")
output_style = :compressed
environment = :production
</code></pre>

----

### 説明

Sencha TouchのSASSファイルを読み込み

<pre><code data-language="ruby">load File.join(dir, '..', '..', 'sdk', 'resources', 'themes')
</code></pre>

SASS、CSS、画像ファイルの置き場所を指定

<pre><code data-language="ruby">sass_path = dir
css_path = File.join(dir, "..", "css")
images_dir = File.join(dir, "..", "images")
</code></pre>

コンパイルの設定

<pre><code data-language="ruby">output_style = :compressed
environment = :production
</code></pre>

----

## app.scss

デフォルトで生成されるconfig.rbは以下の様になっている。

<pre><code data-language="css">@import 'sencha-touch/default/all';

// You may remove any of the following modules that you
// do not use in order to create a smaller css file.
@include sencha-panel;
@include sencha-buttons;
@include sencha-sheet;
@include sencha-picker;
@include sencha-tabs;
@include sencha-toolbar;
@include sencha-toolbar-forms;
@include sencha-indexbar;
@include sencha-list;
@include sencha-layout;
@include sencha-carousel;
@include sencha-form;
@include sencha-msgbox;

// Your custom code goes here...
</code></pre>

----

### 説明①

Sencha Touchにあるall.scssをインポートしている。<br>
all.scssをインポートすることで、Sencha Touchに含まれているSASSファイルすべてインポートされる。

<pre><code data-language="css">@import 'sencha-touch/default/all';
</code></pre>

Sencha Touchで定義されているMixinsを呼び出している。<br>
大体コンポーネント毎にMixinsが分かれているので、不要なコンポーネントのMixinsをコメントアウトすることで、CSSのサイズを減らすことができる。

<pre><code data-language="css">@include sencha-panel;
@include sencha-buttons;
@include sencha-sheet;
@include sencha-picker;
@include sencha-tabs;
@include sencha-toolbar;
@include sencha-toolbar-forms;
@include sencha-indexbar;
@include sencha-list;
@include sencha-layout;
@include sencha-carousel;
@include sencha-form;
@include sencha-msgbox;
</code></pre>

----

### 説明②

すべてのコンポーネントのMixinsを呼び出したい場合

<pre><code data-language="css">@include sencha-panel;
@include sencha-buttons;
@include sencha-sheet;
@include sencha-picker;
@include sencha-tabs;
@include sencha-toolbar;
@include sencha-toolbar-forms;
@include sencha-indexbar;
@include sencha-list;
@include sencha-list-paging;
@include sencha-list-pullrefresh;
@include sencha-layout;
@include sencha-carousel;
@include sencha-form;
@include sencha-msgbox;
@include sencha-loading-spinner;
</code></pre>

で、sencha-touch.cssの読み込みが不要になる。（全てのコンポーネントは確認できていない）

----

# Sencha Touchに含まれているSASSファイル

----

### resourcesディレクトリの中身

    - css			// コンパイルしたCSSファイル（圧縮）
    - css-debug		// コンパイルしたCSSファイル（非圧縮）
    - images		// 画像ファイル
    - sass			// SASSファイル
    - themes		// Sencha Touchの共通のSASSファイル（Compass plug-in）

Compassでは、プラグインでSASSファイルをプロジェクト間で共有するように出来る機能があるが、ExtJS/Sencha Touchではthemesディレクトリにプラグインの形でSASSファイルが入っており、アプリケーション側で任意にデザインを変更できるようにしている。

----

### sassディレクトリの中身

    - android.scss			// Android用デザインのSASSファイル
    - apple.scss			// iOS用デザインのSASSファイル
    - bb6.scss				// BlackBerry用デザインのSASSファイル
    - config-debug.rb		// 開発用のコンパイル設定ファイル
    - config.rb				// 本番用のコンパイル設定ファイル
    - sencha-touch.scss		// デフォルトデザインのSASSファイル

それぞれモバイルOS毎のSASSファイルも用意されている。（まだ試していない）

compileコマンド時に、config-debug.rbを指定すると非圧縮のCSSファイルが生成され、config.rbを指定すると圧縮したCSSファイルが生成される。

----

### themesディレクトリの中身

     - images			// Sencha Touchで使うアイコンなどが入っている
     - lib				// Sassの拡張モジュールが入っている
     - stylesheets		// 共有するSASSファイルが入っている
     - templates		// おそらくSencha SDK Toolsで生成するapp.scssのテンプレート
     - compass_init.rb  // Compass実行時に@import 'sencha-touch/default/all'していたら最初に呼ばれるRubyのファイル