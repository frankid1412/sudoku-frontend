### Setup Development Environment

1. Install dependency

```
npm install
```

2. Compile

```
npm run build
```

3. Run unit test

```
npm test

```

4. Start app

```
npm start
```

5. check `localhost:3000/health` for backend connection

### PR prerequisite

Ensure the following tasks are completed.

1. `npm run build`: return `Compiled successfully.`

2. `npm test`: all unit test passed

3. Health page shows `server is running` when backend server is running

### Build Docker file for prod

```
docker build -t frontend-sudoku -f Dockerfile.prod .
```

```
docker run -d -p 3000:3000 frontend-sudoku
```
