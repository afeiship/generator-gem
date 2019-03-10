'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');

module.exports = class extends Generator {
  prompting(){
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the striking ' + chalk.red('generator-fei-nodejs') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'project_name',
      message: 'Your project_name?',
      default: yoHelper.discoverRoot
    },{
      type:'input',
      name:'description',
      message:'Your project description?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  }

  writing () {
    yoHelper.rewriteProps(this.props);
    yoHelper.rename(this, 'templates', this.props.project_name);
    this._writingTplFiles();
  }

  _writingTplFiles () {
    this.fs.copyTpl(
      this.templatePath('{.*,*,bin/*,lib/**/*}'),
      this.destinationPath('.'),
      this.props
    );
  }

  install () {
    console.log('Enjoy codeing ~ :)');
  }
};
