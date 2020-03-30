# <%= project_name %>
> <%= description %>

## installation
```rb
# from gem
gem '<%= project_name %>'
# from git
gem '<%= project_name %>', git: 'git@github.com:afeiship/<%= project_name %>.git'
```

## usage
```rb
<%= NsName %>::<%= ShortName %>::hello

# hello world
```

## build/publish
```shell
# build
gem build <%= project_name %>.gemspec

# publish
gem push <%= project_name %>-0.1.0.gem
```

## rspec
- https://rspec.info/
