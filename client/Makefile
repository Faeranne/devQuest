.PHONY : build clean test js-build js-clean js-test data-build data-clean

build: js-build data-build
clean: js-clean data-clean
test: js-test

js-build:
	$(MAKE) build -C js

data-build:
	$(MAKE) build -C data

js-clean:
	$(MAKE) clean -C js

data-clean:
	$(MAKE) clean -C data

js-test:
	$(MAKE) test -C js
