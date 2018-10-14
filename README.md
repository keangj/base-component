# base
[![Build Status](https://travis-ci.org/simkimsia/UtilityBehaviors.svg?branch=master)](https://travis-ci.org/simkimsia/UtilityBehaviors)

## 使用

默认使用 border-box

```css
*, *::before, *::after {box-sizing: border-box;}
```

2. 安装
```markdown
npm install --save base-87
```

3. 引入

```js
import { Button } from 'base-87'
import 'base-87/dist/index.css'

export default {
  name: 'app',
  components: {
    Button
  }
}
```