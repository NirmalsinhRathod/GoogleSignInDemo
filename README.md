# GoogleSignIn
Google sign-in authentication is easy to implement for that  just follow the steps as mentioned here
#### Configuration on Google Console
1. open the google developer console https://console.developers.google.com/
2. Create new project and fill the required information
3. Go to the credential from menu and create the credentials for android and ios app
4. For the iOS create OAuth ClientID -> select ios Application -> provide the bundle id and clicked on Create and than copy that id and paste it into your xcode project
in the GoogleService-Info.plist file -> paste that id in to the client iD
5. For Android create API key, select Restricted Key -> select android apps -> Add an item -> Provide the project info like package name and SHA1 (You can check below how to generate the SHA 1)
##### Generate the SHA1 for Debug mode
you can generate it in Android studio
Select the gradle tab -> select root -> android -> signing report -> run 
SHA1 will be print in console.
OR fire the below command in your terminal
``` sh 
$ keytool -exportcert -keystore ~/.android/debug.keystore -list -v
```
#### Installation
Install the dependencies and start the server.

```sh
$ npm install --save react-native-google-signin
```
###### Link the dependencies  with automatic and manual both
Automatic linking for react-native >0.60 and <0.60
```sh
RN < 0.60
$ react-native link react-native-google-signin
```
### iOS Guide
```sh
RN > 0.60
$ cd ios && pod install
```
##### manual linking
1. In Xcode, in the project navigator, right click Libraries ➜ Add Files to [your project's name]
2. Go to node_modules ➜ @react-native-community/google-signin ➜ ios and add RNGoogleSignin.xcodeproj
3. Add libRNGoogleSignin.a to your project's Build Phases ➜ Link Binary With Libraries

#### Google project configuration
1. Get the configuration file, for the setup you can check the link :
https://github.com/react-native-community/react-native-google-signin/blob/master/docs/get-config-file.md
2. Download the GoogleService-Info.plist file from firebase console
#### Xcode configuration
1. In the Xcode, select your project -> open the GoogleService-Info.plist
2. Copy the REVERSED_CLIENT_ID 
3. Paste the REVERSED_CLIENT_ID into the URL type for that
- select your project -> in target select your project and select info tab
- Go to the URL_TYPES and paste that REVERSED_CLIENT_ID into the URL schemes
4. Open the AppDelegate.m file 
- Add this line of code
```sh 
#import <RNGoogleSignin.h>

- (BOOL)application:(UIApplication *)application openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<NSString *,id> *)options {
return [RNGoogleSignin application:application openURL:url options:options];
}
### Android Guide
1. Go to your firebase console and import the project or create new project and download the GoogleService.json file after adding the SHA1
2. Please note that this package requires android gradle plugin of version >= 3, which in turn requires at least gradle 4.1. Android studio should be able to do the upgrade for you.
3. Update the android/build.gradle with
```
buildscript {
ext {
buildToolsVersion = "27.0.3"
minSdkVersion = 16
compileSdkVersion = 27
targetSdkVersion = 26
supportLibVersion = "27.1.1"
googlePlayServicesAuthVersion = "16.0.1" // <--- use this version or newer
}
...
dependencies {
classpath 'com.android.tools.build:gradle:3.1.2' // <--- use this version or newer
classpath 'com.google.gms:google-services:4.1.0' // <--- use this version or newer
}
...
allprojects {
repositories {
mavenLocal()
google() // <--- make sure this is included
jcenter()
maven {
// All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
url "$rootDir/../node_modules/react-native/android"
}
}
}
```
4. Update android/app/build.gradle with
```
dependencies {
implementation fileTree(dir: "libs", include: ["*.jar"])
implementation "com.android.support:appcompat-v7:23.0.1"
implementation "com.facebook.react:react-native:+"
implementation(project(":react-native-google-signin"))
}
apply plugin: 'com.google.gms.google-services' // <--- this should be the last line
```
5. If you used react-native link than you should have this line in your android/settings.gradle file 
``` 
include ':react-native-google-signin', ':app'
project(':react-native-google-signin').projectDir = new File(rootProject.projectDir,'../node_modules/@react-native-community/google-signin/android')
```
6.  Open your MainApplicaiton.Java file from your project
import the package and add 
```  import co.apptailor.googlesignin.RNGoogleSigninPackage;```
Add this line into getPackages()  method
``` new RNGoogleSigninPackage() ```
