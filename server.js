import minimist from 'minimist';
import express from 'express';
import {rps} from "./lib/rpsls.js";
import {rpsls} from "./lib/rpsls.js";

const args = minimist(process.argv.slice(2));
const app = express();
const port = args.port || 5000;

app.get('/app/', (req, res) => {
	res.send('200 OK');
});

app.get('/app/rps/', (req, res) => {
	res.send(rps());
});

app.get('/app/rpsls/', (req, res) => {
	res.send(rpsls());
});

app.get('/app/rps/play/', (req, res) => {
	res.send(rps(shot = (rock|paper|scissors)));
});

app.get('/app/rpsls/play/', (req, res) => {
	res.send(rpsls(shot = (rock|paper|scissors)));
});

app.get('/^\/app\/rpsls\/play\/(rock|paper|scissors)\/?$/', (req, res) => {
	res.send(rpsls());
});

app.get('/^\/app\/rpsls\/play\/(rock|paper|scissors|lizard|spock)\/?$/', (req, res) => {
	res.send(rpsls());
});


app.use((req, res) => {
  res.status(404).send('404 Not Found');
});