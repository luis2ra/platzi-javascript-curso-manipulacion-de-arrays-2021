#!/bin/bash
branches=("2-for-each" "2-step" "4-map-reloded" "5-filter" "6-reduce" "7-reduce-reloaded")
for branch in "${branches[@]}"; do
    git checkout $branch
    git merge main
    if [ $? -eq 0 ]; then
        echo "Fusión exitosa en $branch"
        git push origin $branch
    else
        echo "Conflictos en $branch, resuélvelos manualmente."
        exit 1
    fi
done
