set -u
: "$CONTAINER_REGISTRY"
: "$VERSION"
envsubst < ./deploy.yaml | kubectl apply -f -