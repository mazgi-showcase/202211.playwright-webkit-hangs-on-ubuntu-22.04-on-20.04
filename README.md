# Demo: Playwright WebKit Hangs on Ubuntu 22.04 Container on Ubuntu 20.04 Host

[![start-stop-playwright](https://github.com/mazgi-showcase/202211.playwright-webkit-hangs-on-ubuntu-22.04-on-20.04/actions/workflows/start-stop-playwright.yml/badge.svg)](https://github.com/mazgi-showcase/202211.playwright-webkit-hangs-on-ubuntu-22.04-on-20.04/actions/workflows/start-stop-playwright.yml)  
:point_up: Is the action didn't successful? JUST AS PLANNED :new_moon_with_face:

WebKit will hang in the specific combination if you use WebKit with PlayWright, Docker, and Ubuntu.  
This repository is a demo repository for that behavior.  
Please check the results of GitHub Actions.

| Host Ubuntu | Docker Base Ubuntu | Does WebKit Work?      |
| ----------- | ------------------ | ---------------------- |
| 20.04       | 20.04              | :white_check_mark: Yes |
| 20.04       | 22.04              | :no_entry_sign: No     |
| 22.04       | 20.04              | :white_check_mark: Yes |
| 22.04       | 22.04              | :white_check_mark: Yes |

See also https://github.com/microsoft/playwright/issues/15764

## How to Use

<u>Docker and [Docker Compose](https://docs.docker.com/compose/)</u> are needed, that's all.

## How to Run on Your Local

### Step 1: Write out your IDs and information in the .env file

:information_source: If you are using Linux, write out UID and GID into the `.env` file to let that as exported on Docker Compose as environment variables.

```console
test $(uname -s) = 'Linux' && {
  echo -e "GID=$(id -g)"
  echo -e "UID=$(id -u)"
} >> .env || :
```

### Step 2: Start services via Docker Compose

You start Docker Compose services/containers as below.

```console
docker compose up webkit-driver-u22.04-n18
```

Now you are able to run the test as below.

```console
docker compose exec webkit-driver-u22.04-n18 npm run test
```
