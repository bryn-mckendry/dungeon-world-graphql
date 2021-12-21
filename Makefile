dev-up:
	sudo docker-compose -f docker-compose.dev.yml up --build

dev-down:
	sudo docker-compose -f docker-compose.dev.yml down -v

prod-up:
	sudo docker-compose -f docker-compose.prod.yml up --build -d

prod-down:
	sudo docker-compose -f docker-compose.prod.yml down

run-tests:
	sudo docker-compose -f docker-compose.test.yml up --abort-on-container-exit --build ; sudo docker-compose -f docker-compose.test.yml down -v