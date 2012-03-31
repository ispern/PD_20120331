# ExtJS SDK のパス
$ext_path = "../../lib/ext"

# SASSのパス
sass_path = File.dirname(__FILE__)

# CSSのパス
css_path = File.join(sass_path, "..", "css")

# 画像のパス
images_path = File.join(sass_path, "..", "images")

# コンパイルのスタイル
output_style = :nested

# ExtJSのCompassプラグインをロード
load File.join(File.dirname(__FILE__), $ext_path, 'resources', 'themes')
