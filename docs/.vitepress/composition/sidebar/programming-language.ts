import { DefaultTheme } from 'vitepress'

export function useProgrammingLanguageSidebar(): DefaultTheme.Sidebar {
  const ROOT_PATH_CHINESE = '/zh/programming/language/'
  const ROOT_PATH_JAPANESE = '/ja/programming/language/'

  return {
    [ROOT_PATH_CHINESE]: [
      {
        text: '编程 - 编程语言',
        items: [{ text: '回到首页', link: '/zh/' }],
      },
      {
        text: 'JavaScript / TypeScript',
        items: [
          {
            text: 'Node 版本管理工具 fnm',
            link: `${ROOT_PATH_CHINESE}javascript/fnm`,
          },
          {
            text: '包管理工具 pnpm',
            link: `${ROOT_PATH_CHINESE}javascript/pnpm`,
          },
        ],
      },
      {
        text: 'C#',
        collapsed: false,
        items: [
          {
            text: '命令行单元测试 C#（xUnit）',
            link: `${ROOT_PATH_CHINESE}c-sharp/c-sharp_unit-test_command-line`,
          },
        ],
      },
      {
        text: 'Rust',
        collapsed: false,
        items: [
          {
            text: '关于 Rust 的一点看法',
            link: `${ROOT_PATH_CHINESE}rust/rust-thoughts`,
          },
        ],
      },
    ],

    [ROOT_PATH_JAPANESE]: [
      {
        text: 'プログラミング - プログラミング言語',
        items: [
          { text: 'トップに戻る', link: '/ja/' },
          { text: 'プログラミング言語目録', link: ROOT_PATH_JAPANESE },
        ],
      },
      {
        text: 'C#',
        collapsed: false,
        items: [
          {
            text: 'コマンドラインで C# を単体テスト（xUnit）',
            link: `${ROOT_PATH_JAPANESE}c-sharp/c-sharp_unit-test_command-line`,
          },
        ],
      },
    ],
  }
}
