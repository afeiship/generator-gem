'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('@feizheng/yeoman-generator-helper');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the striking ' + chalk.red('generator-gem') + ' generator!'));

    var prompts = [
      {
        type: 'input',
        name: 'project_name',
        message: 'Your project_name?',
        default: yoHelper.discoverRoot
      },
      {
        type: 'input',
        name: 'ns_name',
        message: 'Your namespace name?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description?'
      }
    ];

    return this.prompt(prompts).then(
      function(props) {
        // To access props later use this.props.someAnswer;
        props.short_name = yoHelper.shortName();
        this.props = props;
        yoHelper.rewriteProps(props);
      }.bind(this)
    );
  }

  writing() {
    const { project_name, short_name, ns_name } = this.props;
    yoHelper.renameBy(this, (path) => {
      path.basename = path.basename.replace('templates', project_name);
      path.basename = path.basename.replace('tmpl', short_name);
      path.dirname = path.dirname.replace('templates', ns_name);
      return path;
    });
    this.fs.copyTpl(
      this.templatePath('{.*,*,bin/*,lib/**/*}'),
      this.destinationPath('.'),
      this.props
    );
  }

  end() {
    console.log('Enjoy codeing ~ :)');
  }
};
