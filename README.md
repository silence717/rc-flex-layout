## rc-flex-layout

基于react和flex的快速布局方式，只需要简单配置就可

### 安装

```bash
npm install rc-flex-layout
```

### 使用

```js
import { HView, VView } from 'rc-flex-layout';

<HView gap={50}>
    <HView width={100} height="100px" bgColor="red" hAlign="center" onClick={this.handleClick.bind(this)}>100</HView>
    <VView width={200} height={200} padding={20} bgColor="blue" gap={10}>
        <div>a</div>
        <div>b</div>
    </VView>
    <HView width={300} height={300} bgColor="green">300</HView>
</HView>
```

### API

#### 公共部分

| 字段       | 说明     | 类型                        | 默认值                  |
| -------- | ------ | ------------------------- | -------------------- |
| width    | 宽度     | string ｜ number           | -                    |
| height   | 高度     | string ｜ number           | -                    |
| gap      | 间隔     | string ｜ number           | -                    |
| padding  | 内间距    | string ｜ number           | -                    |
| flex     | 缩放自动布局 | string ｜ number ｜ boolean |                      |
| overflow | 超出展示   | string                    | auto\|hidden\|scroll |
| bgColor  | 背景色    | string                    | -                    |

#### HView

| 字段     | 说明     | 类型     | 默认值                                                    |
| ------ | ------ | ------ | ------------------------------------------------------ |
| hAlign | 横向内容展示 | string | flex-start｜flex-end｜center｜ space-between｜space-around |
| vAlign | 纵向内容展示 | string | flex-start｜ flex-end｜ center｜ baseline｜ stretch        |

#### VView

| 字段     | 说明     | 类型     | 默认值                                                       |
| ------ | ------ | ------ | --------------------------------------------------------- |
| hAlign | 横向内容展示 | string | flex-start｜ flex-end｜ center｜ baseline｜ stretch           |
| vAlign | 纵向内容展示 | string | flex-start｜flex-end｜center｜    space-between｜space-around |
