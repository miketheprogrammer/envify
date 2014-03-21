envify
======

Bind configuration to process.env for easy manipulation of modules that use process.env for configuration. Simplifies or execution line in automated builds.


This simple package is built on top of the work of https://www.npmjs.org/package/config.
Please refer to config's documentation for use.

npm install node-envify

Envify will bind all first level basic types to process.env

    {
      var1: "name" // works and is bound to process.env.var1
      var2: { name: 'beep'} // does not work as process.env automatically coerces to string,
      var3: 12 // works and is bound to process.env.var3  however it is now a string
    }

This is great for modules and codebases that depend on process.env for configuration, however you dont want to clutter up
your shell execution line, or your code by copying config variables into process.env;




[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/miketheprogrammer/envify/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

