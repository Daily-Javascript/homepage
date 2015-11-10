---
title: 'Plop and Selectize'
date: '2015-09-25'
author: ramon
template: article.jade
---

Plop (GitHub: [amwmedia/plop](https://github.com/amwmedia/plop), License: MIT, npm: plop)

Plop is a command line tool that helps you introduce uniformity to your team by generating new modules, files or even documentation pages.
The problem it tries to solve is one that we all must have. You have a project which is nicely structured. Lets say this is our pages folder;

    |-- Pages
        |-- HomePage
            |-- HomePage.jsx
            |-- config.json
            |-- styles.css

What we need to do is add a new page. Normally we would do is copy the `HomePage` folder and walk through the files and what is needed. This will cost you some time and slow you down.

#### Plop to the rescue

By defining how modules, pages or components should look before hand you could write a template for it.
By using [handlebars](http://handlebarsjs.com/) it lets you set the values you would normally change by hand.

Here is an example template file

```
class {{ properCase name }} extends React.Component {
  render(){
    return <div className='{{ name }}'>Newly generated Component {{ name }}</div>
  }
}

```
To fill up this template I will need a `plopfile` which would look like this
```javascript
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Generate a React Component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What should it be called?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }],
        actions: [{
            type: 'add',
            path: 'src/Components/{{properCase name}}.jsx',
            templateFile: 'component.txt'
        }]
    });
}
```

Now you could call `plop` to select it from a list of generators or `plop <generator>` to call it directly.

What I love about this tool is the size of it. In contrast with Yeoman which is great for initialization of a codebase but after that you are still copying files, Plop is designed to work in throughout the life entire cycle of a project.

### React Selectize

React Selectize (GitHub: [furqanZafar/react-selectize](https://github.com/furqanZafar/react-selectize), License: Apache 2.0, npm: react-selectize)

React Selectize is a stateless Select component for ReactJS, which provides a platform for a more developer friendly SimpleSelect & MultiSelect component.
<img src="https://camo.githubusercontent.com/251a1a6254a1a1c46074c79d7c68ec4108e0fbbe/687474703a2f2f692e696d6775722e636f6d2f72526d7566786d2e676966" style="max-width: 320px; width: 100%; position:static;">

Getting it to work was surprisingly simple. Here is my example

```javascript
import React from 'react';
import ReactSelectize from 'react-selectize'
const SimpleSelect = React.createFactory(ReactSelectize.SimpleSelect);
const MultiSelect = React.createFactory(ReactSelectize.MultiSelect);

<SimpleSelect
    placeholder = "Select a food"
    onValueChange = {(value, callback) => {
        alert(value);
        callback();
    }}
    >
    <option value = "pizza">pizza</option>
    <option value = "kebab">kebab</option>
    <option value = "donut">donut</option>
</SimpleSelect>

<MultiSelect
    placeholder = "Select foods"
    options = ["pizza", "kebab", "donut"].map(function(food){
        return {label: food, value: food};
    });
    onValuesChange = {function(values, callback){
        alert(values);
        callback();
    }}
/>
```

What I love about this component is the ease of the setup and the flexibility and compactness of the API.
