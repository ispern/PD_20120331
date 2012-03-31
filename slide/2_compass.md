# Compassとは

CompassはSassで作られたCSSフレームワーク。

Sassを便利に使うことができる機能が満載。

----

# コマンド

インストールすることで、compassコマンドが使えるようになる。

compassコマンドは、compass内でのコマンドを引数に渡して使う。

    $ compass help

でコマンドの一覧を参照できる。

また、

    $ compass help <command>

で、コマンドのヘルプも参照可能。

[ドキュメントのリンク](http://compass-style.org/help/tutorials/command-line/)

----

## create

compassのひな形のディレクトリを生成する。

<pre><code data-language="shell">$ compass create &lt;path/to/project&gt;
</code></pre>

![](http://img.skitch.com/20120326-u4a2en5kje85c8ctta5nutmtn.jpg)

※sassやstylesheetsは、createコマンド実行時やconfig.rbの設定を変更することで、別の名前にすることも可能。

----

## compile

config.rbの設定に沿って、SASSのファイルをコンパイルする。

<pre><code data-language="shell">$ compass compile &lt;path/to/project&gt;
</code></pre>

カレントディレクトリが、config.rbを置いているディレクトリの場合は、&lt;path/to/project&gt;は省略可能。

コンパイルは、sassディレクトリのディレクトリ構成と同じ構成で、stylesheetsディレクトリにCSSがコンパイルされる。

----

## watch

sassディレクトリの変更内容をリアルタイムに監視して、変更があったら自動でコンパイルする。

<pre><code data-language="shell">$ compass watch &lt;path/to/project&gt;
</code></pre>

&lt;path/to/project&gt;は、compileコマンド同様の条件で省略可能。

----

## 設定ファイル①

<pre><code data-language="ruby">http_path = "/"
css_dir = "stylesheets"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"
line_comments = false
relative_assets = true
output_style = :expanded
</code></pre>

----

## 設定ファイル②

<div id="tableWrapper" style="width: 100%; ">
    <table id="vsTable">
        <tbody>
        <tr>
            <td class="cat title" style="width: 20%; "></td>
            <td class="title" style="width: 80%; ">
                <div>説明</div>
            </td>
        </tr>
        <tr class="second">
            <td class="cat" style="width: 20%; ">
                <div class="">http_path</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">プロジェクトのドキュメントルートのパスを指定。デフォルトは"/"</div>
            </td>
        </tr>
        <tr>
            <td class="cat" style="width: 20%; ">
                <div class="">css_dir</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">CSSの置き場所をproject_pathからの相対パスで指定。デフォルトは"stylesheets"</div>
            </td>
        </tr>
        <tr>
            <td class="cat" style="width: 20%; ">
                <div class="">css_path</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">CSSの置き場所を絶対パスで指定。デフォルトは&lt;project_path&gt; / &lt;css_dir&gt;になる。</div>
            </td>
        </tr>
        <tr>
            <td class="cat" style="width: 20%; ">
                <div class="">sass_dir</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">SASSの置き場所をproject_pathからの相対パスで指定。デフォルトは"sass"</div>
            </td>
        </tr>
        <tr>
            <td class="cat" style="width: 20%; ">
                <div class="">sass_path</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">SASSの置き場所を絶対パスで指定。デフォルトは&lt;project_path&gt; / &lt;sass_dir&gt;になる。</div>
            </td>
        </tr>
        <tr>
            <td class="cat" style="width: 20%; ">
                <div class="">images_dir</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">画像の置き場所をproject_pathからの相対パスで指定。デフォルトは"images_dir"</div>
            </td>
        </tr>
        <tr>
            <td class="cat" style="width: 20%; ">
                <div class="">images_path</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">画像の置き場所を絶対パスで指定。デフォルトは&lt;project_path&gt; / &lt;images_dir&gt;になる。</div>
            </td>
        </tr>
        <tr>
            <td class="cat" style="width: 20%; ">
                <div class="">output_style</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">CSSのコンパイルスタイルを指定。:nested, :expanded, :compact, :compressedを指定する。</div>
            </td>
        </tr>
        <tr class="second">
            <td class="cat" style="width: 20%; ">
                <div class="">relative_assets</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">
                    CompassのURLヘルパーを使って、リソースファイル（画像やフォントなど）へのURLを指定した場合に、URLをCSSからリソースファイルへの相対パスで指定するか、絶対パスで指定するかを指定。trueの場合は相対パス。falseの場合は、
                    &lt;http_pass&gt; + "/" + XXX_dir（例：images_dir）になる。</http_pas>
                </div>
            </td>
        </tr>
        <tr>
            <td class="cat" style="width: 20%; ">
                <div class="">line_comments</div>
            </td>
            <td style="width: 80%; " class="text">
                <div class="">trueの場合、どのSASSファイルのどのセレクタかコメントを出力する。デフォルトはfalse</div>
            </td>
        </tr>
    </tbody>
    </table>
</div>

詳細は、<http://ispern.droppages.com/CSS/Compass>

----

## CSS3①

Compassでは、CSS3のMixinsが提供されている。

使う側はベンダープレフィックスを気にせず使うことができる。

----

## CSS3②

### 例 border-radiusを使う

#### Sass

<pre><code data-language="css">@import "compass/css3/border-radius";

.box {
    @include border-radius(5px);
}
</code></pre>

#### CSS

<pre><code data-language="css">.box {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border-radius: 5px;
}
</code></pre>

CSS3のMixinsを使うには、@importでCompassが提供している対象のSASSファイルをインポートする必要がある。

@import "compass/css3"でCSS3関連のSASSファイルを全てインポートできる。

----

## CSS3③

### インポートできるCSS3関連のSASSファイル

<div class="box-container"><div>
<ul>
    <li>Appearance</li>
    <li>Background Clip</li>
    <li>Background Origin</li>
    <li>Background Size</li>
    <li>Border Radius</li>
    <li>Box</li>
    <li>Box Shadow</li>
    <li>Box Sizing</li>
    <li>Columns</li>
    <li>Font Face</li>
    <li>Images</li>
    <li>Inline Block</li>
</ul>
</div>
<div>
<ul>
    <li>Opacity</li>
    <li>Text Shadow</li>
    <li>Opacity</li>
    <li>Transform</li>
    <li>Transition</li>
</ul>
</div></div>

* Appearance

詳細は、<http://compass-style.org/reference/compass/css3/>

使い方やMixins毎に使える変数などが載っている。

----

## クロスブラウザ対応のサポート

"compass/support"が保持する変数を変更することで、生成するベンダープレフィックスを決めることができる。

* $experimental-support-for-mozilla: mozillaのCSS3プロパティをサポートするか
* $experimental-support-for-webkit: webkitのCSS3プロパティをサポートするか
* $experimental-support-for-opera: operaのCSS3プロパティをサポートするか
* $experimental-support-for-microsoft: microsoftのCSS3プロパティをサポートするか

iOS/Android対応の場合は、webkitのみでいいので非常にうれしい機能。

他にもIE6,7,8でのCSSハックの有無などもある。

<http://compass-style.org/reference/compass/support/>