---
title: Git Command Cheatsheet
date: 1464205833696
layout: post
path: "/git-command-cheatsheet/"
---

####How to look up the first few commits

```
git log --pretty=oneline  master | tail -1

```

####Reset

```
git reset --hard xxxx
```

####Rebase commits
```
git rebase -i HEAD~2
```

####git push authentication failure due to two-factor check
```
git remote -v 
git remote remove origin 
git remote add origin git@github.com:user/repo.git  
```

####Delete multiple branches by one command line
`git branch | grep 'gnip-' | xargs git br -D`

####Use `git bisect` to find the problematic commits
1. `git bisect good <goo_commit>`
2. then mark each step, `git bisect good` or `git bisect bad`

####Sync local fork

1. `git remote -v` check whether we have an upstream or not
2. `git remote add upstream <origin_git_url>` add an upstream pointing to the origin repo
3. `git fetch upstream`
4. `git merge upstream/master`

####Show origin remote
`git remote show origin`

####Update the local branch
`git branch -D the_branch`
then
`git checkout --track origin/the_branch`

####Remove untracked local files
`git clean -f`
####Delete a file
`git reset HEAD [a file]`

####Show git remote branches
`git branch -a | grep remotes/*`

####Amend the git commit message
`git commit --amend -m "New commit message"`

####push the branch to the server
```javascript
git push origin <branch_name>

```

####pull the changes from the master
```javascript
git pull --rebase
```

####show multiple changes (3 changes)
`git format-patch --stdout HEAD~3`

####Reset commit
- `git reset --soft HEAD^`
- `git stash`

####About merge
`git merge <branch_name>`

####Remove git branch
- `git br -d <branch_name>` for local
- `git push origin <branch_name>` if want to apply to the remote