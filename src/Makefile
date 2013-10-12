mocha_options=--compilers coffee:coffee-script

build:
	coffee -j engine.coffee -c -o ../client/js/ coffee/
dev:
	coffee -j engine.coffee -c -b -o ../client/js/ coffee/
clean:
	rm engine.js
test:
	mocha $(mocha_options) tests/
