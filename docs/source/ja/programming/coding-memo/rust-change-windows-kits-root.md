# Rust | Widnow Kits (SDK) インストールパスの修正

## 問題記述

Windows で Rust をインストールする際に Visual Studio で C++ desktop development パッケージのインストールが要求される。Rust がその中の Windows SDK を依存しているからだ。しかしこの方法ではデフォルトのインストールしかできない。Windows SDK のデフォルトのインストールではパス環境を汚染してしまう。

これは Rust 特有の問題ではなく、もし貴方が C++ で開発しても同じ問題に遭う。

## 解決案

先ず手動でWindows SDK をインストールすべき。インストーラーは Window の [HP][windowsHome] でダウンロードできる。しかし、実行したらデフォルトのインストールパスの修正が許されていない。ここはレジストリの中の Windows Kits のインストールパスを変えないといけない。

レジストリの修正後、Windows SDK のインストーラーが修正後のパスをデフォルトパスとして認識する。インストールの続きをして、完成後に Windows Kits ディレクトリのパスはレジストリ修正後のパスと一致するはず。

最初は手動で Windows Kits ディレクトリを移動しようとしたが、Rust の命令を実行したら `Link.exe` が見つからないというエラーが出た。レジストリを修正して、Visual Studio でもう一度 C++ desktop development をインストールしても `kernel32.lib` が開けないというエラーが出る。最後に前述のやり方で成功した。

### 参考資料

- [change windows kit common installation path](https://stackoverflow.com/questions/44801241/change-windows-kit-common-installation-path)

## 操作フロー

1. win + R を実行し、regedit でレジストリを開く。
2. `Computer\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows Kits\Installed Roots` を見つけ、選択する。存在しなければ手動で作成する。
3. `KitsRoot10` を希望のパスに修正する。似たようなプロパティが存在する場合は全部修正する必要がある。
4. Windows [HP][windowsHome] で Windows SDK のインストーラーをダウンロードする。
5. インストーラーを開いて Windows SDK をインストールする。この時にデフォルトのインストールパスはレジストリの修正後のパスになっているはず。
6. インストールが完了したら古い SDK を削除することを推奨する。
7. Rust 命令を実行して正常の動作するかを確認する。

<!-- リンクの変数 -->

[windowsHome]: https://developer.microsoft.com/en-us/windows/downloads/windows-sdk/
