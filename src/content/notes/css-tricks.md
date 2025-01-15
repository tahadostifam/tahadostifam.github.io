---
title: "oh-my-zsh git aliases"
description: "Some git shorthands of ZSH."
publishedAt: 2025-01-15
category: "zsh"
---

g | git 

gl | git pull 

gp | git push 

gca | git commit -v -a  

gcm | git checkout master 

gba | git branch -a 

gcp | git cherry-pick 

glgg | git log --graph --max-count=5  

ga | git add  

grh | git reset HEAD  

gsr | git svn rebase  

ggpull | git pull origin  

gdv | git diff -w "$@" | view - 

ggpnp | git pull origin && git push origin  

git-svn-dcommit-push | git svn dcommit && git push github master:svntrunk 

gpa | git add .; git commit -m "$1" 

gst | git status  

gup | git fetch && git rebase 

gc | git commit -v  

gco | git checkout  

gb | git branch 

gcount | git shortlog -sn 

glg | git log --stat --max-count=5  

gss | git status -s 

gm | git merge  

grhh | git reset HEAD --hard  

gsd | git svn dcommit 

ggpush | git push origin  
