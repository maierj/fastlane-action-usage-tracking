'use strict';

const functions = require('firebase-functions');
const {Firestore, Timestamp} = require('@google-cloud/firestore');

exports.registerActionRun = functions.https.onRequest((req, res) => {
	const firestore = new Firestore({
		projectId: "github-fastlane-action"
	});

	firestore.collection('action-runs').add({
		runnerOS: req.body.runnerOS,
		repository: req.body.repository,
		usesOptions: req.body.usesOptions === "true",
		usesSubdirectory: req.body.usesSubdirectory === "true",
		usesBundleInstallPath: req.body.usesBundleInstallPath === "true",
		created: Timestamp.fromDate(new Date())
	}).then(ref => {
		console.log('Added document with ID: ', ref.id);
		res.end();
	}).catch(err => {
		console.log("Adding document failed: " + err);
		res.end();
	});
});
