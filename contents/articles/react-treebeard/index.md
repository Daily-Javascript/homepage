---
title: 'React Treebeard'
date: '2015-11-12'
author: ramon
template: article.jade
---

React Treebeard (GitHub: [alexcurtis/react-treebeard](https://github.com/alexcurtis/react-treebeard), License: MIT, npm: react-treebeard)

Ever come a cross a task where you needed to quickly make a bunch of data explorable or where you needed to visualize a massive object?
Now there is React Treebeard which gives you a tree with collapsed leafs.

So let's say we have a batch of data like this:

```javascript
const myData = {
    name: 'root',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                {
                    name: 'child',
                    terminal: true
                }
            ]
        },
        {
            name: 'loading parent',
            loading: true
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        {
                            name: 'nested child',
                            terminal: true
                        }
                    ]
                }
            ]
        }
    ]
};

```
Then our component would look something like this:

```javascript
function TreeExample(props){
    return (
        <Treebeard
            data={props.data}
            onToggle={onToggle}
        />
    );
}

const onToggle = () => {
    // Implement custom behavior
};

const shell = document.querySelector('#shell');
ReactDOM.render(<TreeExample data={ myData }/>, shell);
```
With the decorators it's very easy for you to use your own Node Header, Toggle and Loading components.
This would look something like this:

```javascript
let decorators = {
    Loading: (props) => {
        return (
            <div style={props.style}>
                loading...
            </div>
        );
    },
    Toggle: (props) => {
        return (
            <div style={props.style}>
                <svg height={props.height} width={props.width}>
                    // Vector Toggle Here
                </svg>
            </div>
        );
    },
    Header: (props) => {
        return (
            <div style={props.style}>
                {props.node.name}
            </div>
        );
    }
};

<Treebeard data={...} decorators={decorators}/>
```

If you wanna see what this all looks like while running in the browser, check out the [demo page](http://alexcurtis.github.io/react-treebeard/#) provided by the developer.
