# Recursion チーム開発課題: おみくじアプリ

## 概要

「おみくじアプリ」は、Recursionのチーム開発課題として制作されたWebアプリケーションです。このアプリは、ソフトウェア開発に関連する項目（例えば、プログラミング言語、エディタ、データベース、アドバイスなど）をテーマにしたおみくじを提供します。ユーザーがボタンをクリックすると、おみくじの結果がランダムに表示され、ソフトウェア開発に役立つアドバイスやツールが示されます。

## デモ

![ScreenRecording2024-09-20at20 17 54-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c2838cbe-34d9-4649-a7f9-62d287281b59)

## 機能

- おみくじの結果をランダムに表示
- 結果には「運勢」「アドバイス」「ラッキー言語」「ラッキーデータベース」「ラッキーエディタ」が含まれる
- リセットボタンで再度おみくじを引く


## 使用技術一覧

### 言語とフレームワーク

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6)**
- **Bootstrap 5**
  
### その他

- **VSCode**  
  開発環境として使用されるテキストエディタ。

- **Google Chrome**  
  アプリケーションの動作確認やデバッグに使用するウェブブラウザ。


## インストール手順

1. リポジトリをクローンします。

    ```bash
    git clone https://github.com/your-username/your-repository.git
    ```

2. 必要な依存関係をインストールします。依存関係は、BootstrapのCDNを使用しているため、特別なインストールは不要です。

3. `index.html`をブラウザで開きます。

## 使用方法

1. ブラウザで`index.html`を開きます。
2. 「おみくじを引く」ボタンをクリックすると、ランダムなおみくじの結果が表示されます。
3. 結果をリセットするには「もう一度おみくじを引く」ボタンをクリックします。

## ファイル構成

- `index.html`: アプリケーションのメインHTMLファイル
- `style.css`: アプリケーションのスタイルシート
- `js/`
  - `drawOmikuji.js`: おみくじを引くロジック
  - `resetOmikuji.js`: おみくじをリセットするロジック
  - `domUtils.js`: DOM操作に関するユーティリティ関数
  - `omikujiData.js`: おみくじのデータを含むファイル
- `assets/`: 画像やその他のリソースを含むディレクトリ

## コントリビューション

1. フォークして新しいブランチを作成します。
2. 修正を加え、コミットします。
3. プルリクエストを送信します。

「学んだこと」は、チーム開発や技術的な成長の観点からまとめると良いでしょう。具体的には、以下のような項目を含めて書くことができます。

## 学んだこと

1. **チーム開発の重要性**
   - チームメンバーと協力してタスクを分担し、意見を出し合いながら開発を進めるプロセスを経験しました。GitやGitHubを使ったバージョン管理や、プルリクエストを通じたコードレビューの実施によって、共同作業の効率化とコード品質の向上に貢献できました。

2. **モジュール分割と責務の分離**
   - JavaScriptファイルのモジュール化や、DOM操作を専用の関数にまとめることで、コードの再利用性を高め、可読性を向上させました。また、関数の責務を明確にすることで、将来的な拡張や保守がしやすくなりました。

3. **ランダム性とJavaScriptのロジック設計**
   - おみくじの結果をランダムに生成するロジックや、その結果を動的に表示するためのJavaScriptの使い方を深く理解しました。このプロジェクトを通じて、JavaScriptの基礎的な部分を強化することができました。

4. **フィードバックサイクルの大切さ**
   - チームメンバーからのフィードバックを取り入れることで、より効率的で効果的な開発手法を学びました。定期的なミーティングやコードレビューを通じて、自身のコードを改善する機会を得ました。


## 連絡先
[uiuxadeadev](https://github.com/uiuxadeadev)

[mkanehara](https://github.com/mkanehara)


