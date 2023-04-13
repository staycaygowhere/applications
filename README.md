# Staycay Go Where

The best Staycation application in the nation.

## TODO:

-   [x] Automated Build
-   [x] Automated Publishing (of build artifacts)
-   [ ] Automated Deploy - Note that the method for setting the container registry needs to change to accomodate ECR (was set up for ghcr.io)

## Developing

1. Clone the repository

```
git clone https://github.com/staycaygowhere/applications
```

2. Install to set up `husky` for commit hooks and `turborepo`.

```
npm install
```

3. Change directory to the appropriate service you're developing and view the `README.md` there.

```
cd <service>
```

## Testing Container Locally

To run a docker container of the desired service locally:

```
    docker compose up <service>
```

The `service` corresponds with the service in the `docker-compose.yml`.

Example - Testing the web service:

```
    docker compose up web
```

## Building and pushing Docker containers

The docker compose file reads the `TAG` and `CONTAINER_REGISTRY` from a local `.env` file, in the CI, the tag is
generated from the git commit hash. To run the compose file manually with the desired tag, you need a create a `.env`
file with the desired tag:

```
    TAG="6929" >> .env
```

```
    CONTAINER_REGISTRY="..." >> .env
```

Then, running build will use your tag (e.g. web service would be built with 'ghcr.io/staycaygowhere/web:6929)

```
    docker compose buid
```

You can also push the image to the GitHub Repository:

```
    CR_PAT=<insert_github_personal_access_token_here>
    echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
    docker compose push
```
