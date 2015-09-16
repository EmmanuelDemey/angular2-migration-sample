# How to do the migration from an AngularJS 1 application into Angular2 

The main goal of this project is to describe how can migrate an AngularJS 1 application into Angular2. Some new features will be added in the future, in order to explain how to migrate everything from one version to the other. 

## Défine one component per file (branch step1)

One of the best practive when developing AngularJS application, is to define one AngularJS component (service, controller, directive, filter) per file. 
The first task we have to do with this simple appication is to move all AngularJS into a specific file, and import these files in the index.html file. 


## Use ControllerAs and bindToController feature (branch step2)

In Angular2, will use directly JavaScript Object, in which we will add properties/functions thanks to the `this`keyword. In AngularJS 1 application, we can do the same kind of thing thanks to the `controllerAs` and `bindToController` features. 

## Use the Component First Pattern (branch step3)

In Angular2, everything is component, even the main element of the application. We can start using the same pattern in AngularJS 1. We just need to create a new component, let's say `app`, with a specific controller similar to the previous `BrasserieCtrl` controller. 

## Right now our AngularJS 1 application is ready for th emigration. (branch step4)

We will describe in this part we can convert all our AngularJS 1 components into Angular 2. 

### Install all description file for TypeScript

```shell
tsd install angular2 es6-promise rx rx-lite
```

### Rename all files with the `.ts` extention

### Update the HTML page

One of the solution we can use in development, is to use the SystemJS module in order to be able to use JavaScript modules in the browser. In order to be able to that, we have to update the index.html page in order to import traceur, SystemJS, Angular2 and lazy load the main component we will implement in the next part. 

```javascript
<script src="https://github.jspm.io/jmcriffey/bower-traceur-runtime@0.0.91/traceur-runtime.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/systemjs/0.18.4/system.src.js"></script>
<script>
	System.config({
		defaultJSExtensions: true
	});
</script>
<script src="https://code.angularjs.org/2.0.0-alpha.37/angular2.dev.js"></script>
```
We have also to remove the old `ng-app` directive we used in the previous version. 

### Update the implentation of the Service

### Update the implentation of the Filter

### Update the implentation of the Beer Component

### Update the implentation of the App Component
