#!/bin/sh

set -e

yarn build
yarn export
aws s3 sync out/ s3://dressdiscover.org --delete
aws cloudfront create-invalidation --distribution-id E1BQRR7K2Y66U6 --paths "/*"
