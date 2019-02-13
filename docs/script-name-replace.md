# Rename name of project script

You need to change NEW_NAME variable.

On linux:
```sh
  NEW_NAME=<new-name-of-project>
  git grep -l 'react-components-lib-boilerplate' | xargs sed -i "s/react-components-lib-boilerplate/$NEW_NAME/g"
```

On MacOS:
```sh
  NEW_NAME=<new-name-of-project>
  git grep -l 'react-components-lib-boilerplate' | xargs sed -i '' -e 's/react-components-lib-boilerplate/$NEW_NAME/g'
```
