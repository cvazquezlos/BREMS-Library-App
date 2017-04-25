#!/bin/sh

/bin/sed -i "s|https://localhost:8443/api/|https://${BASE_URL}:8443/api/|" /usr/share/nginx/html/main.bundle.js

nginx -g 'daemon off;'