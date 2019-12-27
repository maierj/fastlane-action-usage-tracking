# GitHub Fastlane action: Usage tracking for Firebase Cloud Functions

This is a utility project that is used to track usage data from the [GitHub Fastlane action](https://github.com/maierj/fastlane-action). It's deployed as a Firebase Cloud Function that exposes a HTTP endpoint that receives usage data at every run of the related action and stores the data in a Cloud Firestore.
