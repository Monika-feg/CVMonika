#!/bin/bash

# Debug Laravel setup issues
# This script runs during container startup to help identify common problems

set -e

echo "🔍 Starting Laravel setup debugging..."

# Check if .env file exists
if [ ! -f "/var/www/html/.env" ]; then
    echo "❌ ERROR: .env file is missing!"
    exit 1
fi

# Check if storage directory is writable
if [ ! -w "/var/www/html/storage" ]; then
    echo "❌ ERROR: storage directory is not writable!"
    echo "Current permissions:"
    ls -la /var/www/html/storage
    exit 1
fi

# Check if bootstrap/cache directory is writable
if [ ! -w "/var/www/html/bootstrap/cache" ]; then
    echo "❌ ERROR: bootstrap/cache directory is not writable!"
    echo "Current permissions:"
    ls -la /var/www/html/bootstrap/cache
    exit 1
fi

# Check if vendor directory exists
if [ ! -d "/var/www/html/vendor" ]; then
    echo "❌ ERROR: vendor directory is missing!"
    exit 1
fi

# Check if public/build directory exists (for Vite assets)
if [ ! -d "/var/www/html/public/build" ]; then
    echo "❌ ERROR: public/build directory is missing (Vite assets not built)"
    exit 1
else
    echo "✅ public/build directory exists"
fi

# Check if Vite manifest exists
if [ ! -f "/var/www/html/public/build/manifest.json" ]; then
    echo "❌ ERROR: Vite manifest.json is missing"
    exit 1
else
    echo "✅ Vite manifest.json exists"
    echo "📋 Manifest contents:"
    cat /var/www/html/public/build/manifest.json | head -20
fi

echo "✅ Laravel setup debugging completed"
