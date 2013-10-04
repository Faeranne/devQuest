mocha_options=--compilers coffee:coffee-script

build:
	coffee -j engine.coffee -c engine/
clean:
	rm engine.js
test:
	mocha $(mocha_options) tests/
