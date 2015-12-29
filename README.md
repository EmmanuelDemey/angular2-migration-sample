This demo has been used for many conferences : 
- Technozaure (25th of September, Zenika Nord)
- Chti JUG (29th of September, Lille)
- Kaiz'n Day (8th of October, Paris)

# How to do the migration from an AngularJS 1 application into Angular2 

The main goal of this project is to describe how can migrate an AngularJS 1 application into Angular2. Some new features will be added in the future, in order to explain how to migrate everything from one version to the other. 

## Define one component per file (step1)

One of the best practice when developing AngularJS application, is to define one AngularJS component (service, controller, directive, filter) per file. 
The first task we have to do with this simple appication is to move all AngularJS into a specific file, and import these files in the `index.html` file. 

We will also define a specific module for each component we will implement : `brewery.directive`, `brewery.service` and `brewery.filter`
## Use ControllerAs and bindToController feature (step2)

In Angular2, will use directly JavaScript Object, in which we will add properties/functions thanks to the `this` keyword. In AngularJS 1 application, we can do the same kind of thing thanks to the `controllerAs` and `bindToController` features. 

## Use the Component First Pattern (step3)

In Angular2, everything is component, even the main element of the application. We can start using the same pattern in AngularJS 1. We just need to create a new component, let's say `app`, with a specific controller similar to the previous `BreweryCtrl` controller. 

## Declare services with the `service` method (step4)

One other small tip, when creating services, we should : 
- first we always the same method : service/factory in order to have the syntax everywhere
- Prefer the use of `service`, because we will manipulate directly the service object by adding properties/methods to the `this` object like in Angular 2

At the same time, you shoule only use the simple DI sytax (via function parameters) and use the ngAnnotate plugin in order to manage issues after minification.

## Right now our AngularJS 1 application is ready for the migration. (step5)

We will describe in this part we can convert all our AngularJS 1 components into Angular 2. 

### Generate a new Angular2 thanks to angular-cli

```shell
ng new ng2
```

### Copy and Rename all files with the `.ts` extension in this new project

### Update the implentation of the Service

### Update the implentation of the Filter

### Update the implentation of the Beer Component

### Update the implentation of the App Component
