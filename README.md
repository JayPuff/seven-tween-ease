# Seven Tween Ease

Easing functions for seven tween or whatever you might need them for


# Installation
Installing Package
```javascript
npm install -D seven-tween-ease
```

Importing in node
```javascript
let sevenTweenEase = require('seven-tween-ease')
```

Importing in Webpack
```javascript
import sevenTweenEase from 'seven-tween-ease'
```

Importing through script tag  
*To be found in the release folder*
```html
<script type="text/javascript" src="seven-tween-ease.min.js"> 
```


# Usage

Access the tweening functions and use them as you want or to overwrite seven-tweens _easeFunctions property. If you are using it for seven-tween, you can also just use the plugin method.

```javascript
// Seven Tween Usage
sevenTweenEase.plugin(sevenTween)
// OR
sevenTween._easeFunctions = sevenTweenEase.easeFunctions

// Generic usage for other purposes.
let easeFunctions = sevenTweenEase.easeFunctions
let elasticOut = easeFunctions.easeOutElastic
let exponentialInOut = easeFunctions['easeInOutExpo']
```

# Ease Function parameters

All the supplied functions take the following parameters: (t, b, c ,d) where:  
 - t = total time ellapsed of tween.
 - b = initial tween value
 - c = difference from initial tween value and the final tween value
 - d = total duration of tween

