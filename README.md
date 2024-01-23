# Events_Nestjs_Microservices (Scandinaviatech) 🚀
### Overview 🌟
This repository contains the implementation of three microservices:
- **Microservice 1 (Event Publisher)**: Publishes an event every second to the RabbitMQ broker.
- **Microservice 2 (Event Receiver & Data Provider):** 
    - Consumes events from the RabbitMQ broker published by the first microservice and inserts each received event into the database.
    - Exposes an RPC through RabbitMQ to fetch the most recent 10 published events.
- **Microservice 3 (Event Receiver & API):**
    - Consumes events from the RabbitMQ broker published by the first microservice and logs them into the console.
    - Exposes an HTTP endpoint allowing clients to fetch the most recent 10 published events from the second microservice.

### Prerequisites 📋
In order to run the test you need to have **Docker** & **Docker Compose** installed in your OS.

### Run 🚀
run the following command in the root of the project: `docker-compose up --build --no-attach rabbitmq --no-attach mongodb`
Wait a little bit until all images are ready (getting a cup of coffee is a good choice ☕️👨‍💻)
> **NOTE** that `--no-attach rabbitmq --no-attach mongodb` are just to exclude rabbitmq and mongodb logs from `docker-compose` logs.

In order to get the most recent 10 published events, make a `Get` Request using **Postman** or your browser by using `localhost:3002/event`

### Notes
-   **Horizontal Scaling:** This is achieved by provisioning 3 instances of the Second Microservice, working in parallel. since  each instance binds to the same named queue it receives messages in a round robin fashion which achives **Load Balancing.** This pattern is known as **Competing Consumers**
-   **Libraries** are used for modules that are shared across multiple apps in the **Monorepo**.
-  **Logs:** Once instances start running, you will see the logs of each instance and you can track what events are handled and logs.


### Tech Stack 🛠️

- **NestJS**
- **RabbitMQ**
- **MongoDB**
- **Docker & Docker Compose**


### Contact 📬
- Email: [akhateeb175@gmail.com]
