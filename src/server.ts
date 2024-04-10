import { spawn } from 'child_process';
import { Elysia } from 'elysia';

// https://hono.dev/
// https://elysiajs.com/at-glance.html

const port = 4000;
const app = new Elysia()
  .get('/', () => 'Hello Elysia')
  .get('/user/:id', ({ params: { id } }) => id)
  .post('/form', ({ body }) => body)
  .get('/python', pythonRequest)
  .listen(port);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);

async function pythonRequest() {
  const args = ['1', '2'];
  const pythonPath = './python/index.py';
  const result = await callPythonFunction(pythonPath, args);
  return { result };
}

async function callPythonFunction(path: string, args: string[]) {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', [path, ...args]);
    pythonProcess.stdout.on('data', (data) => resolve(data.toString()));
    pythonProcess.stderr.on('data', (data) => reject(data.toString()));
  });
}
