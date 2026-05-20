# AI 编程备忘录

## 思路

1. 我用自然语言向 AI 描述需求。
2. AI 书写代码。
3. 我用 Git 来审阅代码，如果不满意就手动微调或让 AI 重写。

## 工具

- coding agent: [opencode](https://opencode.ai/docs/zh-cn/).
- AI 供应商：Google, Anthropic, DeepSeek...

## 实操

### 1. 配置 AI 供应商及选择模型

#### 1.1. 打开 opencode TUI 界面

```bash
opencode
```

#### 1.2. 选择 AI 供应商

```bash
/connect
```

#### 1.3. 选择大语言模型

```bash
/models
```

### 2. 创建由 AI 管理的项目

```bash
/init
```

这个命令是创建或更新规则文件，  
其中的内容会被纳入大语言模型的上下文，以避免 AI 自由发挥。

### 3. 在 Plan 模式中和 AI 讨论实施细节

这个模式是只读的，不会修改文件。

### 4. 敲定后切换到 Build 模式中让 AI 执行

如果在 Plan 模式中让 AI 执行，会提示切换到 Build 再说执行。

### 5. 人工执行审阅

到此为一轮循环，没问题的话就 `git commit` 提交，  
有小问题的话就手动修改，有大问题的话让 AI 修改。
