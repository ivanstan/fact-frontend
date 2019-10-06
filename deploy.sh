#!/usr/bin/env bash
yarn build

git add docs
git commit -m "release"
git push