var name = '';
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Article template',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'repo name?',
            validate: function (value) {
                if ((/.+/).test(value)) { name = value; return true;  }
                return 'name is required';
            }
        }],
        actions: [{
            type: 'add',
            path: 'contents/articles/articles/'+name.split('/')[1]+'/'+name.split('/')[0]+'.js',
            templateFile: 'scaffolds/post.template'
        }]
    });

    plop.setGenerator('state', {
        description: 'state template',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'state name?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }],
        actions: [{
            type: 'add',
            path: 'src/states/{{properCase name}}.js',
            templateFile: 'scaffolds/state.template'
        }]
    });

};
