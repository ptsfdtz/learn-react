# Learning React

This is the learning section of the React tutorial.

## Prerequisites

Before starting with React, it is important to have a good understanding of HTML, CSS, and JavaScript. It is also recommended to have a basic understanding of React concepts such as components, props, and state.

## Getting Started

### react 组件分类：

组件首字母需要大写。

1. 函数组件

```jsx
function helloWorld() {
    return <div>hello world</div>;
}
```

2. 类组件

类组建需要继承 `React.Component` 类，并实现 `render()` 方法。

首字母需要大写。

```jsx
class Hello extends React.Component {
    reander() {
        return <div>hello world</div>;

    }
}
```
### react jsx 语法：

组件 编译转化为 `React.createElement()` 对象比如：

```jsx
<div>hello world</div>
```
不借助 JSX 语法，也可以直接使用 `React.createElement()` 方法创建组件。

```jsx
React.createElement('div', [], 'hello world') // []中可以传入props
```
最后，组件渲染到页面上。

