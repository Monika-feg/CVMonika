#!/bin/bash

# Generate APP_KEY if missing or incomplete
# This script runs during container startup and ensures we have a valid Laravel APP_KEY

set -e

# Check if APP_KEY is missing or just "base64:"
if [[ -z "$APP_KEY" || "$APP_KEY" == "base64:" ]]; then
    echo "🔑 APP_KEY is missing or incomplete. Generating a new one..."

    # Generate a secure APP_KEY using the same method as Coolify
    GENERATED_KEY="base64:$(openssl rand -base64 32)"

    # Export for current session
    export APP_KEY="$GENERATED_KEY"

    echo "✅ Generated APP_KEY generated (redacted)"
    echo "🔒 This key will be used for encryption/decryption in Laravel"

    # Optional: Write to a persistent location if you have a volume mounted
    if [[ -w "/var/www/html/.env" ]]; then
        echo "📝 Updating .env file with generated APP_KEY..."
        if grep -q "^APP_KEY=" /var/www/html/.env; then
            sed -i "s|^APP_KEY=.*|APP_KEY=$GENERATED_KEY|" /var/www/html/.env
        else
            echo "APP_KEY=$GENERATED_KEY" >> /var/www/html/.env
        fi
    fi
else
    echo "✅ APP_KEY is already set: ${APP_KEY:0:15}..."
fi
