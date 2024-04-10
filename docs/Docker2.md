# serverless docker template

```sh
serverless create --template aws-python-docker --path aws-python-docker
serverless create --template aws-nodejs-docker --path aws-nodejs-docker-demo
```

# offline with flask

http://localhost:8080/2015-03-31/functions/function/invocations

```
pipenv install
pipenv shell
python offline.py
```


# offline with docker

http://localhost:8080/2015-03-31/functions/function/invocations
```sh
docker compose up --build
```

# online

```sh
sls deploy 
sls info # show yor virtual address
```

body exemple
```json
{
  "Veículo": "3/4",
  "Implemento": "Baú",
  "Carga": "FRACIONADA",
  "Valor viagem": "210.0",
  "Latitude contrato": "-26.944442",
  "Longitude contrato": "-48.719322"
}
```