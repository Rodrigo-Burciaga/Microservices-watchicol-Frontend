FROM node:8.16.0
MAINTAINER Rodrigo Burciaga
WORKDIR /app
copy . /app
ENV REFRESHED_AT "2019-06-19 02:40"
RUN npm install
EXPOSE 4200
RUN npm install -g @angular/cli@7.3.9
CMD ["npm","start"]