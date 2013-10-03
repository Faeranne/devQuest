mocha_options=--compilers coffee:coffee-script

build:
	coffee -j engine.coffee -c engine/
clean:
	rm output/*
test:
	mocha $(mocha_options) tests/
