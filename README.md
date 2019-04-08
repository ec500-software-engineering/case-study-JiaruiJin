# EC500 - Spring 2019:  Case Studies: ReactNative 
[ReactNative GitHub](https://github.com/facebook/react-native)  
[ReactNative Official Website](https://facebook.github.io/react-native/)
## 1.Technology and Platform used for development
**What coding languages are used?Do you think the same languages would be used if the project was started today?What languages would you use for the project if starting it today?**    
Javascript and React. And I think they would be useful if the project was started today and I have the following reasons. Firstly, JavaScript has a good interaction with other languages and can supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles as a multi-paradigm language. Secondly, React is a JavaScript library for building user interfaces which can be implemented as a base of developing web or mobile applications. Lastly, React Native uses real native components and APIs to interact with our code which is written in Javascript and React. So you don't need to be expert in Swift, Kotlin or Java. Thus it will be a good choice for me to use them today.  
However, during doing the final project by using React Native, I met some problems which could not be solved after struggling for a long time. Perhaps some basic functions could be developed easily but with the increasing of the complexity of the project, it still need more ability in understanding some basic knowledge in developing mobile applications. So as far as I am concerned, if you are greenhand in developing mobile applications and has a big project in hand, it is better to use traditional method to build it.   
**What build system is used? What build tools / environment are needed to build?**  
### You will need:  
1.Node(8.3 or newer can be downloaded on [official website](https://nodejs.org/zh-cn/))
2.the React Native command line interface which is used for set up, initialization, update and packager. T   
`npm install -g react-native-cli`    
3.Python2(not support Python3 now)  
4.JDK (edition 1.8 only) [JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)   
5.Android Studio: While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.   
The detailed procedures of installing Andorid Studio and other set up can be found [here](https://reactnative.cn/docs/getting-started/)

**What frameworks / libraries are used in the project?**  
In the official package of React Native, I can find the [Libraries](https://github.com/facebook/react-native/tree/master/Libraries).  
For the JavaScript code in the library, you can just **import** it. But for some libraries which are written in native code, you need to add the document into your application to prevent error notification. You can follow the steps below to link your libraries that contain native code:  
1.install a library with native dependencies:  
`$ npm install <library-with-native-dependencies> --save`
2.Link your native dependencies:
`$ react-native link`
Then all ibraries with native dependencies should be successfully linked to your Android or IOS application.

## Testing: describe unit/integration/module tests and the test framework
How are they ensuring the testing is meaningful? Do they have code coverage metrics for example?  
What CI platform(s) are they using (e.g. Travis-CI, AppVeyor)?    
What computing platform combinations are tested on their CI? E.g. Windows 10, Cygwin, Linux, Mac, GCC, Clang  
They mainly use CircleCI as their CI platform just as shown in the figure below.  
**How CircleCI works:**  Every time a developer commit code, it will create a build and autoatically runs the build in a clean container or virtual machine to do the testing job. If the build fails, the developer will receive a notification to fix it. If the build passes, it will be deployed to various environments to accelarate the product going to market faster.
![CircleCI](https://github.com/ec500-software-engineering/case-study-JiaruiJin/blob/master/CircleCI.PNG)

## Software Architecture
![Architecture Diagram](https://github.com/ec500-software-engineering/case-study-JiaruiJin/blob/master/Structure.PNG)  
### Java Layer 
mainly contains some packaged functional modules like UIMangeger, Fresco, OkHttp and so on. The core .jar package is **react-native.jar** which packages plenty of interfaces of upper layer like Module, Registy, bridge and something else.
### C++ Layer
mainly in charge of the connection between Java and JavaScript as well as running JavaScript code. **JavaScriptCore** is pachaged in this layer which is used to process JS. Based on JavaScriptCore, developers can use **ES6** flexibly. **Bridge** contains the core ports for the communication between Java and JS.
### JavaScript Layer
provides various components and toolboxes for developers to use. One this layer, components and module are built on virtual DOM which is written in JS. By using different Renger Engine, we can develope the UI on different platforms.

## Analyze two defects in the project
## Making a demonstration application of the system, your own application showing how the software is used


