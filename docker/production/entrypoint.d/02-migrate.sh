#!/bin/bash

# Run Laravel migrations on container startup (production).
# Retries on failure to tolerate transient DB startup delays.

set -e

MAX_ATTEMPTS=10
BACKOFF_SECONDS=3
attempt=1

echo "🔄 Running database migrations (max ${MAX_ATTEMPTS} attempts)..."

while [ $attempt -le $MAX_ATTEMPTS ]; do
    if (cd /var/www/html && php artisan migrate --force); then
        echo "✅ Migrations completed on attempt ${attempt}"
        exit 0
    fi
    echo "⚠️ Migration attempt ${attempt}/${MAX_ATTEMPTS} failed, retrying in ${BACKOFF_SECONDS}s..."
    attempt=$((attempt + 1))
    if [ $attempt -le $MAX_ATTEMPTS ]; then
        sleep $BACKOFF_SECONDS
    fi
done

echo "❌ Migrations failed after ${MAX_ATTEMPTS} attempts"
exit 1
