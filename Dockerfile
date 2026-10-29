FROM nginx:alpine

# Copy web files to default nginx html directory
COPY . /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose default Cloud Run port
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
