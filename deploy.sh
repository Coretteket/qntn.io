#!/bin/bash

ssh hetzner << 'EOF'
cd qntn.io
git pull
docker compose up -d --build
exit
EOF
