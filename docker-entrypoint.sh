#!/bin/sh
# Function to remove the symlink
cleanup() {
    echo "Container stopped, cleaning up symlink..."
    rm -f /app/node_modules/@futurenostics/components
}

# Trap EXIT signal and call the cleanup function
trap cleanup EXIT

# Remove the existing @fn/components directory
rm -rf /app/node_modules/@futurenostics/components

# Ensure the target directory exists
mkdir -p /app/node_modules/@futurenostics


# Create the symlink
ln -s /app/local-fn-components /app/node_modules/@futurenostics/components

# Execute the command specified as CMD in Dockerfile
exec "$@"
