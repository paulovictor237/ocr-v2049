# Local Test

```sh
http://localhost:8080/2015-03-31/functions/function/invocations
```

```json
{
  "resource": "/{proxy+}",
  "path": "/",
  "httpMethod": "GET",
  "headers": {
    "Content-Type": "application/json"
  },
  "queryStringParameters": {
    "param1": "value1",
    "param2": "value2"
  },
  "body": "{}"
}
```

# Docker Commands

```sh
# Compilar com Docker Compose
docker compose up --build
# Compilar com Docker
docker build -t python-flask-sls .
docker run -p --rm 8080:8080 python-flask-sls
# Executar em modo interativo
docker run -it --rm --entrypoint /bin/bash python-flask-sls
```

# Neofetch

```sh
             `-/oydNNdyo:.`                root@c76d04d78b48 
      `.:+shmMMMMMMMMMMMMMMmhs+:.`         ----------------- 
    -+hNNMMMMMMMMMMMMMMMMMMMMMMNNho-       OS: Amazon Linux 2 x86_64 
.``      -/+shmNNMMMMMMNNmhs+/-      ``.   Host: Inspiron 15 5510 
dNmhs+:.       `.:/oo/:.`       .:+shmNd   Kernel: 6.5.0-18-generic 
dMMMMMMMNdhs+:..        ..:+shdNMMMMMMMd   Uptime: 24 mins 
dMMMMMMMMMMMMMMNds    odNMMMMMMMMMMMMMMd   Packages: 176 (rpm) 
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd   Shell: bash 4.2.46 
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd   Resolution: 1920x1080 
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd   CPU: 11th Gen Intel i7-11390H (8) @ 5.000GHz 
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd   Memory: 5947MiB / 15728MiB 
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd                           
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd                           
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd
dMMMMMMMMMMMMMMMMh    yMMMMMMMMMMMMMMMMd
.:+ydNMMMMMMMMMMMh    yMMMMMMMMMMMNdy+:.
     `.:+shNMMMMMh    yMMMMMNhs+:``
            `-+shy    shs+:`
```
