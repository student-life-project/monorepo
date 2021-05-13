# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in
# compliance with the License. You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software distributed under the License
# is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
# implied. See the License for the specific language governing permissions and limitations under the
# License.

# FROM node:16.1.0-alpine AS base
FROM alpine:3.13.5 AS base

RUN apk update && apk upgrade && apk add --update --no-cache nodejs npm tini

WORKDIR /root/nest-app

# RUN npm i -g npm

RUN npm install -g yarn

COPY . .

ENTRYPOINT [ "/sbin/tini", "--" ]


FROM base AS builder

RUN yarn

RUN yarn build:common

RUN yarn build:back


FROM base as release

COPY --from=builder . /root/nest-app

EXPOSE 3010

RUN cd packages/backend

CMD yarn start
