# react-ie6
fake ie6 component for react

## usage
requires react and webpack to be installed in your repo along with url-loader
and file-loader

add react-ie6 to your repo, then make sure you've got the following rule in your
webpack config or really anything to handle requiring .png files:
```
{ test: /\.(jpg|png)$/, loader: 'url-loader?limit=10000' }
```

then require it and use it as a component like normal
```
import IE6Frame from 'react-ie6'

<IE6Frame title='Cool IE6 Window' url='http://example.com'>
  <h1>Welcome to Internet Explorer 6!</h1>
</IE6Frame>
```
