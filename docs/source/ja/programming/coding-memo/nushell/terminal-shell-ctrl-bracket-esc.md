# Shell の vi モードで左角括弧キーをマッピングする（`Ctrl + [` -> `Esc`）

## 概要

Windows Terminal の設定で `Ctrl + [` を Esc キーにマッピングしても vi 入力モードを終了できない。  
Shell の設定を変更したところ成功したため、本記事ではよく使う Nushell と PowerShell の設定を紹介する。

## PowerShell

```PowerShell
# PSReadLine のモードを設定する（Windows 11 標準の PowerShell で使用可能）。
Set-PSReadLineOption -EditMode vi

# 1. コンピューター内部では、キー押下は「物理スキャンコード -> 仮想キーコード -> 文字コード」の変換を経る。
# 2. "Ctrl+[" と記述すると、PowerShell はシステムによって文字 `[` に「翻訳」される入力を探そうとするが、
#    何らかのターミナル互換性の問題でこの翻訳が「文字化け」するか、PSReadLine の既定文字列に一致せず、
#    その結果、生の制御シーケンス `^[` がそのまま画面に出力されてしまう。
# 3. `[Console]::ReadKey()` で調べると、`[` の仮想キーコードは `Oem4` であり、直接バインドすれば有効になる。
# 4. `[Microsoft.PowerShell.PSConsoleReadLine]::ShowKeyBindings()` でキー割り当てを出力できる。
Set-PSReadLineKeyHandler -Chord "Ctrl+Oem4" -ViMode Insert -Function ViCommandMode
```

## Nushell

```nu
# - keybindings で設定可能な属性値を確認する： `keybindings list --<property-for-filter>`
# - キー入力を監視する：`keybindings listen`
#
# See: <https://www.nushell.sh/blog/2025-09-02-nushell_0_107_0.html#new-keybinding-vichangemode-16327-toc>
# See: <https://www.nushell.sh/book/line_editor.html#send-type>
$env.config.keybindings ++= [
    {
        name: ctrl_left_bracket_to_escape
        modifier: Control
        keycode: "char_["
        mode: [vi_insert]
        event: [
            { send: SwitchMode, mode: vi_normal },
        ]
    }
]
```
