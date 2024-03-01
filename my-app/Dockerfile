FROM nginx

# npm빌드는 젠킨스에서 해준다

WORKDIR /app

COPY ./build  /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
