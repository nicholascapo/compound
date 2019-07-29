#!/bin/bash -exu

rm -f site/package-lock.json site/yarn.lock

for dir in lerna_npm lerna_yarn lerna_yarn_workspaces yarn_workspaces; do
  rm -rf ${dir}/site
  cp -R ./site ./${dir}/
done
