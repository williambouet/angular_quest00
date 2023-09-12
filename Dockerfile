# Étape 1 : Build de l'application Angular
FROM node:18 as build


# Étape 2 : Configuration de l'environnement de production
# FROM nginx:alpine
# COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]