FROM node:22-alpine AS build

WORKDIR /workspace

COPY grab-seller-shared-ui ./grab-seller-shared-ui
RUN cd grab-seller-shared-ui \
    && npm ci \
    && npm run build

COPY grab-seller ./grab-seller
RUN cd grab-seller \
    && npm ci \
    && npm run build

FROM nginx:1.27-alpine AS runtime

COPY grab-seller/gateway/nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build /workspace/grab-seller/dist /usr/share/nginx/html

ENV API_UPSTREAM=host.docker.internal:8080 \
    NGINX_ENVSUBST_FILTER=API_UPSTREAM

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/ || exit 1

