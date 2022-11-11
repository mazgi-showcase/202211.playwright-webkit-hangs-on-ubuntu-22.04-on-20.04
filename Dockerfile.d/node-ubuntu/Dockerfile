ARG UBUNTU_VERSION=22.04
FROM ubuntu:${UBUNTU_VERSION}
LABEL maintainer="docker@mazgi.com"
ENV DEBIAN_FRONTEND=noninteractive
ARG GID=0
ARG NODE_VERSION=18
ARG UID=0
ENV GID=${GID:-0}
ENV NODE_VERSION=${NODE_VERSION:-18}
ENV UID=${UID:-0}

RUN :\
  : Create the node user and working directory\
  && groupadd --gid ${GID} node || true\
  && useradd --uid ${UID} --gid ${GID} --shell /bin/bash --create-home node\
  && :
RUN :\
  && : Install basic packages\
  && echo 'apt::install-recommends "false";' > /etc/apt/apt.conf.d/no-install-recommends\
  && apt-get update\
  && apt-get install --assume-yes\
  ca-certificates\
  curl\
  && :
RUN :\
  && : Install Node.js ${NODE_VERSION}\
  && curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -\
  && apt-get install -y nodejs\
  && npm install --global npm@latest\
  && :
RUN :\
  && : Install playwright deps\
  && npx playwright install-deps\
  && :
RUN :\
  && : Clean up\
  && apt-get clean autoclean\
  && apt-get autoremove --yes\
  && rm -rf /tmp/*\
  && rm -rf /var/lib/apt/\
  && rm -rf /var/log/*\
  && :
USER node
