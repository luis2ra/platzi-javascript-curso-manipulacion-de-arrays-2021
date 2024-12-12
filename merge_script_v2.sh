#!/bin/bash
branches=("9-every" "10-find" "11-includes" "12-join-split" "13-concat" "14-flat" "15-flatmap" "16-mutable" "17-sort")
for branch in "${branches[@]}"; do
    git checkout $branch
    git merge 8-some --no-edit
    if [ $? -eq 0 ]; then
        echo "Fusión exitosa en $branch"
        git push origin $branch
    else
        echo "Conflictos en $branch, resuélvelos manualmente."
        exit 1
    fi
done
