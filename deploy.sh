#!/usr/bin/env bash
yarn build
git subtree split --prefix build -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push origin --delete gh-pages
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -d gh-pages # delete the local gh-pages because you will need it: ref
rm -rf build