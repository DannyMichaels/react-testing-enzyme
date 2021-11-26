# react-testing-enzyme

Making a repo with a decent amount of React testing using Enzyme just incase I might get rusty/forget it

### tips

to remove data-test attributes from production: you can use [babel-plugin-react-remove-properties](https://www.npmjs.com/package/babel-plugin-react-remove-properties)

run npm/yarn run eject

and in package.json add this under "babel":

```
    "env": {
      "production": {
        "plugins": [
          [
            "react-remove-properties",
            {
              "properties": [
                "data-test"
              ]
            }
          ]
        ]
      }
    },
```
