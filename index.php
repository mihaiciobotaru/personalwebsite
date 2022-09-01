<?php

$routes = [];

route('', function () {
  readfile("./html/index.html");
});

route('/sha', function () {
  readfile("./html/sha_article.html");
});

route('/des', function () {
  readfile("./html/des_article.html");
});

route('/rsa', function () {
  readfile("./html/rsa_article.html");
});

route('/security', function () {
  readfile("./html/security_articles.html");
});

route('/sitemap', function () {
  readfile("./sitemap.xml");
});

route('/', function () {
  readfile("./html/index.html");
});

route('/home', function () {
  readfile("./html/index.html");
});

route('/error', function () {
  readfile("./html/error.html");
});

route('/about', function () {
	readfile("./html/about.html");
});

route('/in-works', function () {
	readfile("./html/inworks.html");
});

route('/contact', function () {
	readfile("./html/contact.html");
});

route('/hire-me', function () {
	readfile("./html/hireme.html");
});

route('/portfolio', function () {
	readfile("./html/portfolio.html");
});

route('/towing-website', function () {
	readfile("./html/towing-website_article.html");
});

route('/stamp-worldnt', function () {
	readfile("./html/stampworld_article.html");
});

route('/genetic-algorithms', function () {
	readfile("./html/genetic-algorithms_article.html");
});

route('/electron', function () {
	readfile("./html/electron_article.html");
});

route('/chess-game', function () {
	readfile("./html/chess-game_article.html");
});

route('/arduino', function () {
	readfile("./html/arduino_article.html");
});

route('/sienamarketing', function () {
	readfile("./html/siena_article.html");
});

route('/mihaiwebsite', function () {
	readfile("./html/mihaiweb_article.html");
});

function route(string $path, callable $callback) {
  global $routes;
  $routes[$path] = $callback;
}

run();

function run() {
  global $routes;
  $uri = $_SERVER['REQUEST_URI'];
  $found = false;
  foreach ($routes as $path => $callback) {
    if ($path !== $uri) continue;

    $found = true;
    $callback();
  }

  if (!$found) {
    $notFoundCallback = $routes['/error'];
	  readfile("./html/error.html");
    //$notFoundCallback();
  }
}