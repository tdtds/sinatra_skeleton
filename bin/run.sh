#!/usr/bin/env bash
npm run production
bundle exec puma -C config/puma.rb
