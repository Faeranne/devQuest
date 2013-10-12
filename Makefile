.PHONY : build clean test js-build js-clean js-test data-build data-clean

build: js-build data-build
clean: js-clean data-clean
test: js-test

js-build:
	$(MAKE) build -C client/js

data-build:
	$(MAKE) build -C assets/maps 

js-clean:
	$(MAKE) clean -C client/js

data-clean:
	$(MAKE) clean -C assets/maps

js-test:
	$(MAKE) test -C client/js

devserver:
	cd client && python -m SimpleHTTPServer

dev-js:
	$(MAKE) dev -C client/js
